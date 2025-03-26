/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Samsung from '../assets/img/SAMSUNG-Galaxy-S25-Ultra-5G-dealz365-400x400.webp';
import Accessories from '../assets/img/Apple-Type-C-to-Lightning-Cable-Dealz365-1-400x400.png';
import Accessories1 from '../assets/img/SAMSUNG-Type-C-to-Type-C-Dealz365-2-400x400.png';
import Accessories2 from '../assets/img/Apple-Type-C-to-Type-C-Dealz365-1-400x400.png';
import Samsungatoc from '../assets/img/SAMSUNG-Type-A-to-Type-C-Dealz365-2-400x400.png';
import Accessories25w from '../assets/img/SAMSUNG-25W-Type-C-Fast-Charger-Dealz365-2-400x400.png';
import Apple20w from '../assets/img/Apple-20W-Type-C-Fast-Charger-Dealz365-2-400x400.png';
import Samsungs25g from '../assets/img/Samsung-Galaxy-S23-Ultra-5G-dealz365-400x400.png';
import Applel from '../assets/img/Apple-Type-C-to-Lightning-Cable-Dealz365-1-400x400.png';
import Moto from '../assets/img/Motorola-razr-50.webp';
import Samsungatoc1 from '../assets/img/SAMSUNG-Type-A-to-Type-C-Dealz365-2-400x400.png';
import Applectoc from '../assets/img/Apple-Type-C-to-Type-C-Dealz365-1-400x400.png';
// import Button from '../componets/Button';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Ratings from './Ratings/Ratings';

function TrendingProducts() {
    return (

        <section className='container-fluid trending-slider py-5'>
            <div class="section-header d-md-flex justify-content-between align-items-center mt-5">
                <h2 class="font-2 fw-normal">Trending Products</h2>
            </div>
            <hr />
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper">
                <div className='swipe'>
                    <SwiperSlide>
                        <div className='row trending-component'>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-26%</h2>
                                    <div className='col-md-5'>
                                        <img src={Samsung} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">SAMSUNG,Smartphone</h1>
                                            <h1 className="font-size-medium">SAMSUNG S25 ULTRA</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:119,000.00</h1>
                                            <h5 className='text-decoration'>159,000.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-40%</h2>
                                    <div className='col-md-5'>
                                        <img src={Accessories} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">Apple Type C to Lighting</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'> offerPrice:900.00</h1>
                                            <h5 className='text-decoration'>1,500.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-34%</h2>
                                    <div className='col-md-5'>
                                        <img src={Accessories1} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">Samsung Type C to Type C</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice: 590.00</h1>
                                            <h5 className='text-decoration'>1,590.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-37%</h2>
                                    <div className='col-md-5'>
                                        <img src={Accessories2} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">Apple Type C Type C</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:1,200.00</h1>
                                            <h5 className='text-decoration'>1,900.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>                            
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-55%</h2>
                                    <div className='col-md-5'>
                                        <img src={Samsungatoc} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">SAMSUNG Type A to Type C</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:490.00</h1>
                                            <h5 className='text-decoration'>750.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-29%</h2>
                                    <div className='col-md-5'>
                                        <img src={Accessories25w} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">SAMSUNG 25w Type c Fast</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice: 1,200.00</h1>
                                            <h5 className='text-decoration'>1,600.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='row trending-component'>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-37%</h2>
                                    <div className='col-md-5'>
                                        <img src={Apple20w} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">Apple 20W Type C Fast Charger</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:1,200.00</h1>
                                            <h5 className='text-decoration'>1,990.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-28%</h2>
                                    <div className='col-md-5'>
                                        <img src={Samsungs25g} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Samsung Smartphone</h1>
                                            <h1 className="font-size-medium">Samsung Galaxy s25 Ultra</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice: 119,000.00</h1>
                                            <h5 className='text-decoration'>159,000.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-40%</h2>
                                    <div className='col-md-5'>
                                        <img src={Applel} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">Apple Type C to Lighting</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:900.00</h1>
                                            <h5 className='text-decoration'>1,590.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-43%</h2>
                                    <div className='col-md-5'>
                                        <img src={Moto} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Motorala Smartphone</h1>
                                            <h1 className="font-size-medium">Motarala Razr 50</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice: 42,99900.00</h1>
                                            <h5 className='text-decoration'>74,900.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-37%</h2>
                                    <div className='col-md-5'>
                                        <img src={Accessories2} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">Apple Type C Type C</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:1,200.00</h1>
                                            <h5 className='text-decoration'>1,900.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='row p-2 bg-white m-2 rounded trending-prod'>
                                <h2 class="z-1 position-absolute rounded-3 font-size border bg-org border-dark-subtle">-37%</h2>
                                    <div className='col-md-5'>
                                        <img src={Samsungatoc} className="w-100" />
                                    </div>
                                    <div className='col-md-7'>
                                        <div className='text-start'>
                                            <h1 className="font-size-medium">Accessories</h1>
                                            <h1 className="font-size-medium">SAMSUNG Type A to Type C</h1>
                                            <Ratings />
                                            <h1 className='f-s-17'>offerPrice:490.00</h1>
                                            <h5 className='text-decoration'>750.00</h5>
                                        </div>
                                    </div>
                                    <div className="trending-btn-toggle p-3">
                                        <button className="btn btn-lg text-uppercase fs-6 rounded-1 treding-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    );
}
export default TrendingProducts;