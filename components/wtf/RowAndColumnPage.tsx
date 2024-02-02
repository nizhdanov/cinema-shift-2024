'use client';

import { ChevronDownIcon } from '@/icons';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
  Label
} from '@/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const RowAndColumnPage = () => {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();

  const handleContinueButton = () => {
    const params = new URLSearchParams(searchParams);
    params.set('row', 'null');
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className='flex flex-col gap-6 px-4'>
      <Drawer>
        <DrawerTrigger className='flex w-full flex-col items-start gap-1.5'>
          <Label htmlFor='row'>Ряд</Label>
          <span className='relative w-full '>
            <Input
              placeholder='Выбрать ряд'
              id='row'
              className='text-base font-normal leading-normal text-gray-500'
            />
            <ChevronDownIcon className='absolute right-2 top-3' />
          </span>
        </DrawerTrigger>
        <DrawerContent>
          <div className='mx-auto w-full'>
            <DrawerHeader>
              <DrawerTitle>Ряд</DrawerTitle>
            </DrawerHeader>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button size={'full'}>Выбрать</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger className='flex w-full flex-col items-start gap-1.5'>
          <Label htmlFor='column'>Место</Label>
          <span className='relative w-full '>
            <Input
              placeholder='Выбрать место'
              id='column'
              className='text-base font-normal leading-normal text-gray-500'
            />
            <ChevronDownIcon className='absolute right-2 top-3' />
          </span>
        </DrawerTrigger>
        <DrawerContent>
          <div className='mx-auto w-full '>
            <DrawerHeader>
              <DrawerTitle>Место</DrawerTitle>
            </DrawerHeader>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button size={'full'}>Выбрать</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <Button
        size='full'
        disabled={!searchParams.get('row') || !searchParams.get('column')}
        onClick={() => handleContinueButton()}
      >
        Продолжить
      </Button>
    </main>
  );
};

export { RowAndColumnPage };
