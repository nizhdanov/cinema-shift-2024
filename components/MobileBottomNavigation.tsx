'use client';

import { FilmIcon, ProfileIcon, TicketIcon } from '@/icons';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { icon: <FilmIcon />, title: 'Афиша', href: '/mobile' },
  { icon: <TicketIcon />, title: 'Билеты', href: '/mobile/tickets' },
  { icon: <ProfileIcon />, title: 'Профиль', href: '/mobile/profile' }
];
const MobileBottomNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className='sticky bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-around border-t border-neutral-200 bg-white pb-[9px] pt-[10px] sm:hidden '>
      {links.map(({ title, href, icon }) => (
        <Link
          key={title}
          href={href}
          className={cn(
            'flex flex-col items-center justify-center fill-[#97A1AF] text-center text-[10px] font-normal leading-3 text-[#97A1AF]',
            pathname === href && 'fill-purple-800 text-purple-800'
          )}
        >
          {icon}
          {title}
        </Link>
      ))}
    </nav>
  );
};

export { MobileBottomNavigation };
