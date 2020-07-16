import { Title, TitleH2 } from '../partials/Typography';
import { Wrap } from '../Wrap/index';
import { HeroWrapper, Content } from '../Hero/styled';
import Pill from '../Pill';
import { darkGreen } from '../Color';
import { Image } from '../Image';
import { YellowCTA } from '../CTA';

const Hero = ({title, subtitle, bg, img}) => {
  return (
    <HeroWrapper bg={bg} textAlign="center">
      <Wrap>
        {img && <Image src={img} />}
        <Content pt="5rem" pb="7rem">
          <Title textAlign="center">{title}</Title>
          <TitleH2 textAlign="center" mt="2rem" mb="7rem">{subtitle}</TitleH2>
          <YellowCTA href="#trees">View our trees</YellowCTA>
        </Content>
      </Wrap>
    </HeroWrapper>
  )
}

export default Hero;