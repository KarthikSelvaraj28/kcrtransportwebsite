// App.js
import React from 'react';
import DrawerAppBar from './components/DrawerAppBar';
import Banner from './components/Banner';
import Buses from './components/Buses';
import Cargo from './components/Cargo';
import Tippers from './components/Tippers';
import DieselBowsers from './components/DieselBowsers';
import Contact  from './components/Contact';
import ImageSlider from './components/imageslider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

function App() {
  return (
    <div>
      <span id="home"></span>
      <DrawerAppBar />
      <div className="main-content">
        <Banner/>
        
  <Buses />
  <Cargo />
<Tippers />
<DieselBowsers />
<ImageSlider  />
<footer>
<Contact />
</footer>
   </div>    
      
      
       
    </div>
  );
}

export default App;
