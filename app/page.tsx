import { Container } from '@/components/container';
import { Wrapper } from '@/components/wrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <Wrapper className='h-screenHeightWithoutHeader bg-hero bg-cover bg-center'>
      <Container className='text-beige flex h-full flex-col text-center justify-center  lg:text-2xl'>
        <h1 className='mb-8 text-3xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text whitespace-normal'>
          Welcome to Next Transition
        </h1>
        <p className='mx-auto max-w-xl text-primary'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <Link
          href='/about-us'
          className='text-primary mx-auto mt-12 text-lg uppercase rounded-full border-2 border-primary bg-transparent backdrop-blur-md p-4 transition-colors hover:bg-primary hover:text-beige'
        >
          {'More about us'}
        </Link>
      </Container>
    </Wrapper>
  );
}
