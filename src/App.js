import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experiences />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
