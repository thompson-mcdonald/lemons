import { CardWrapper, SmTitle } from "./styled";
import { Small } from "../partials/Typography";

const Card = ({ color, bg, title, description, tagline, width }) => {
  return (
    <CardWrapper bg={bg} color={color} width={width}>
      <SmTitle>{title}</SmTitle>
      <Small>{description}</Small>
    </CardWrapper>
  )
};

export default Card;