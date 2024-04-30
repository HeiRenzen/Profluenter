//import component disini
import { useState } from 'react';
import Navbar from './Components/Navbar';
interface theme {
  true: string,
  false: string,
  true1: string,
  false1: string
}
function App() {
  const [toggleDark, toggleDarkSet] = useState(true);
  const darkMode = () => {
    toggleDarkSet(!toggleDark);
  };
  const darkModeButton = <button className="hover:text-white" onClick={darkMode}>o</button>
  const theme: theme = {
    true: "flex justify-start gap-4 text-gray-300 bg-black p-2",
    false: "flex justify-start gap-4 text-gray-900 bg-white p-2",
    true1: "text-white",
    false2: "text-black"
  }

  return (
    <main>
      <Navbar theme={theme[`${toggleDark}`]} title={theme[`${toggleDark}1`]} button={darkModeButton}/>
    </main>
  );
}

export default App;
