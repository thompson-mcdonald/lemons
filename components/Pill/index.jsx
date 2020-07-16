import { PillWrapper } from './styled';

const Pill = ({text, bg, color, textAlign}) => {
  return (
    <PillWrapper bg={bg} color={color} textAlign={textAlign}>
      {text}
    </PillWrapper>
  )
}

export default Pill;