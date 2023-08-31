"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export const Header = () => {
  const path = usePathname();

  return (
    <header className='bg-beige relative z-10 w-full'>
      <Container className='flex flex-wrap items-center border-b border-primary py-8'>
        <Link href='/' className='mx-4 text-3xl font-bold text-gray-800'>
          {"Next Transition"}
        </Link>
        <nav>
          <ul className='[&_li]:ml-4 ml-12 flex'>
            {links.map((link) => (
              <li key={link.href}>
                <Link className='relative' href={link.href}>
                  {link.href === path && (
                    <motion.span
                      layoutId='underline'
                      className='absolute left-0 top-full mt-1 block h-[1px] w-full bg-secondary'
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
