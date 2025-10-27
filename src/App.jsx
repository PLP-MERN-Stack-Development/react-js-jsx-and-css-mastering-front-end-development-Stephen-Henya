// Import your components here
import { useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// import { Button } from './components/Button';

// Import context
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

// Import page components
import Home from './pages/Home';
import ApiData from './pages/ApiData';

function InnerApp() {
  const { page } = useContext(ThemeContext);
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navbar component will go here */}
        <Navbar />

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            {/* Show either Home (which contains TaskManager) or ApiData depending on page state */}
            <div className="mt-8">
              {page === "home" ? <Home /> : <ApiData />}
            </div>
          </div>

          {/* API data display will go here */}
          
        </main>

        {/* Footer component will go here */}
        <Footer />
      </div>
    </>
  );
}
function App() {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
}
export default App; 