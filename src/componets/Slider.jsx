/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import iPad from '../assets/img/slide1-ipad.png';
import iphone16 from '../assets/img/iphone-16-pro-max-dealz365-400x400.png';
import iphone15 from '../assets/img/slide1-iphone.png';
import slider1 from '../assets/img/White-Bold-Happy-Republic-Day-Facebook-Cover-maqsood-01.png';
import slider2 from '../assets/img/Buy-certified-Pre-owned-Iphones-with-warranty-1.png';
import watches from '../assets/img/slide1-watches.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='swipe'>
                    <img src={slider1} alt={slider1} />
                </SwiperSlide>
                <SwiperSlide className='swipe'>
                    <img src={slider2} alt={slider2} />
                </SwiperSlide>
                <SwiperSlide className='swipe'>
                    <div class="swiper-slide">
                        <div class="row banner-content p-5">
                            <div class="content-wrapper col-md-7 text-start">
                                <h1 class="banner-title">iPhone 16 Pro Max</h1>
                                <h3 class="banner-title">Easy Payment & EMI Options</h3>
                                <ul className=''>
                                    <li>UPI (PhonePe, GPay, Paytm), Credit & Debit Cards</li>
                                    <li>0 Down Payment EMI available on all Credit Cards. EMI Calculator</li>
                                    <li>Partial Cash on Delivery: Pay Rs.399 online and rest on COD.</li>
                                </ul>
                                <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Buy Now</a>
                            </div>
                            <div class="img-wrapper col-md-5">
                                <img src={iphone16} class="img-fluid" alt={iphone16} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swipe'>
                    <div class="swiper-slide">
                        <div class="row banner-content p-5">
                            <div class="content-wrapper col-md-7 text-start">
                                <h2 class="banner-title big-sale">Big sale</h2>
                                <h3 class="banner-title font-xxx-large">IPhone On Sale At
                                    Up To 25% Off</h3>
                                <p>Buy Top Products on phonecliq</p>
                                <p>From 18,999</p>
                                <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Now</a>
                            </div>
                            <div class="img-wrapper col-md-5">
                                <img src={iphone15} class="img-fluid" alt={iphone15} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swipe'>
                    <div class="swiper-slide">
                        <div class="row banner-content p-5">
                            <div class="content-wrapper col-md-7 text-start">
                                <h1 class="banner-title  big-sale">Sealed Pack</h1>
                                <h3 class="banner-title font-xxx-large">All New For A Better You</h3>
                                <p>Coming Soon</p>
                            </div>
                            <div class="img-wrapper col-md-5">
                                <img src={watches} class="img-fluid" alt={watches} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swipe'>
                    <div class="swiper-slide">
                        <div class="row banner-content p-5">
                            <div class="content-wrapper col-md-7 text-start">
                                <h1 class="banner-title  big-sale">Phonecliq</h1>
                                <h3 class="banner-title font-xxx-large">Best iPad Deals At A Glance</h3>
                                <p>Coming Soon</p>
                                <p>From 19,000</p>
                            </div>
                            <div class="img-wrapper col-md-5">
                                <img src={iPad} class="img-fluid" alt={iPad} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Slider;