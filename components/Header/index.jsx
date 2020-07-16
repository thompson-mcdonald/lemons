const { HeaderWrapper, Logo } = require("./styled")
const { Wrap } = require("../Wrap");
const { Width } = require("../Width");

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrap margin="0 auto" display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-between" width="93%" padding="2rem 0">
        <Width>
          <a href="">Home</a>
        </Width>
        <Logo>
          <a href="">Emma's</a>
        </Logo>
        <Width>
          <a href="">Get in touch</a>
        </Width>
      </Wrap>
    </HeaderWrapper>
  )
};

export default Header;