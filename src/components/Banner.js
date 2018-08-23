import React, { Component } from 'react';
import backgroundd from './images/banner.jpg';
class Banner extends Component {
    render() {
        return (
            <section id="banner" style={{backgroundImage: `url(${backgroundd})`}}>
  <div className="inner">
    <h1>Introspect: <span>A free + fully responsive<br />
        site template by TEMPLATED</span></h1>
    <ul className="actions">
      <li><a href="#" className="button alt">Get Started</a></li>
    </ul>
  </div>
</section>

        );
    }
}

export default Banner;