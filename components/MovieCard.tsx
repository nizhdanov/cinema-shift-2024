import { Button } from './ui';

const MovieCard = () => {
  return (
    <div className='flex w-full flex-col items-start gap-4'>
      <div className='relative  h-[300px] w-full rounded-lg bg-slate-500'>
        <div className='absolute bottom-0 right-0  flex flex-col gap-1 rounded-br-lg rounded-tl-lg bg-neutral-100 px-4 py-2'>
          <p className='text-sm font-medium leading-[14px] text-gray-900'>фантастика</p>
          <p className="text-center font-['Roboto'] text-sm font-normal leading-[14px] text-gray-900">
            США, 2023
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-xl font-semibold leading-normal  text-gray-900'>Title</h3>
        <p className='text-sm font-normal leading-tight  text-gray-500'>Subtitle</p>
      </div>

      <div>
        <div>STARS</div>
        <p className='text-sm font-normal leading-tight  text-gray-500'>Kinopoisk - 8.4</p>
      </div>

      <Button size={'full'}>Подробнее</Button>
    </div>
  );
};

export { MovieCard };
