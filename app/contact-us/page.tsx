'use client';

import { Container } from '@/components/container';
import { Wrapper } from '@/components/wrapper';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Wrapper className='overflow-hidden'>
      <Container className='flex flex-col md:flex-row'>
        <div className='h-screenHeightWithoutHeader flex w-full'>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, x: -20 }}
            className='h-full w-full object-cover'
            src='image-3.jpeg'
            alt='contact us image'
            loading='lazy'
            placeholder='blur'
          />
        </div>
        <div className='flex w-1/2 min-w-screen flex-col md:border-l border-primary py-12 px-4'>
          <h1 className='mb-8 text-center text-lg md:text-4xl font-bold uppercase text-red-300'>
            {'Contact Us'}
          </h1>
          {/* here's a contact us information like phone and address */}
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col'>
              <p className='mb-1 text-md md:text-lg'>{'Phone'}</p>
              <p className='text-justify'>{'+62 812 3456 7890'}</p>

              <p className='mb-1 text-md md:text-lg'>{'Address'}</p>
              <p className='text-justify'>{'Jl. Lorem Ipsum Dolor Sit Amet'}</p>

              <p className='mb-1 text-md md:text-lg'>{'Email'}</p>
              <p className='text-justify'>
                <a href='#' className='text-primary'>
                  {'lorem@ipsum.com'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default page;
