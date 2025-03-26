import vivo from '../assets/img/icons/vivo-dealz365-180x60.webp';
import Apple from '../assets/img/icons/apple-2.webp';
import Google from '../assets/img/icons/google-logo-deaz365-180x60.webp';
import samsung from '../assets/img/icons/samsung.webp';
import oppo from '../assets/img/icons/oppo-dealz-365-180x60.webp';
import oneplus from '../assets/img/icons/oneplus-logo-dealz365-02-180x60.webp';
import track from '../assets/img/icons/track.png';
import arrow from '../assets/img/icons/Arrow_left_right_up.webp';
import call from '../assets/img/icons/call.png';
import credit from '../assets/img/icons/cridit-card.png';
import { FaTruck, FaArrowCircleRight, FaHeadset, FaCreditCard } from "react-icons/fa";



function Logo(params) {
    return (
        <div className='e-con-inner justify-items mt-4 mb-5'>
            <div className='mb-5'>
                <img src={vivo} alt="vivo" className='mobile-class pointer' />
                <img src={Apple} alt="" className='mobile-class pointer'/>
                <img src={Google} alt="" className='mobile-class pointer'/>
                <img src={samsung} alt="" className='mobile-class pointer'/>
                <img src={oppo} alt="" className='mobile-class pointer'/>
                <img src={oneplus} alt="" className='mobile-class pointer'/>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <FaTruck className='font-size-60'/>
                                {/* <img class="wid rounded-full" src={track} /> */}
                            </div>
                            <div className='col-md-9'>
                                <h6 class="text-gray-700 mb-1">Free Delivery</h6>
                                <p className='mb-1'>Free Shipping on all Order's</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <FaArrowCircleRight className='font-size-60'/>
                                {/* <img class="wid rounded-full" src={arrow} /> */}
                            </div>
                            <div className='col-md-9'>
                                <h6 class="text-gray-700 mb-1">7 Days Replacement</h6>
                                <p className='mb-1'>No questions asked</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <FaHeadset className='font-size-60'/>
                                {/* <img class="wid rounded-full" src={call} /> */}
                            </div>
                            <div className='col-md-9'>
                                <h6 class="text-gray-700 mb-1">Call customer care</h6>
                                <p className='mb-1'>+91-9945304745</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <FaCreditCard className='font-size-60'/>
                                {/* <img class="wid rounded-full" src={credit} /> */}
                            </div>
                            <div className='col-md-9'>
                                <h6 class="text-gray-700 mb-1">Warranty</h6>
                                <p className='mb-1'>6/12 Months Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Logo;