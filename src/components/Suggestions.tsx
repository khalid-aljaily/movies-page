import MovieCard from "./MovieCard";
import movieImg from "@/assets/51BvLPy81sL._AC_UF894,1000_QL80_.jpg";
import { Button } from "./ui/button";
import action from '@/assets/action.jpg';
import drama from '@/assets/dram.jpg';
import adventure from '@/assets/drama.jpg'
import sciFi from '@/assets/si-fi.webp';

const movies = [
  {
    name: "The Avengers",
    rating: 4.0,
    numberOfRatings: 1500,
    releaseYear: 2012,
    genres: ["Action", "Adventure", "Sci-Fi"],
    img: movieImg,
  },
  {
    name: "Inception",
    rating: 4.4,
    numberOfRatings: 2000,
    releaseYear: 2010,
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    img: movieImg,
  },
  {
    name: "The Shawshank Redemption",
    rating: 4.7,
    numberOfRatings: 3000,
    releaseYear: 1994,
    genres: ["Drama"],
    img: movieImg,
  },
];

const genres = [
  {title:'Action',img:action},{title:'Drama',img:drama},{title:'Adventure',img:adventure},{title:'Sci-Fi',img:sciFi}
]

function Suggestions() {
  return (
    <div className="flex-1 ">
      {/* popular */}
      <div className="border-2 border-blue-500 p-5">
        <div className="flex justify-between">
          <h2 className="font-bold">Most Popular</h2>
          <Button variant={"link"} className="text-blue-200">
            See all
          </Button>
        </div>
        {movies.map((movie, idx) => (
          <>
            <MovieCard key={movie.name} movie={movie} />
            {idx !== movies.length - 1 && (
              <div className="bg-white/10 w-full h-[1px] my-5" />
            )}
          </>
        ))}
      </div>
      {/* genres */}
      <div className="mt-5">
      <div className="flex justify-between">
          <h2 className="font-bold">Genre</h2>
          <Button variant={"link"} className="text-blue-200">
            See all
          </Button>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
{
  genres.map(genre=><div key={genre.title} className=" relative h-[80px] [&:hover>img]:scale-110 text-white flex justify-center items-center overflow-hidden rounded-md cursor-pointer">

    <img src={genre.img} alt={genre.title} className="h-full w-full object-cover duration-300 " />
    <p className="absolute text-gray-100  left-1/2 -translate-x-1/2">{genre.title}</p>
  </div>)
}
    </div>
      </div>
    </div>
  );
}

export default Suggestions;
