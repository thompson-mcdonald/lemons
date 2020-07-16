import Head from "next/head";
import Hero from "../components/Hero";
import { color } from "styled-system";
import { Wrap } from "../components/Wrap";
import Pill from "../components/Pill";
import Card from "../components/Card";
import { Title, Small } from "../components/partials/Typography";

const lemons = [
  {
    name: "Eureka Lemon",
    color: "#F2E56D",
    tagline: "Produces abundantly, year-round.",
    description: "The common supermarket Lemon",
  },
  {
    name: "Trifoliate Orange",
    color: "#FDB389",
    tagline: "Can be seen in the gardens of St Paul's Cathedral. ",
    description:
      "Most people consider them inedible fresh, but they can be made into marmalade.",
  },
  {
    name: "Yen Ben Lemon",
    color: "#F3CE4A",
    tagline: "The hardiest citrus in New Zealand.",
    description:
      "It has a smooth, thin skin, a high level of acidic juice and few pips.",
  },
  {
    name: "Bergamot Oranges",
    color: "#D3F291",
    description:
      "The Prince of Pears. Blossoms during the winter. Tastes less sour than lemon, but more bitter than grapefruit.",
  }
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emma's Lemons</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
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
        css={`
          background-image: url("/lemonbg.jpg");
          background-size: cover;
        `}
        width="100vw"
        height="50vh"
      />

      <Wrap width="80%" pt="8rem" pb="5rem" margin="0 auto" flexWrap="wrap">
        <Wrap display="flex" alignItems="center" mb="2rem" flexWrap="wrap">
          <Small>Part Grown Lemon Trees</Small>
          <Pill
            ml={3}
            bg="#000"
            color="white"
            text="Citrus Experts"
            marginLeft={3}
          />
        </Wrap>
        <Title>
          Emma’s is the best place to buy + help you to grow citrus trees
        </Title>
        <Wrap
          display="flex"
          flexWrap="nowrap"
          justifyContent="space-between"
          mt={4}
        >
          {lemons && lemons.map((lemon) => (
              <Card
                bg={lemon.color} 
                title={lemon.name} 
                tagline={lemon.tagline} 
                description={lemon.description}
                width="calc(25% - 10px)"
                key={lemon.name}
              />
            ))}
        </Wrap>
      </Wrap>
    </div>
  )
}

