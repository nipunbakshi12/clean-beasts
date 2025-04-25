import './App.css';
import Navbar from './Sections/Navbar/Navbar'
import HomePage from './Sections/HomePage/HomePage'
import BookService from './Sections/BookaService/BookService'
import Login from './Sections/Login/Login';

import { motion, useScroll } from 'framer-motion'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FAQ from './Sections/FAQs/FAQ';
import Footer from './Sections/Footer/Footer';

// import Varities from './Sections/Varities/Varities';

function App() {
  const { scrollYProgress } = useScroll();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar /> <HomePage /> <Footer /> </>
    },
    {
      path: '/bookservice',
      element: <> <Navbar /> <BookService /> <Footer /> </>
    },
    {
      path: '/faqs',
      element: <> <Navbar /> <FAQ /> <Footer /> </>
    },
    {
      path: '/login',
      element: <> <Navbar /> <Login /> <Footer /></>
    }
  ])
  return (
    <div className="App">
    <motion.div
        style={{
          height: "4px",
          backgroundColor: "red",
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
          zIndex: "100",
        }}
      ></motion.div>

<RouterProvider router={router}/>


















      {/* <Navbar />
      <Testimonials /> */}
      {/* <Varities /> */}
      {/* <ModernVarity />
      <Choose />
      <Footer /> */}
    </div>
  );
}

export default App;
