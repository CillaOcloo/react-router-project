import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ServiceDetails from './Pages/ServiceDetails';
import NotFoundPage from './Pages/NotFoundPage';

 function Router() {
    return (
       <BrowserRouter>
       <Navbar />
       <Switch>
           <Route exact path="/" component={Home} />
           <Route  path="/about" component={About} />
           <Route  path="/contact" component={Contact} />
           <Route  exact path="/services" component={Services} />
           <Route  path="/services/:id" component={ServiceDetails} />
           <Route  component={NotFoundPage} />
       </Switch>
       </BrowserRouter>
    )
}
export default Router;
