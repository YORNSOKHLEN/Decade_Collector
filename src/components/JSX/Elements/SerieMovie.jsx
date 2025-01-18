const SerieMovie = ({
  titleOfSerie: { titleSerie, movies, icon, imgMovie, id },
}) => {
  const hoverStyles = {
    KR: "left-[60px]",
    MCU: "right-[78px]",
    DCU: "right-[150px]",
    SPS: "right-[60px]",
  };

  return (
    <div className="group z-10">
      {/* Series Title with Icon */}
      <div className="flex gap-1 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
        <a href="./KamenRider/KamenRider.html">{titleSerie}</a>
        {icon}
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute mt-0 bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg w-auto justify-items-center ${hoverStyles[id]}`}
      >
        <div className="flex text-lg gap-4 mx-7 ">
          {/* Movie Links */}
          <div className="grid grid-cols-2 gap-x-5 space-y-0">
            {movies &&
              movies.map((movie, id) => (
                <a
                  key={id}
                  href={movie.link}
                  className="block hover:text-[#38A93B] rounded"
                >
                  {movie.title}
                </a>
              ))}
          </div>
          {/* Image */}
          {imgMovie && (
            <div>
              <img
                src={imgMovie}
                alt={titleSerie}
                className="w-[300px] rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SerieMovie;
