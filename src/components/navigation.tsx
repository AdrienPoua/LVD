"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Package, Truck, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      href: "/services",
      label: "Nos Services",
      icon: Package
    },
    {
      href: "/transport",
      label: "Transport",
      icon: Truck
    },
    {
      href: "/assurance",
      label: "Assurance",
      icon: Shield
    },
    {
      href: "/contact",
      label: "Contact",
      icon: MapPin
    },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold font-serif text-primary hover:text-primary/90 transition-colors">
              <Image src="/logo.png" alt="LDV ART" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} className="text-primary transition-colors flex items-center">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <item.icon className="h-4 w-4 mr-2" />
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
          <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-white">
            Devis Gratuit
          </Button>
        </div>
      </motion.div>
    </nav>
  );
}