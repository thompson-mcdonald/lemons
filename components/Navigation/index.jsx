import { useState } from "react";

const Navigation = () => {
  const [collapse, toggleCollapse] = useState(false);
  const [menuMessage, handleMenuMessage] = useState("MENU");

  const showingNav = () => {
    if (collapse) {
      console.log('yes');
      return (
        <div>Menu</div>
      )
    }
  }
  
  return (
    <div>
      <button onClick={() => toggleCollapse(!collapse)} css={`font-size: 5rem;`}>ah</button>
      {showingNav()}
    </div>
  )
}

export default Navigation;