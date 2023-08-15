import { BrowserRouter } from 'react-router-dom';
// Routing için bunu kullanacağım.
import {About, Contact, Experience, Feedbacks, Hero,
Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        {/* Burada 3D starlar göstericeğimden relative z-0 lazımmış*/}
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
    // Routingin yapılmasını sağlıyor components
    // içindeki dosyalardan html içine
  )
}

export default App
