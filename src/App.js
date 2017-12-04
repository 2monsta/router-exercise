import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './Atlanta';
import Images from './Images';
import Weather from './components/Weather';
import MayorMessage from './MayorMessage';
import AboutAtlanta from './About';


var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <About/>
            <Route path={"/home"} component={Home} />
            <Route path={"/about"} component={AboutAtlanta} />
            <Route path={"/images"} render={()=>
              <Images images={atlImages} />
            }/>
            <Route path={"/weather"} component={Weather} />
            <Route path={"/mayormessage"} component={MayorMessage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
