import React, {Component} from 'react';
import card from '../../images/downloads/logo__CARD.png';

class SecSix extends Component {
  render(){
    return (
        <div>
            <section class="six container-fluid">
        <div class="row gx-3">
          <div class="col-md">
            <div class="highlight-wrapper left blackBK">
              <div class="title-wrapper pt-4">
                <p>Home Pod</p>
              </div>
              <div class="description-wrapper row">
                <p>Profound sound</p>
              </div>
              <div class="links-wrapper">
                <ul>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Buy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md">
            <div class="highlight-wrapper right fafafa">
              <div class="logo-wrapper pt-4">
                <img
                  src={card}
                  alt="apple trade-in logo"
                />
              </div>
              <div class="description-wrapper row pt-3">
                <p>Get upto 3% Daily cash back<br />with every purchase</p>
              </div>
              <div class="links-wrapper">
                <ul>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Apply now</a></li>
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

export default SecSix;
