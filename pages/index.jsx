import Head from 'next/head'
import Hero from '../components/Hero';
import { color } from 'styled-system';
import { Wrap } from '../components/Wrap';
import Pill from '../components/Pill';
import { Title } from '../components/partials/Typography';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emma's Lemons</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
      </Head>
      <Hero
        title="Growth starts with you"
        subtitle="But we can help you start"
        bg="#FFFEF3"
        pt="40rem"
        pb="5rem"
        img="/hero.png"
      />
      <Wrap
        css={`background-image: url('/lemonbg.jpg'); background-size: cover;`}
        width="100vw"
        height="50vh"
      />

      <Wrap width="80%" pt="8rem" pb="5rem" margin="0 auto" flexWrap="wrap">
        <Wrap display="flex" alignItems="center" mb="2rem" flexWrap="wrap">
          <div>Part Grown Lemon Trees</div>
          <Pill bg="#000" color="white" text="sck ya mom" />
        </Wrap>
        <Title>Emma’s is the best place to buy + help you to grow citrus trees</Title>
        <Wrap>
          
        </Wrap>
      </Wrap>
    </div>
  )
}

