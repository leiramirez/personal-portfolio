import { BrowserRouter } from 'react-router-dom';

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Stylesheet
import './App.css';

// Fonts
import "./fonts/Poppins-Bold.ttf";
import "./fonts/Poppins-ExtraLight.ttf";
import "./fonts/Poppins-Italic.ttf";
import "./fonts/Poppins-Light.ttf";
import "./fonts/Poppins-Medium.ttf";
import "./fonts/Poppins-Regular.ttf";
import "./fonts/Poppins-SemiBold.ttf";
import "./fonts/Poppins-Thin.ttf";

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas)
