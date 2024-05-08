import Navbar from './components/Navbar';
import Header from './components/Header';
// import Card from './components/Card';
import CardList from './components/Card';
import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
    
      <Header />
      <Navbar />
      <CardList />
      <Footer/>
      
    </div>
  );
}

export default App;
