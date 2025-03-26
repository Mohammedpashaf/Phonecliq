import { FaCheck, FaHeart, FaRProject } from "react-icons/fa";
import call from '../assets/img/icons/call.png';
import user from '../assets/img/icons/user.png';
import cart from '../assets/img/icons/cart.jpg';
import logo from '../assets/img/icons/logo.jpeg';
import Iphonelogo from '../assets/img/icons/apple.jpeg';
import Oneplus from '../assets/img/icons/oneplus.jpeg';
import Vivo from '../assets/img/icons/vivo.jpeg';
import MI from '../assets/img/icons/mi.jpeg';

function Navbar(params) {
    return (
        <div>
             
            <div class="container-fluid bg-black">
                <div class="row font-size">
                    <div class="d-flex align-items-center">
                        <div class="header-store-notice">
                            <span class="text-white p-2"><FaCheck /><span className='p-1'>Open Box Products at Factory Like Prices</span></span>
                            <span class="text-white p-2"><FaCheck /><span className='p-1'>Mint Condition Products backed by Brand Warranty</span> </span>
                            <span class="text-white p-2"><FaCheck /><span className='p-1'>Authentic Products Guaranteed</span></span>
                        </div>
                        <nav class="main-menu d-flex navbar navbar-expand-lg  justify-content-end margin-left-auto">
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                        <li class="nav-item">
                                            <a href="#brand" class="nav-link text-white"><FaRProject /> <span className='p-1'>Flash Sale</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#sale" class="nav-link text-white">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#blog" class="nav-link text-white">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <header>

                <div class="container-fluid">
                    <div class="row py-4 pb-0   align-items-center ">
                        <div class="col-sm-4 text-center text-sm-start">
                            <div class="main-logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" class="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-4 d-none d-lg-block">
                            <div class="search-bar border rounded-2 border-dark-subtle">
                                <form id="search-form" class="text-center d-flex font-family" action="" method="">
                                    <input type="text" class="form-control border-0 bg-transparent  "
                                        placeholder="Search for products" />
                                    <button class=" btn btn-primary1 btn-lg1 border-none" type="submit">Search</button>
                                </form>
                            </div>
                        </div>

                        <div class="col-sm-4 d-flex justify-content-end gap-1 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                            <div class="support-box text-end d-none d-xl-block">
                                <img src={call} className='logo-width' alt='call' />
                                <span class="font-size-medium text-bold   text-muted">need Help?</span>
                                <h5 class="mb-0 font-size-medium">+91-9945304745</h5>
                            </div>
                            <div class="support-box text-end d-none d-xl-block">
                                <img src={user} className='logo-width' alt='user' />
                                <span class="font-size-medium text-bold   text-muted">My account</span>
                                <h5 class="mb-0 font-size-medium">Log in</h5>
                            </div>
                            <div class="support-box text-end d-none d-xl-block">
                                <img src={cart} className='logo-width50' alt='cart' />
                                <span class="font-size-medium text-bold  text-muted">My cart</span>
                                <h5 class="mb-0 font-size-medium">₹0.00</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <hr class="m-0" />
                </div>

                <div class="container">
                    <nav class="main-menu d-flex navbar navbar-expand-lg ">
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header justify-content-center">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div class="offcanvas-body justify-content-between">
                                <select class="filter-categories border-0 mb-0 me-5 font-family">
                                    <option>Phonecliq Deals Damakha</option>
                                    <option>Home</option>
                                    <option>Smartphone</option>
                                    <option>Contact</option>
                                </select>

                                <ul class="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link active font-family">Home</a>
                                    </li>
                                    {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown"
                  aria-expanded="false">All Brands</a>
                <ul class="dropdown-menu" aria-labelledby="pages">
                  <li><a href="index.html" class="dropdown-item">Apple (19)</a></li>
                  <li><a href="index.html" class="dropdown-item">Samsung (13) </a></li>
                  <li><a href="index.html" class="dropdown-item">Vivo(3) </a></li>
                  <li><a href="index.html" class="dropdown-item">Oneplus (6) </a></li>
                  <li><a href="index.html" class="dropdown-item">Google(3) </a></li>
                  <li><a href="index.html" class="dropdown-item">Motorola(8) </a></li>
                  <li><a href="index.html" class="dropdown-item">Nothing(1) </a></li>
                  <li><a href="index.html" class="dropdown-item">MI Phone (2)</a></li>
                </ul>
              </li> */}
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link font-family"><img src={Iphonelogo} className='logo-width' alt='Iphonelogo' />IPhone</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link font-family">Samsung</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link font-family">
                                            <img src={Oneplus} className='logo-width' alt='Iphone' />Oneplus</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link font-family">
                                            <img src={Vivo} className='logo-width' alt='Iphone' />Vivo</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link font-family">
                                            <img src={MI} className='logo-width' alt='Iphone' />MI</a>
                                    </li>
                                </ul>
                                <nav class="main-menu d-flex navbar navbar-expand-lg  justify-content-end margin-left-auto">
                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                                        <div class="offcanvas-body">
                                            <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                                <li class="nav-item navslide">
                                                    <a href="#brand" class="nav-link font-weight-bold"><FaHeart /> </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#sale" class="nav-link font-weight font-family">Today's Deal</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </div>
    )
}
export default Navbar;