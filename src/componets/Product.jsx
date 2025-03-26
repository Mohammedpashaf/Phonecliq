import Button from "../componets/Button";

function Product(params) {
    return (
        <div class="row banner-content p-5 margin-auto">
            <div class="unbox-4 col-md-3 text-center">
                <div className='unbox-banner'>
                    <h2 class="font-size bg-org mx-auto">NEW PRODUCT</h2>
                    <h1 class="banner-title-2 font-weight bold font-1rem">IPads</h1>
                    <a href="coming soon" className="font-size">COMING SOON</a>
                </div>
            </div>
            <div class="unbox-5 col-md-3 text-center">
                <div className='unbox-banner'>
                    <h2 class="font-size bg-org mx-auto">SEALED PACK</h2>
                    <h1 class="banner-title-2 font-weight bold font-1rem">ACCESSORIES</h1>
                    <a href="coming soon" className="font-size">SHOP NOW</a>
                </div>
            </div>
            <div class="unbox-6 col-md-3 text-center">
                <div className='unbox-banner'>
                    <h2 class="font-size bg-org mx-auto">NEW PRODUCT</h2>
                    <h1 class="banner-title-2 font-weight bold font-1rem">APPLE WATCHES</h1>
                    <a href="coming soon" className="font-size">COMING SOON</a>
                </div>
            </div>
            <div class="unbox-7 col-md-3 text-center">
                <div className='unbox-banner'>
                    <h2 class="font-size bg-org mx-auto">MONTH DEALS</h2>
                    <h1 class="banner-title-2 font-weight bold font-1rem ">UP TO 45% OFF</h1>
                    <a href="coming soon" className="font-size">UP TO 45% OFF</a>
                </div>
            </div>
        </div>
    )
}
export default Product;