import { FullLogoIcon } from '@/icons';
import Link from 'next/link';

const links = [
  { title: 'Билеты', href: '/tickets' },
  { title: 'Профиль', href: '/profile' }
];
const DesktopHeader = () => {
  return (
    <header className='sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-white py-[22px] max-[960px]:px-4'>
      <nav className='flex flex-row items-center gap-8'>
        <Link href={'/'}>
          <FullLogoIcon />
        </Link>
        {links.map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            className='text-base font-medium leading-normal text-gray-700 hover:text-gray-600'
          >
            {title}
          </Link>
        ))}
      </nav>

      {/* <Button size={'default'}>Выйти</Button> */}
    </header>
  );
};

export { DesktopHeader };
