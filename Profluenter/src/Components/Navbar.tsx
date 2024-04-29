import React from "react";

interface NavbarProps {
  theme:string;
  button:JSX.Element;
  title:string;
}
const Navbar:React.FC<NavbarProps> = ({theme, button, title}) => {

  return (
    <div className={theme}>
      <span className={title}>Profluenter</span>
      <button className="hover:text-white">File</button>
      <button className="hover:text-white">Setting</button>
      <button className="hover:text-white">Tools</button>
      <button className="hover:text-white">Docs</button>
      {button}
    </div>
  );
};

export default Navbar;
