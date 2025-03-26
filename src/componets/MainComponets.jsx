import TopBrand from '../componets/TopBrand';
import Slider from '../componets/Slider';
import Dealz from '../componets/Dealz';
import Best from '../componets/Best';
import IPhone from '../componets/IPhone';
import Samsung from '../componets/Samsung';
import Accessories from '../componets/Accessories';
import Exclusive from '../componets/Exclusive';
import Product from '../componets/Product';
import Trending from '../componets/Trending';
import Logo from '../componets/Logo';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';
 
 function MainComponets(params) {
    return(
<div>
       <Navbar></Navbar>
      <Slider></Slider>
      <TopBrand></TopBrand>
      <Dealz></Dealz>
      <Best></Best>
      <IPhone></IPhone>
      <Samsung></Samsung>
      <Accessories></Accessories>
      <Exclusive></Exclusive>
      <Product></Product>
      <Trending></Trending>
      <Logo></Logo>
      <hr/>
      <Footer></Footer>
</div>
    )
 }
 export default MainComponets;