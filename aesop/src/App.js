import React from 'react';
import './app.charles.css';
import Footer from './app.charles';
import Top from './charlesComponents/top.jsx';
import Banner from './charlesComponents/banner.jsx';
import Bottom from './charlesComponents/footer.jsx';
import EmptySpace from './charlesComponents/empty.jsx';
import Seasonal from './charlesComponents/seasonal';
import GiftSpot from './charlesComponents/giftspot';
import FindStore from './charlesComponents/findstore';
import Image from './charlesComponents/image';
import Info from './charlesComponents/info';
import './AppWalter.css';
import Modal from './components/Modal';
import Scrollbar from './components/Scrollbar';
import ImageOne from './images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png';
import ImageTwo from './images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png';
import ImageThree from './images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png';
import ImageFour from './images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
import ImageFive from './images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png';
import FadeIn from './components/FadeIn';
import ImageSix from './images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png';
import ImageSeven from './images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png';
import ImageEight from './images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png';
import ImageNine from './images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png';
import ImageTen from './images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png';

import ImageEleven from './images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png';
import ImageTwelve from './images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png';
import ImageThirteen from './images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png';
import ImageFourteen from './images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png';
import ImageFifthteen from './images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png';

import ImageSixteen from './images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import ImageSeventeen from './images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';
import ImageEightteen from './images/staple_products/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png';
import ImageNineteen from './images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png';
import ImageTwenty from './images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png';

{/*all images are passed into scrollbar in order to make it reusable*/}
function App() {
  return (
    <div className="App">
      <FadeIn />
      <Top />
      <Modal />
      <Banner />
      <Scrollbar num={0} ImageOne={ImageOne} ImageTwo={ImageTwo} ImageThree={ImageThree} ImageFour={ImageFour} ImageFive={ImageFive}/>
      <EmptySpace />
      <Seasonal />
      <Scrollbar num={1} ImageOne={ImageSix} ImageTwo={ImageSeven} ImageThree={ImageEight} ImageFour={ImageNine} ImageFive={ImageTen}/>
      <GiftSpot />
      <Scrollbar num={2} ImageOne={ImageEleven} ImageTwo={ImageTwelve} ImageThree={ImageThirteen} ImageFour={ImageFourteen} ImageFive={ImageFifthteen}/>
      <FindStore />
      <Image />
      <Scrollbar num={3} ImageOne={ImageSixteen} ImageTwo={ImageSeventeen} ImageThree={ImageEightteen} ImageFour={ImageNineteen} ImageFive={ImageTwenty}/>
      <Info />
      <Footer />
      <Bottom />
      <Modal />
    </div>
  );
}

export default App;
