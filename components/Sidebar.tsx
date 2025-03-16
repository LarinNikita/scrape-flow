'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import Logo from './Logo';

import { Button, buttonVariants } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetHeader,
} from './ui/sheet';

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

export function MobileSidebar() {
  const pathname = usePathname();
  const [isOpen, setOpen] = React.useState(false);

  const activeRoute =
    routes.find(
      route => route.href.length > 0 && pathname.includes(route.href),
    ) || routes[0];

  return (
    <div className="bg-background block border-separate md:hidden">
      <nav className="container flex items-center justify-baseline px-8">
        <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent
            className="w-[400px] space-y-4 p-4 sm:w-[540px]"
            side="left"
            aria-describedby=""
          >
            <SheetHeader className="mb-1 py-0">
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1">
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
                  onClick={() => setOpen(prev => !prev)}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default DesktopSidebar;
