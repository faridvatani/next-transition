"use client";

import { Container } from "@/components/container";
import { Wrapper } from "@/components/wrapper";
import { motion } from "framer-motion";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Wrapper className='overflow-hidden'>
      <Container className='flex flex-col md:flex-row'>
        <div className='flex w-1/2 min-w-screen flex-col md:border-r border-primary py-12 px-4'>
          <h1 className='mb-8 text-lg md:text-4xl font-bold uppercase text-purple-900'>
            {"About Us"}
          </h1>
          <p className='mb-1 text-md md:text-lg'>{"Creative Developer"}</p>
          <p className='text-justify'>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </p>
        </div>
        <div className='h-screenHeightWithoutHeader flex w-full'>
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, x: 20 }}
            className='h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1627734819947-ba884aea9801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3017&q=100'
            alt='image 1'
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default page;
