import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
const Discover = () => {
  const genereTitle = "pop";
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genereTitle}
        </h2>
        <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm: mt-0 mt-5">
          {genres.map((x, index) => (
            <option key={x.value} option={x.value}>
              {x.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5].map((x, i) => (
          <SongCard key={x.key} song={x} i={i} />
        ))}
      </div>
    </div>
  );
};
export default Discover;
