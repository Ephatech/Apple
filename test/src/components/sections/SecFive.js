import React, {Component} from 'react';

class SecFive extends Component {
  render(){ 
    return (
        <div>
            <section class="five container-fluid">
        <div class="row gx-3">
          <div class="col-md">
            <div class="highlight-wrapper left fafafaf">
              <div class="title-wrapper pt-4">
                <p>iPod</p>
              </div>
              <div class="description-wrapper">
                <p>Lovable. Drawable. magical</p>
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
            <div class="highlight-wrapper right blackBK">
              <div class="title-wrapper pt-4">
                <p>MacBook Pro</p>
              </div>
              <div class="description-wrapper">
                <p>Supercharged by M2 Pro and M2 Max</p>
              </div>
              <div class="links-wrapper">
                <ul>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Buy</a></li>
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

export default SecFive;
