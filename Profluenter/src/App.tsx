//import component disini
import { useState } from 'react';
import Navbar from './Components/Navbar';
interface theme {
  true: string,
  false: string
}
interface title {
  true: string,
  false: string
}
function App() {
  const [toggleDark, toggleDarkSet] = useState(true);
  const darkMode = () => {
    toggleDarkSet(!toggleDark);
  };
  const darkModeButton = <button className="hover:text-white" onClick={darkMode}>o</button>
  const theme: theme = {
    true: "flex justify-start gap-4 text-gray-300 bg-black p-2",
    false: "flex justify-start gap-4 text-gray-900 bg-white p-2"
  }
  const title: title = {
    true: "text-white",
    false: "text-black"
  }

  return (
    <main>
      <Navbar theme={theme[`${toggleDark}`]} title={title[`${toggleDark}`]} button={darkModeButton}/>
    </main>
  );
}

export default App;
