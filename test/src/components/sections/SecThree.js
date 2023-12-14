import React, {Component} from 'react';
import watch from '../../images/downloads/hero_logo_apple_watch_series_8.png';

class SecThree extends Component {
  render(){
    return (
        <div>
            <section class="highlight-wrapper three blackBK container-fluid">
        <div class="logo-wrapper pt-4">
          <img
            src={watch} alt='apple watch'
          />
        </div>
        <div class="description-wrapper pt-1 row">
          <p>A healthy leap ahead</p>
        </div>
        <div class="links-wrapper row">
          <ul>
            <li>Learn more</li>
            <li>Buy</li>
          </ul>
        </div>
      </section>
        </div>
    );
}
}

export default SecThree;
