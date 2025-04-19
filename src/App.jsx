
import './App.css'
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
function App() {
  return <div className='App'>
        <Navbar/>
        <Hero/>
  </div>
  
}

export default App
