import React from 'react';

import { SignedIn, UserButton } from '@clerk/nextjs';

import DesktopSidebar from '@/components/Sidebar';
import { Separator } from '@/components/ui/separator';
import BreadcrumbHeader from '@/components/Breadcrumb';
import { ModeToggle } from '@/components/ThemeModeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="container flex h-[50px] items-center justify-between px-6 py-4">
          <BreadcrumbHeader />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="text-accent-foreground container flex-1 py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
