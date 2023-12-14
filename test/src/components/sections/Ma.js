import React from 'react';
import SecThree from './SecThree';
import SecFour from './SecFour';
import SecFive from './SecFive';
import SecSix from './SecSix';
import Sec from './Sec';
 import Youtube from '../MyComponents/Youtube';

const Ma = () => {
    return (
        <div>
               <Sec class="highlight-wrapper one blackBK container-fluid" title="iPhone 14 Pro" desc="Pro. Beyond." btn1="Learn more" btn2="Buy"/>
          <Sec class="highlight-wrapper two fafafa container-fluid" title="iPhone 14" desc="Wonderfull" btn1="Learn more" btn2="Buy"/>
          <SecThree/>
          <SecFour/>
          <SecFive/>
          <SecSix/>
          <Youtube/>
        </div>
    );
}

export default Ma;
