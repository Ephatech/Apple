import React, {Component} from 'react';
import trade from '../../images/downloads/logo_tradein.png';
import wwd from '../../images/downloads/promo_logo_wwdc23.png';


class SecFour extends Component {
  render(){
    return (
        <div>
            <section class="four container-fluid">
        <div class="row gx-3">
          <div class="col-md">
            <div class="highlight-wrapper left fafafa">
              <div class="logo-wrapper pt-4">
                <img src={trade}
                  alt="apple trade-in logo"
                />
              </div>
              <div class="description-wrapper pt-3">
                <p>Upgrade and save. Its that easy.</p>
              </div>
              <div class="links-wrapper">
                <ul>
                  <li><a href="#">See what your device is worth</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="highlight-wrapper right blackBK pt-5">
              <div class="logo-wrapper">
                <img
                  src={wwd}
                  alt="apple world wide developers conference logo"
                />
              </div>
              <div class="description-wrapper pt-3 row">
                <p>
                  Apple world wide developers conference<br />Join us online
                  june 5-9
                </p>
              </div>
              <div class="links-wrapper row">
                <ul>
                  <li><a href="#">Learn more</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}
}

export default SecFour;
