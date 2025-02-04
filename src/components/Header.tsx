'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Package, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Logo from '@/components/Logo';
import { UnderlineEffect } from '@/components/ui/UnderlineEffect';

export default function Index() {
  return (
    <header className='bg-transparent'>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

const DesktopMenu = () => {
  return (
    <div className='mx-auto hidden w-full max-w-screen-2xl py-3 md:flex md:items-center md:justify-between'>
      <div className='flex-shrink-0'>
        <Logo />
      </div>
      <NavigationMenu className='flex-1'>
        <NavigationMenuList className='flex-1'>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href} className='group relative'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href={item.href}>
                <UnderlineEffect />
                <item.icon className='max-w-4 mr-2 max-h-4' />
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className='flex items-center md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary focus:outline-none'
        >
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className='space-y-1 bg-white px-2 pb-3 pt-2 sm:px-3'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              <item.icon className='h-5 w-5' />
              {item.label}
            </Link>
          ))}
          <Button className='mt-4 w-full bg-accent text-white hover:bg-accent/90'>Devis Gratuit</Button>
        </div>
      </motion.div>
    </nav>
  );
};

const menuItems = [
  {
    href: '/services',
    label: 'Services',
    icon: Package,
  },
  {
    href: '/assurance',
    label: 'Assurance',
    icon: Shield,
  },
  {
    href: '/#partenaires',
    label: 'Nos partenaires',
    icon: Shield,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: MapPin,
  },
];
