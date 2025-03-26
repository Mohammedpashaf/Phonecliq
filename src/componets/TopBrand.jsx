import apple from '../assets/img/apple-brand.webp';
import samsung from '../assets/img/samsung-brand.webp';
import vivo from '../assets/img/vivo-brand.webp';
import googlepixcel from '../assets/img/googlepixcel-brand.webp';
import oneplus from '../assets/img/oneplus-brand.webp';
import mi from '../assets/img/mi-brand.webp';
import realme from '../assets/img/realme-brand.webp';

function TopBrand(params) {
  return (
    <section id="categories">
      <div class="container my-3 py-5">
        <div class="section-header d-md-flex justify-content-between align-items-center mb-3">
          <h2 class="font-2 fw-normal">Top Brand</h2>
        </div>
        <div class="row my-5">
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={apple} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹13,790</h3>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={samsung} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹6,700</h3>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={vivo} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹5,599</h3>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={googlepixcel} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹9,980</h3>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={oneplus} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹9,999</h3>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={mi} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹5,499</h3>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="categories-item">
              <img src={realme} class="img-fluid rounded-4" alt="image" />
              <h3 className='f-s-17'>Starting from ₹6,400</h3>
            </a>
          </div>

        </div>
      </div>
    </section>
  )

}
export default TopBrand;
<div class="p-5 text-center bg-image rounded-3 d-flex mar-20 h-w bg-img" >
  <div class="mask" >
    <div class=" justify-content-center align-items-center h-100">
      <div class="text-white m-r-35">
        <div class="offset-md-1  p-5">
          <div class="secondary-font text-primary text-uppercase mb-3 fs-4">PHONECLIQ</div>
          <h2 class="font-2  font-col fw-normal">Its Unboxed, not</h2>
          <h2 className="text-decoration">refurbished</h2>
          <h2 class="banner-title font-size font-col fw-normal">Nothing to lose, everything to gain</h2>
          <a href="#" class="boder text-uppercase fs-6 rounded-1">
            shop now
          </a>
        </div>
      </div></div>
  </div>
  <div class="p-5 text-start bg-image rounded-3 width-400 bg-img1" >
    <div class="mask" >
      <div class=" justify-content-center align-items-center h-100">
        <div class="text-white m-r-35">
          <div class="content-wrapper col-12 offset-md-1 col-md-5 p-5">
            <a href="#" class="boder text-uppercase fs-6 txt-col rounded-1">NEW PRODUCT</a>
            <h2 class="banner-title font-size fw-normal">Samsung 24 Ultra</h2>

          </div>
        </div></div>
    </div>
  </div> </div>