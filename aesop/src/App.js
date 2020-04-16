import React from 'react';
import './app.charles.css';
import Footer from './app.charles';
import Top from './charlesComponents/top.jsx';
import Banner from './charlesComponents/banner.jsx';
import Bottom from './charlesComponents/footer.jsx';
import EmptySpace from './charlesComponents/empty.jsx';
import SoapSpot from './charlesComponents/soapspot.jsx';
import Seasonal from './charlesComponents/seasonal';
import SoapSpotTwo from './charlesComponents/soapspottwo';
import GiftSpot from './charlesComponents/giftspot';
import SoapSpotThree from './charlesComponents/soapspotthree';
import FindStore from './charlesComponents/findstore';
import Image from './charlesComponents/image';
import SoapSpotFour from './charlesComponents/soapspotfour';
import Info from './charlesComponents/info';





function App() {
  return (
    <div className="App">
      <Top />
      <Banner />
      <SoapSpot />
      <EmptySpace />
      <Seasonal />
      <SoapSpotTwo />
      <GiftSpot />
      <SoapSpotThree />
      <FindStore />
      <Image />
      <SoapSpotFour />
      <Info />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
