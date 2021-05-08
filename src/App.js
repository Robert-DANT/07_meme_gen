import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar.js'
import Footer from './components/Footer.js'
import Meme from './components/Meme.js'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Meme />
      <Footer />
      <AboutUs />
    </div>
  );
}

export default App;
