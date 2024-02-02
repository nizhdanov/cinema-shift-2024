import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='px-4'>
      <div className='flex w-full flex-col items-start gap-4'>
        <Skeleton className='h-[300px] w-full  '></Skeleton>
        <div className='flex flex-col gap-1'>
          <Skeleton className='h-[30] w-full ' />
          <Skeleton className='h-[17px] w-full ' />
        </div>

        <div className='flex flex-col gap-1'>
          <Skeleton className='h-[17px] w-full ' />
          <Skeleton className='h-[17px] w-full ' />
        </div>

        <Skeleton className='h-[144px] w-full ' />

        <Skeleton className='h-[56px] w-full ' />
      </div>
    </div>
  );
};

export default Loading;
