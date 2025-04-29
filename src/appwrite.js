const project_id = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const database_id = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collection_id = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
import { Client, Databases, ID, Query } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(project_id);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await database.listDocuments(database_id, collection_id, [
      Query.equal("searchTerm", searchTerm),
    ]);
    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await database.updateDocument(database_id, collection_id, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(database_id, collection_id, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        movie_name: movie.title
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(database_id, collection_id, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents;
  } catch (err) {
    console.log(err);
  }
};
