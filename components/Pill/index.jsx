import { PillWrapper } from './styled';

const Pill = ({text, bg, color, textAlign, ml, mr, mb, mt}) => {
  return (
    <PillWrapper bg={bg} color={color} textAlign={textAlign} ml={ml} mr={mr} mt={mt} mb={mb}>
      {text}
    </PillWrapper>
  )
}

export default Pill;