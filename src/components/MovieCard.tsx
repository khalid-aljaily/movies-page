import {StarIcon,Plus} from 'lucide-react'
import { Button } from './ui/button';

type movie = 
  {
    name: string,
    rating: number,
    releaseYear: number,
    genres: string[],
    img:string,
    numberOfRatings:number
  }

function MovieCard({movie}:{movie:movie}) {

function setStars(rating:number) {
  const maxRating = 5;
  const fullStar = <StarIcon className='fill-yellow-400 text-yellow-400 h-3 md:h-4 w-4 md:w-5'/>;
  const emptyStar = <StarIcon  className='text-yellow-400 h-3 md:h-4 w-4 md:w-5'/>;

  const fullStarsCount = Math.floor(rating);
  const emptyStarsCount = maxRating - fullStarsCount;

  const stars = [];

  for (let i = 0; i < fullStarsCount; i++) {
    stars.push(fullStar);
  }

  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(emptyStar);
  }

  return stars;
}
  return (
    <div className='flex gap-4'>
      <img src={movie.img} alt={movie.name} className='max-w-[150px] h-[150px] object-cover' />
      <div className='flex flex-col '>
        <h3 className='font-bold mb-2'>{movie.name}</h3>
        <div className='flex items-center gap-2'>
          <p className='text-sm'>{movie.rating}</p>
        <div className='flex items-start'>
        {setStars(movie.rating)}
        </div>
        <p className='text-sm'>{movie.numberOfRatings.toString()}</p>
        </div>
        <p className='text-sm text-white/75'>

       {
         movie.genres.map((genre)=>
         movie.genres.indexOf(genre)!=movie.genres.length-1?(
           genre+', '
           ):genre)
          }.
          </p>
          <Button className='w-full flex justify-center gap-2 rounded-full bg-white/5 mt-auto'><Plus className='h-5'/> Watchlist</Button>
      </div>
    </div>
  )
}

export default MovieCard