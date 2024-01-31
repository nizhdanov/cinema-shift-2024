import { buttonVariants } from './ui';
import { Country, UserRatings } from '@/types';
import Link from 'next/link';
import { UrlObject } from 'url';

interface MovieCard {
  name: string;
  subtitle: string;
  userRatings: UserRatings;
  genres: string[];
  country?: Country;
  img?: string;
  description?: string;
  href: string | UrlObject;
  btnTitle?: string;
}

const MovieCard = ({
  name,
  country,
  genres,
  userRatings,
  description,
  btnTitle,
  href
}: MovieCard) => {
  return (
    <div className='flex w-full flex-col items-start gap-4'>
      <div className='relative h-[300px] w-full rounded-lg bg-slate-500 '>
        <div className='absolute bottom-0 right-0 flex flex-col gap-1 rounded-br-lg rounded-tl-lg bg-neutral-100 px-4 py-2'>
          <p className='text-sm font-medium leading-[14px] text-gray-900'>{genres[0]}</p>
          <p className="text-center font-['Roboto'] text-sm font-normal leading-[14px] text-gray-900">
            {country?.name}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-xl font-semibold leading-normal  text-gray-900'>{name}</h3>
        <p className='text-sm font-normal leading-tight  text-gray-500'>Subtitle</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-sm font-normal leading-tight  text-gray-500'>
          Imdb - {userRatings.imdb}
        </p>
        <p className='text-sm font-normal leading-tight  text-gray-500'>
          Kinopoisk - {userRatings.kinopoisk}
        </p>
      </div>

      {description && (
        <p className='text-base font-normal leading-normal text-gray-700'>{description}</p>
      )}

      <Link className={buttonVariants({ size: 'full' })} href={href}>
        {btnTitle}
      </Link>
    </div>
  );
};

export { MovieCard };
