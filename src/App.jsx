import Navbar from './components/Navbar';
import Header from './components/Header';
import CardList from './components/Card';
import Footer from './components/Footer';
// import AboutMe from './components/AboutMe';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

// TODO
function App() {
  return (
    <div>

      <Header />
      <Navbar />
      {/* <AboutMe /> */}

      <div> Portfolio
        <CardList />
      </div>

      {/* <Contact /> */}
      {/* <Resume /> */}
      <Footer />

    </div>
  );
}

export default App;
