import React, {useEffect} from 'react';
import flag from '../../images/icons/16.png';
import $ from 'jquery'


const Footer = () => {

  useEffect(() => {
    $("#plus").click(function(){
      $("#one").css("display","block");
      $("#one").slideToggle(1000);
      
    })
  },[]);

  
  

  return (
    <div>
      <footer className="footer-wrapper">
        <section className="footer-internal-wrapper container pt-3">
          <div className="footer-paragraph-wrapper">
            <p>
              1. Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices are
              eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card. Trade-in
              value may be applied toward qualifying new device purchase, or added
              to an Apple Gift Card. Actual value awarded is based on receipt of a
              qualifying device matching the description provided when estimate
              was made. Sales tax may be assessed on full value of a new device
              purchase. In-store trade-in requires presentation of a valid photo
              ID (local law may require saving this information). Offer may not be
              available in all stores, and may vary between in-store and online
              trade-in. Some stores may have additional requirements. Apple or its
              trade-in partners reserve the right to refuse or limit quantity of
              any trade-in transaction for any reason. More details are available
              from Apple’s trade-in partner for trade-in and recycling of eligible
              devices. Restrictions and limitations may apply.
            </p>
            <br />
            <p>
              2. New subscribers only. $4.99/month after trial. Plan automatically
              renews until cancelled. Terms apply.
            </p>
            <br />
            <p>
              TMNT: ©2023 Viacom International Inc. All Rights Reserved.
              Nickelodeon, Teenage Mutant Ninja Turtles and all related titles,
              logos and characters are trademarks of Viacom International Inc.
            </p>
            <br />
            <p>
              To access and use all the features of Apple Card, you must add Apple
              Card to Wallet on an iPhone or iPad with the latest version of iOS
              or iPadOS. Update to the latest version by going to Settings
              General Software Update. Tap Download and Install.
            </p>
            <br />
            <p>Available for qualifying applicants in the United States.</p>
            <br />
            <p>
              Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
              Branch.
            </p>
            <br />
            <p>
              Learn more about how Apple Card applications are evaluated at
              <a className="para-link" href="support.apple.com/kb/HT209218"
              >support.apple.com/kb/HT209218</a
              >.
            </p>
            <br />
            <p>A subscription is required for Apple TV+.</p>
            <br />
            <p>
              Major League Baseball trademarks and copyrights are used with
              permission of MLB Advanced Media, L.P. All rights reserved.
            </p>
          </div>
          <hr />
          <div className="footer-links-wrapper container-fluid">
            <div className="row">
              <div className="footer-links-1-wrapper col-md">
                <div className='d-flex justify-content-between'>
              <p className="listHead" id='ls'>Shop and Learn</p>
              <p className="listHead d-md-none" id='plus'>+</p>
              </div>
                <ul id='one' className='d-none d-md-block'>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">AirTag</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Gift Cards</a></li>
                </ul>

                <div className='d-flex justify-content-between'>
                <p className="listHead">Apple Wallet</p>
                <p className="listHead d-md-none">+</p>
                </div>
                <ul className='d-none d-md-block'>
                  <li><a href="#">Wallet</a></li>
                  <li><a href="#">Apple Card</a></li>
                  <li><a href="#">Apple Pay</a></li>
                  <li><a href="#">Apple Cash</a></li>
                </ul>
              </div>
              <div className="footer-links-2-wrapper col-md">
              <div className='d-flex justify-content-between'>
              <p className="listHead">Account</p>
              <p className="listHead d-md-none">+</p>
              </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#">Manage Your Apple ID</a></li>
                  <li><a href="#"> Apple Store Account</a></li>
                  <li><a href="#"> iCloud.com</a></li>
                </ul>
                <div className='d-flex justify-content-between'>
                <p className="listHead">Entertainment</p>
                <p className="listHead d-md-none">+</p>
                </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#"> Apple One</a></li>
                  <li><a href="#">Apple Card</a></li>
                  <li><a href="#"> Apple TV+ </a></li>
                  <li><a href="#">Apple Music</a></li>
                  <li><a href="#"> Apple Arcade</a></li>
                  <li><a href="#"> Apple Fitness+</a></li>
                  <li><a href="#"> Apple News+</a></li>
                  <li><a href="#"> Apple Podcasts</a></li>
                  <li><a href="#"> Apple Books</a></li>
                  <li><a href="#"> App Store</a></li>
                </ul>
              </div>
              <div className="footer-links-3-wrapper col-md">
              <div className='d-flex justify-content-between'>
              <p className="listHead">Apple Store</p>
              <p className="listHead d-md-none">+</p>
              </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#">Find a Store </a></li>
                  <li><a href="#">Genius Bar </a></li>
                  <li><a href="#"> Today at Apple </a></li>
                  <li><a href="#">Apple Camp </a></li>
                  <li><a href="#"> Apple Store App</a></li>
                  <li><a href="#">Certified Refurbished </a></li>
                  <li><a href="#"> Apple Trade In </a></li>
                  <li><a href="#"> Financing </a></li>
                  <li><a href="#"> Carrier Deals at Apple </a></li>
                  <li><a href="#"> Order Status </a></li>
                  <li><a href="#">Shopping Help</a></li>
                </ul>
              </div>
              <div className="footer-links-4-wrapper col-md">
              <div className='d-flex justify-content-between'>
              <p className="listHead">For Business</p>
              <p className="listHead d-md-none">+</p>
              </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#">Apple and Business </a></li>
                  <li><a href="#">Shop for Business </a></li>
                </ul>
                <div className='d-flex justify-content-between'>
                <p className="listHead">For Education</p>
                <p className="listHead d-md-none">+</p>
                </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#">Apple and Education </a></li>
                  <li><a href="#"> Shop for K-12 </a></li>
                  <li><a href="#">Shop for College </a></li>
                </ul>
                <div className='d-flex justify-content-between'>
                <p className="listHead">For Healthcare</p>
                <p className="listHead d-md-none">+</p>
                </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#"> Apple in Healthcare </a></li>
                  <li><a href="#"> Health on Apple Watch </a></li>
                  <li><a href="#"> Health Records on iPhone </a></li>
                </ul>
                <div className='d-flex justify-content-between'>
                <p className="listHead">For Government</p>
                <p className="listHead d-md-none">+</p>
                </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#">Shop for Government </a></li>
                  <li><a href="#">Shop for Veterans and Military</a></li>
                </ul>
              </div>
              <div className="footer-links-5-wrapper col-md">
              <div className='d-flex justify-content-between'>
              <p className="listHead">Apple Values</p>
              <p className="listHead d-md-none">+</p>
              </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#">Accessibility </a></li>
                  <li><a href="#">Education </a></li>
                  <li><a href="#">Environment Inclusion and Diversity </a></li>
                  <li><a href="#"> Privacy </a></li>
                  <li><a href="#">Racial Equity and Justice </a></li>
                  <li><a href="#"> Supplier Responsibility </a></li>
                </ul>
                <div className='d-flex justify-content-between'>
                <p className="listHead"><a> About Apple </a></p>
                <p className="listHead d-md-none">+</p>
                </div>
                <ul className='d-none d-md-block'>
                  
                  <li><a href="#"> Newsroom </a></li>
                  <li><a href="#">Apple Leadership </a></li>
                  <li><a href="#">Career Opportunities </a></li>
                  <li><a href="#">Investors </a></li>
                  <li><a href="#">Ethics & Compliance </a></li>
                  <li><a href="#">Events </a></li>
                  <li><a href="#">Contact Apple</a></li>
                </ul>
             </div>
            </div>
          </div>
          <div className="footer-issues-wrapper container">
            <div className="footer-issues-first container row">
              <p>
                More ways to shop:
                <a className="small-links under" href="#">Find an Apple Store</a> or
                <a className="small-links under" href="#">other retailer</a> near you.
                Or call 1-800-MY-APPLE.
              </p>
            </div>
            <hr />
            <div className="footer-issues-second container row">
              <div className="footer-copywrite-wrapper col-md-4">
                <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
              </div>
              <div className="footer-issues-second-links-wrapper col-md">
                <ul>
                  <li><a href="#">Privacy Policy |</a></li>
                  <li><a href="#">Terms of Use |</a></li>
                  <li><a href="#">Sales and Refunds |</a></li>
                  <li><a href="#">Legal |</a></li>
                  <li><a href="#">Site Map</a></li>
                </ul>
              </div>
              <div className="footer-us-wrapper col-md-2">
                <div className="footer-flag-wrapper">
                  <img src={flag} alt="US Flag" />
                </div>
                <div className="footer-country-wrapper">
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
