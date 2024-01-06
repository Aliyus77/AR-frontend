import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PpalContent from './components/Principal';
import Footer from './components/Footer';
import { AppLoader } from './components/AppLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <AppLoader />
      ) : (
        <div className="bg-white text-black dark:bg-black dark:text-white">
          <Header />
          <PpalContent />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

