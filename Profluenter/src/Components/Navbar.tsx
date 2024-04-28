import {useState} from 'react'
const Navbar = () => {
  return (
    <div className="flex justify-start gap-4 text-gray-300 bg-[black] p-2">
      <span className="text-white">Profluenter</span>
      <button className="hover:text-white">File</button>
      <button className="hover:text-white">Setting</button>
      <button className="hover:text-white">Tools</button>
      <button className="hover:text-white">Docs</button>
    </div>
  );
};
export default Navbar;