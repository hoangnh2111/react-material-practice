import React, { Component } from 'react';
import pic02 from './images/pic02.jpg';
import pic01 from './images/pic01.jpg'

class Two extends Component {
    render() {
        return (
            <section id="two">
  <div className="inner">
    <article>
      <div className="content">
        <header>
          <h3>Pellentesque adipis</h3>
        </header>
        <div className="image fit">
          <img src={pic01} alt="pic01" />
        </div>
        <p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
      </div>
    </article>
    <article className="alt">
      <div className="content">
        <header>
          <h3>Morbi interdum mol</h3>
        </header>
        <div className="image fit">
          <img src={pic02} alt="pic02" />
        </div>
        <p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
      </div>
    </article>
  </div>
</section>

        );
    }
}

export default Two;