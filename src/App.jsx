import Header from './components/Header'; 
import PpalContent from './components/Principal';  
import Footer from './components/Footer'; 

function App() {
  
  return (
    <>      
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <Header />        
        <PpalContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
