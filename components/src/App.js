import logo from './logo.svg';
import './style/App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  let title = 'Welcome to this website';
  return (
    <>
      <Header title={title} />
      <main className='container'>
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </>

  );
}

export default App;
