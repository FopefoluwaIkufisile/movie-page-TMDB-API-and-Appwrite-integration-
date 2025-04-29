import React from "react";

const MovieCard = ({name,imageUrl, date, language, count}) => {
    const defaultImage = "8j12tohv1NBznxOSAm5NUbi6k5l.jpg"
  return (
    <>
      <div className=" relative inner-case  overflow-hidden rounded-xl flex flex-col gap-5 p-3 ">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(100%_100%_at_50%_10%,#111_20%,#6366f1_100%)]"></div>
        <h1 className="text-white text-2xl">{name}</h1>
        <div className="image  w-full">
          <img
            src={imageUrl ? `https://image.tmdb.org/t/p/w400${imageUrl}` : "https://image.tmdb.org/t/p/w500/8j12tohv1NBznxOSAm5NUbi6k5l.jpg"}
            alt="No Image"
            className="w-full text-white"
          />
        </div>
        <div className="flex gap-4">
          <p className="bg-yellow-500 px-2 py-1">{date ? date.split("-")[0] : "Year not Found"}</p>
          <p className="bg-yellow-500 px-2 py-1">{language.toUpperCase()}</p>
          <p className="bg-yellow-500 px-2 py-1">{count}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
