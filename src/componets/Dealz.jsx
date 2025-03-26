import  Button  from "../componets/Button";
function Dealz(params) {
  return (
    <div class="row banner-content p-5 margin-auto">
                <div class="unbox-1 col-md-8 text-start">
                    <div className='unbox-banner'>
                        <h4 class="banner-title-1">Phonecliq</h4>
                        <h1 class="banner-title-2 font-weight bold">Its Unboxed, not</h1>
                        <h1 class="banner-title-2 font-weight text-decoration bold">refurbished.</h1>
                        <h6 class="banner-title-3 py-4">Nothing to lose, everything to gain.</h6>
                        <Button label='Show Now'></Button>
                    </div>
                </div>
                <div class="unbox-2 col-md-4 text-center">
                    <div className='unbox-banner'>
                        <h1 class="banner-title  big-sale text-center">New Product</h1>
                        <h3 class="banner-title font-large">Samsung 24 Ultra</h3>
                    </div>
                </div>
            </div>
  )
}
export default Dealz;
