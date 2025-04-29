const api_url = import.meta.env.VITE_API_BASE_URL;
const search_url = import.meta.env.VITE_API_SEARCH_URL;
const bearer_token = import.meta.env.VITE_API_BEARER_TOKEN;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearer_token}`
    }
  };
  

export const getMovies = async (query) => {
    const url = query ? search_url + encodeURIComponent(query) : api_url;
    try{
        const response = await fetch(url, options)
        const data = await response.json()
        // throw new Error("nawa o")
        return data;
    }
    catch(err){
        console.log(err)
    }
}

