import React from 'react';
import logo from './logo.svg';
import './AppWalter.css';
import Modal from './components/Modal';
import Scrollbar from './components/Scrollbar';
import ImageOne from './images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png';
import ImageTwo from './images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png';
import ImageThree from './images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png';
import ImageFour from './images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
import ImageFive from './images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png';

function App() {
  return (
    <div className="App">
      <a id="hoverThis" href="#">test modal display</a>
      <Modal />
      <Scrollbar num={0} ImageOne={ImageOne} ImageTwo={ImageTwo} ImageThree={ImageThree} ImageFour={ImageFour} ImageFive={ImageFive}/>
      <Scrollbar num={1} ImageOne={ImageOne} ImageTwo={ImageTwo} ImageThree={ImageThree} ImageFour={ImageFour} ImageFive={ImageFive}/>
      <Scrollbar num={2} ImageOne={ImageOne} ImageTwo={ImageTwo} ImageThree={ImageThree} ImageFour={ImageFour} ImageFive={ImageFive}/>
      <Scrollbar num={3} ImageOne={ImageOne} ImageTwo={ImageTwo} ImageThree={ImageThree} ImageFour={ImageFour} ImageFive={ImageFive}/>
    </div>
  );
}

export default App;
