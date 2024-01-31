import { buttonVariants } from './ui';
import { baseUrl } from '@/api';
import { Film } from '@/types';
import { roboto } from '@/ui';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface FilmCardProps {
  href: string | URL;
  film: Film;
  children: React.ReactNode;
  isMore?: boolean;
}
const FilmCard: React.FC<FilmCardProps> = ({ href, film, children, isMore }) => {
  return (
    <div className='flex w-full flex-col items-start gap-4'>
      <div className='relative h-[300px] w-full  '>
        <Image
          priority={film.id === '1' ? true : false}
          fill
          alt='Постер'
          src={`${baseUrl}${film.img}`}
          className='rounded-lg object-cover'
        />
        <circle className='absolute left-0 top-0 m-2 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-slate-50 font-bold text-slate-600'>
          {film.ageRating}
        </circle>

        <div className='absolute bottom-0 right-0 flex flex-col gap-1 rounded-tl-lg bg-neutral-100 px-4 py-2'>
          <p
            className={cn(
              roboto.className,
              'text-center  text-sm font-normal leading-[14px] text-gray-900'
            )}
          >
            {film.country.name}, {film.releaseDate.slice(-4)}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-xl font-semibold leading-normal  text-gray-900'>{film.name}</h3>
        <p className='text-sm font-normal capitalize leading-tight text-gray-500'>
          {film.genres.join(' ')}
        </p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-sm font-normal leading-tight  text-gray-500'>
          Imdb - {film.userRatings.imdb}
        </p>
        <p className='text-sm font-normal leading-tight  text-gray-500'>
          Kinopoisk - {film.userRatings.kinopoisk}
        </p>
      </div>

      {isMore && (
        <>
          <p className='text-base font-normal leading-normal text-gray-700'>{film.description}</p>
          <p>
            Режиссеры:{' '}
            {film.directors.map((director) => (
              <>{director.fullName}</>
            ))}
          </p>
        </>
      )}

      <Link className={buttonVariants({ size: 'full' })} href={href}>
        {children}
      </Link>
    </div>
  );
};

export { FilmCard };
