import { buttonVariants } from './ui';
import { api } from '@/requests';
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
          src={`${api.baseUrl}${film.img}`}
          className='rounded-lg object-cover'
        />
        <div className='absolute left-0 top-0 m-2 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-slate-50 font-bold text-slate-600'>
          {film.ageRating}
        </div>

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
        <p className='text-sm font-normal leading-tight  text-gray-500 '>
          IMDb -{' '}
          <span
            className={
              Number(film.userRatings.imdb) > 7
                ? 'text-[#3bb33b]'
                : Number(film.userRatings.imdb) < 3
                  ? 'text-[#ff0000]'
                  : 'text-gray-500'
            }
          >
            {film.userRatings.imdb}
          </span>
        </p>
        <p className='text-sm font-normal leading-tight  text-gray-500 '>
          Кинопоиск -{' '}
          <span
            className={
              Number(film.userRatings.kinopoisk) > 7
                ? 'text-[#3bb33b]'
                : Number(film.userRatings.kinopoisk) < 4
                  ? 'text-[#ff0000]'
                  : 'text-gray-500'
            }
          >
            {film.userRatings.kinopoisk}
          </span>
        </p>
      </div>

      {isMore && (
        <>
          <p className='text-base font-normal leading-normal text-gray-700'>{film.description}</p>
          <p>Режиссер: {film.directors[0].fullName}</p>
        </>
      )}

      <Link className={cn(buttonVariants({ size: 'full' }), ' ')} href={href}>
        {children}
      </Link>
    </div>
  );
};

export { FilmCard };
