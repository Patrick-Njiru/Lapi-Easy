import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='sections'>
            <h1><em><span>Lapi</span>Easy</em></h1>
            <section>
                <ul>
                    <h3>MENU</h3>
                    <li>INFO CENTER</li>
                    <li>FEATURES</li>
                    <li>NEWS BLOGS</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>LOGIN</li>
                </ul>
            </section>
            <section>
                <ul>
                    <h3>COMPANY</h3>
                    <li>ABOUT US</li>
                    <li>STRATEGIC PARTNERS</li>
                    <li>PRIVACY POLICY</li>
                    <li>TERMS & CONDITIONS </li>
                </ul>
            </section>
            <section>
                <ul>
                    <h3>TECH SUPPORT</h3>
                    <li>CONTACT SUPPORT</li>
                    <li>FAQs</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </section>
        </div> <hr />
        <div>
            <p> &copy; 2022 LapiEasy, Kenya. All rights reserved.</p>
            <p>
                <i class="fa-brands fa-facebook"></i> &nbsp; 
                <i class="fa-brands fa-instagram"></i> &nbsp;
                <i class="fa-brands fa-twitter"></i> &nbsp;
                <i class="fa-brands fa-linkedin"></i>
            </p>
        </div>
        
    </footer>
  )
}

export default Footer