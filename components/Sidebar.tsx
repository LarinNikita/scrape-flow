'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from 'lucide-react';

import Logo from './Logo';

import { buttonVariants } from './ui/button';

const routes = [
  {
    label: 'Home',
    href: '',
    icon: HomeIcon,
  },
  {
    label: 'Workflows',
    href: 'workflows',
    icon: Layers2Icon,
  },
  {
    label: 'Credentials',
    href: 'credentials',
    icon: ShieldCheckIcon,
  },
  {
    label: 'Billing',
    href: 'billing',
    icon: CoinsIcon,
  },
];

function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      route => route.href.length > 0 && pathname.includes(route.href),
    ) || routes[0];

  return (
    <div className="bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground relative hidden h-screen w-fit max-w-[280px] min-w-[280px] border-separate overflow-hidden border-r-2 md:block">
      <div className="flex border-separate items-center justify-center gap-2 border-b-[1px] p-4">
        <Logo fontSize="text-2xl" />
      </div>
      <div className="p-2">{/* TODO:  Credits*/}</div>
      <div className="flex flex-col p-2">
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? 'sidebarActiveItem'
                  : 'sidebarItem',
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
