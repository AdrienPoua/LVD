"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Package, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

export default function Index() {
    return (
        <header className="bg-transparent">
            <DesktopMenu />
            <MobileMenu />
        </header>
    );
}

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex md:items-center md:justify-between py-3 w-full max-w-screen-2xl mx-auto">
            <div className="flex-shrink-0">
                <Logo />
            </div>
            <NavigationMenu className="flex-1">
                <NavigationMenuList className="flex-1">
                    {menuItems.map((item) => (
                        <NavigationMenuItem key={item.href} >
                            <Link href={item.href} className="relative group flex">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <UnderlineEffect />
                                    <item.icon className="max-h-4 max-w-4 mr-2" />
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
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
                            className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
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
        </nav>)

}

const UnderlineEffect = () => {
    return (
        <span
            className={cn(
                "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-accent transition-transform duration-200",
                "group-hover:scale-x-100"
            )}
        />
    )
}

const menuItems = [
    {
        href: "/services",
        label: "Services",
        icon: Package
    },
    {
        href: "/assurance",
        label: "Assurance",
        icon: Shield
    },
    {
        href: "/valeurs",
        label: "Nos valeurs",
        icon: Shield
    },
    {
        href: "/contact",
        label: "Contact",
        icon: MapPin
    },
];