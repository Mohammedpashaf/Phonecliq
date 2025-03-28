import logo from '../assets/img/phonelogo.jpeg';
import payment from '../assets/img/payment-dealz365.png';

function Footer(params) {
  return (
    <div>
      <footer class="py-5 m-2rem">
        <div class="container-fluid">
          <div class="row jusify-content">

            <div class="col-md-3 col-sm-6">
              <div class="footer-menu font-smaller">
                <img src={logo} alt="logo" class="img-fluid" />
                <p className='font-smaller'>Upgrade to premium smartphones with Dealz365 ! Discover unbeatable prices, certified quality, and expert support—your seamless upgrade starts here.</p>
                <a href="email">support@dealz365.in.</a><br />
                <a href="nmber">+91-9945304745.</a>
                <div class="social-links mt-5">
                  <ul class="d-flex list-unstyled gap-2">
                    <li>
                      <a href="#" class="btn ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524Z" /></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z" /></svg>
                      </a>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <br /><br />
              <div class="footer-menu ">
                <h5 class="widget-title">About Us</h5>
                <ul class="menu-list list-unstyled font-smaller">
                  <li class="menu-item">
                    <a href="#" class="nav-link">About us</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">News & Blog </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Brands</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <br /><br />
              <div class="footer-menu">
                <h5 class="widget-title">Support</h5>
                <ul class="menu-list list-unstyled font-smaller">
                  <li class="menu-item">
                    <a href="#" class="nav-link">Privacy Policy</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Shipping Policy</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Refund Policy</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Trems of Service</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Contact information</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <br /><br />
              <div class="footer-menu">
                <h5 class="widget-title">FAQ's</h5>
                <ul class="menu-list list-unstyled font-smaller">
                  <li class="menu-item">
                    <a href="#" class="nav-link">FAQ's</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="nav-link">Requirements</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div class="container-fluid">
          <div class="row ">
            <div class="col-md-6 copyright">
              <p>© Phonecliq. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 ml-auto">
              <img src={payment} alt="payment"/>
            </div>
          </div>
        </div>
      </div></div>
  )
}
export default Footer;