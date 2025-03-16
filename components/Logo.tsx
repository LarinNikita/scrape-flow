import React from 'react';

import Link from 'next/link';
import { SquareDashedMousePointerIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LogoProps {
  fontSize?: string;
  iconSize?: number;
}

function Logo({ fontSize, iconSize = 20 }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-2xl font-extrabold',
        fontSize,
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <SquareDashedMousePointerIcon
          size={iconSize}
          className="stroke-white"
        />
      </div>
      <div className="">
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-stone-700 dark:text-stone-300">Scrape</span>
      </div>
    </Link>
  );
}

export default Logo;
