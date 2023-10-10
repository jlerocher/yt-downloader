import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body.js';

function App() {
  return (
    <>
      <Header 
      title="Jlerocher Youtube Downloader" 
      githubLink="https://www.github.com/jlerocher/yt-downloader" 
      twitterLink="https://www.twitter.com/jlerocher2023"></Header>
      <Body></Body>
      <Footer twitterLink="https://www.twitter.com/jlerocher2023"></Footer>
    </>
  );
}

export default App;
