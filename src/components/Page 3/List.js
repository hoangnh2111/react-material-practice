import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <section>
  <h3>Lists</h3>
  <div className="row">
    <div className="6u 12u$(xsmall)">
      <h4>Unordered</h4>
      <ul>
        <li>Dolor pulvinar etiam magna etiam.</li>
        <li>Sagittis adipiscing lorem eleifend.</li>
        <li>Felis enim feugiat dolore viverra.</li>
      </ul>
      <h4>Alternate</h4>
      <ul className="alt">
        <li>Dolor pulvinar etiam magna etiam.</li>
        <li>Sagittis adipiscing lorem eleifend.</li>
        <li>Felis enim feugiat dolore viverra.</li>
      </ul>
    </div>
    <div className="6u$ 12u$(xsmall)">
      <h4>Ordered</h4>
      <ol>
        <li>Dolor pulvinar etiam magna etiam.</li>
        <li>Etiam vel felis at lorem sed viverra.</li>
        <li>Felis enim feugiat dolore viverra.</li>
        <li>Dolor pulvinar etiam magna etiam.</li>
        <li>Etiam vel felis at lorem sed viverra.</li>
        <li>Felis enim feugiat dolore viverra.</li>
      </ol>
      <h4>Icons</h4>
      <ul className="icons">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
        <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
      </ul>
    </div>
  </div>
  <h4>Actions</h4>
  <ul className="actions">
    <li><a href="#" className="button special">Special</a></li>
    <li><a href="#" className="button">Default</a></li>
    <li><a href="#" className="button alt">Alternate</a></li>
  </ul>
  <ul className="actions small">
    <li><a href="#" className="button special small">Small</a></li>
    <li><a href="#" className="button small">Small</a></li>
    <li><a href="#" className="button alt small">Small</a></li>
  </ul>
  <div className="row">
    <div className="3u 6u(small) 12u$(xsmall)">
      <ul className="actions vertical">
        <li><a href="#" className="button special">Vertical</a></li>
        <li><a href="#" className="button">Vertical</a></li>
        <li><a href="#" className="button alt">Vertical</a></li>
      </ul>
    </div>
    <div className="3u 6u$(small) 12u$(xsmall)">
      <ul className="actions vertical small">
        <li><a href="#" className="button special small">Small</a></li>
        <li><a href="#" className="button small">Small</a></li>
        <li><a href="#" className="button alt small">Small</a></li>
      </ul>
    </div>
    <div className="3u 6u(small) 12u$(xsmall)">
      <ul className="actions vertical">
        <li><a href="#" className="button special fit">Fit</a></li>
        <li><a href="#" className="button fit">Fit</a></li>
        <li><a href="#" className="button alt fit">Fit</a></li>
      </ul>
    </div>
    <div className="3u$ 6u$(small) 12u$(xsmall)">
      <ul className="actions vertical small">
        <li><a href="#" className="button special small fit">Small</a></li>
        <li><a href="#" className="button small fit">Small</a></li>
        <li><a href="#" className="button alt small fit">Small</a></li>
      </ul>
    </div>
  </div>
</section>

        );
    }
}

export default List;