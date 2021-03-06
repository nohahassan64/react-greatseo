import React , { Component } from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import NavbarSection from './components/Navbar/index';
import Home from './components/Home/index';
import About from './components/About/index';
import CaseStudy from './components/CaseStudy/index';
import Services from './components/Services/index';
import Pricing from './components/Pricing/index';
import ContactLink from './components/ContactLink/index';
import Clients from './components/Clients/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
import './components/MFrameWork/style.css';
import ScrollToTop from './components/ScrollToTop';

class  App extends Component {
 render() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarSection />
      <Switch>
      <Route exact path="/about" component={About} />
      <Route path="/casestudy" component={CaseStudy} />
      <Route path="/services" component={Services} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={ContactLink} />
      <Route path="/" component={Home}/>
      </Switch>
      <Clients />
      <Contact />
      <Footer />
    </Router>
  );
 }
}

export default App;
