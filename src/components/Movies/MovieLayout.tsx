import { useState, useEffect } from "react";

const MovieLayout = () => {
  //   const api = import.meta.env.VITE_MOVIE_DB;

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("starwars");
  const [isLoading, setIsLoading] = useState(false);
  const api = "7188e15838mshc3c16a0de6941ffp17f32ajsnf073bbf94627";

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(query);
  }, []);

  async function fetchMovies(search:any) {
    setIsLoading(true);
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${search}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": api,
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const movieArray = Array.isArray(result) ? result : [result];
      setMovies(result.d);
      setIsLoading(false);
      console.log(movieArray);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") {
      alert("Fill in the required fields");
    } else {
      fetchMovies(query);
    }
  }

  return (
    <>
      <div className=" flex justify-end pt-[5rem]">
        <form
          onSubmit={handleSubmit}
          className="flex w-[25rem] rounded-full h-[3rem] mt-[1.7rem] bg-zinc-100 opacity-75 ms-3 flex-1/5 fixed left-0  w-1/4 z-20"
          x-data="{ search: '' }"
        >
          <input
            type="search"
            className=" w-full border-none bg-transparent pe-5 px-4 py-1 text-black focus:outline-none "
            placeholder="search"
            x-model="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="m-2 rounded px-4 py-1 font-semibold text-gray-100 bg-cyan-900 rounded-full ">
            search
          </button>
        </form>
        <div className="container h-100 m-5 d-flex justify-end w-[55rem] ">
          <h1 className="text-3xl font-bold pb-5">Movie List</h1>
          <div className="flex flex-wrap gap-3 w-full">
            {isLoading ? (
              <>
                <h1 className="text-2xl font-bold text-cyan-600 ">
                  Loading...
                </h1>
              </>
            ) : (
              <>
                {movies.map((movie) => (
                  <div className="bg-black p-6 rounded-lg w-[17rem] hover:scale-[1.02]">
                    <img
                      className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                      src={movie.i.imageUrl}
                      alt="Image Size 720x400"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {movie.y}
                    </h3>
                    <p className=" text-white text-xs">Type: {movie.qid}</p>
                    <h2 className="text-lg text-white-900 font-bold title-font mb-5 mt-3">
                      {movie.l}
                    </h2>
                    <p className="leading-relaxed text-base">{movie.Plot}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieLayout;
