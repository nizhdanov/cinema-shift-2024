'use client';

import { Movie, Profile, Ticket } from '@/icons';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { icon: <Movie />, title: 'Афиша', href: '/' },
  { icon: <Ticket />, title: 'Билеты', href: '/tickets' },
  { icon: <Profile />, title: 'Профиль', href: '/profile' }
];
const MobileBottomNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className='sticky bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-around border-t border-neutral-200 bg-white pb-[9px] pt-[10px] sm:hidden '>
      {links.map(({ title, href, icon }) => (
        <Link key={title} href={href} className='flex flex-col items-center justify-center'>
          {React.createElement(icon.type, {
            className: cn(pathname === href && ' fill-purple-800')
          })}
          <span
            className={cn(
              ' text-center text-[10px] font-normal leading-3 text-gray-500 ',
              pathname === href && 'text-purple-800'
            )}
          >
            {title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export { MobileBottomNavigation };
