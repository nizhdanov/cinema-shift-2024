'use client';

import { ArrowSmallRightIcon, ChevronDownIcon } from '@/icons';
import { FilmHallCell } from '@/types';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerInput,
  DrawerTitle,
  DrawerTrigger,
  Label
} from '@/ui';
import { cn } from '@/utils';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface TicketProps {
  places: [FilmHallCell[]];
}

const Ticket = ({ places }: TicketProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleRowInput = (row: string, ticketIndex: number) => {
    const params = new URLSearchParams(searchParams);
    if (row) {
      params.set(`row${ticketIndex}`, row);
      params.delete(`column${ticketIndex}`);
    }
    replace(`${pathname}?${params}`);
  };

  const handleColumnInput = (column: string, ticketIndex: number) => {
    const params = new URLSearchParams(searchParams);
    if (column) {
      params.set(`column${ticketIndex}`, column);
    }
    replace(`${pathname}?${params}`);
  };

  const addTicket = (count: string) => {
    const params = new URLSearchParams(searchParams);
    if (count) {
      params.set('count', (Number(count) + 1).toString());
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <>
      {[...Array(Number(searchParams.get('count')))].map((_, ticketIndex) => (
        <div key={ticketIndex} className='flex flex-col gap-6 '>
          <p className='text-sm font-normal leading-tight  text-gray-400'>
            Билет {ticketIndex + 1}
          </p>
          <Drawer>
            <div className='flex w-full flex-col items-start gap-1.5'>
              <Label>Ряд</Label>
              <DrawerTrigger className='relative w-full '>
                <DrawerInput
                  placeholder='Выбрать ряд'
                  defaultValue={searchParams.get(`row${ticketIndex + 1}`) || undefined}
                  className='text-base font-normal leading-normal text-gray-700 placeholder:text-gray-500'
                />
                <ChevronDownIcon className='absolute right-2 top-3' />
              </DrawerTrigger>
            </div>
            <DrawerContent className=' px-4'>
              <DrawerHeader>
                <DrawerTitle>Ряд</DrawerTitle>
              </DrawerHeader>
              {places.map((row, rowIndex) => (
                <DrawerClose
                  key={rowIndex}
                  onClick={() => {
                    handleRowInput((rowIndex + 1).toString(), ticketIndex + 1);
                  }}
                  className='flex flex-row items-center justify-between py-2'
                >
                  <p className='text-base font-normal leading-normal text-gray-900'>
                    {rowIndex + 1}
                  </p>
                  <ArrowSmallRightIcon />
                </DrawerClose>
              ))}
            </DrawerContent>
          </Drawer>

          <Drawer>
            <div className='flex w-full flex-col items-start gap-1.5'>
              <Label>Место</Label>
              <DrawerTrigger className='relative w-full '>
                <DrawerInput
                  disabled={!searchParams.get(`row${ticketIndex + 1}`)}
                  placeholder='Выбрать место'
                  defaultValue={searchParams.get(`column${ticketIndex + 1}`) || undefined}
                  className='text-base font-normal leading-normal text-gray-500'
                />
                <ChevronDownIcon className='absolute right-2 top-3 ' />
              </DrawerTrigger>
            </div>
            <DrawerContent className=''>
              <DrawerHeader>
                <DrawerTitle>Место</DrawerTitle>
              </DrawerHeader>
              {searchParams.get(`row${ticketIndex + 1}`) &&
                places[Number(searchParams.get(`row${ticketIndex + 1}`)!)].map(
                  ({ price, type }, columnIndex) => (
                    <>
                      {type !== 'BLOCKED' && (
                        <div
                          key={columnIndex}
                          onClick={() =>
                            handleColumnInput((columnIndex + 1).toString(), ticketIndex + 1)
                          }
                          className={cn(
                            'flex flex-row items-center gap-1 px-4 py-2',
                            columnIndex ===
                              Number(searchParams.get(`column${ticketIndex + 1}`)) - 1 &&
                              'bg-gray-100'
                          )}
                        >
                          <p className='text-base font-normal leading-normal text-gray-900'>
                            {columnIndex + 1},
                          </p>
                          <p className='text-base font-normal leading-normal text-gray-500'>
                            {price} ₽
                          </p>
                        </div>
                      )}
                    </>
                  )
                )}

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button>Выбрать</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ))}
      <Button
        onClick={() => addTicket(searchParams.get('count') || '0')}
        className='w-full'
        variant={'outline'}
      >
        Добавить билет
      </Button>
    </>
  );
};

export { Ticket };
