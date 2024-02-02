'use client';

import { cn } from '@/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

dayjs.locale('ru');
dayjs.extend(customParseFormat);
interface TabButtonProps {
  href: string | URL;
  date: string;
}
const TabButton = ({ href, date }: TabButtonProps) => {
  const pathname = usePathname();

  return (
    <Link
      scroll={false}
      href={href}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap  rounded-sm  px-4 py-[10px] text-sm font-normal leading-tight  ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
        pathname === href && 'bg-background text-foreground shadow-sm'
      )}
    >
      {dayjs(date, 'DD.MM.YY', 'ru').format('dd, D MMM')}
    </Link>
  );
};

export { TabButton };
