import './styles/main.css';


import Navbar from './components/navbar/Navbar';
import Project from './components/pages/Project';
import Skills from './components/pages/Skills';

import Footer from './components/footer/Footer';
import Contacts from './components/pages/Contacts';




function App() {
  return (
        <div className="App">
          
          <Navbar />
          {/* <Project /> */}
          {/* <Skills /> */}
          <Contacts />
          <Footer />

    </div>
  );
}

export default App;
