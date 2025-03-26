import Button from "../componets/Button";
function Exclusive(params) {
    return (
        <div class="row banner-content p-5 margin-auto">
            <div class="unbox-3 col-md-12 md:text-start">
                <div className='unbox-banner'>
                    <h4 class="banner-title-1">EXCLUSIVE PHONES</h4>
                    <h1 class="banner-title-2 font-weight bold py-4 w-40">Huge Discounts On All Phones</h1>
                    <Button label='Show Now'></Button>
                </div>
            </div>
        </div>
    )
}
export default Exclusive;