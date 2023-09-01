// app/providers.tsx
'use client'

import React, { useEffect } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Box, Stack, Text, Heading, Input, Button, Image } from '@chakra-ui/react';
import Navbar from "./Navbar.js";
import Section1 from './section1.js';
import Section2 from './section2.js';
import Section3 from './section3.js';
import Section4 from './section4.js';
import FaqSection from './faq.js';
import Footer from './footer.js';
import Contact from './contact.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <CacheProvider>
      <ChakraProvider>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <FaqSection />
        <Contact />
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  )
}
