import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section id="footer">
				<div className="inner">
					<header>
						<h2>Get in Touch</h2>
					</header>
					<form method="post" action="#">
						<div className="field half first">
							<label>Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label>Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label >Message</label>
							<textarea name="message" id="message" rows="6"></textarea>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Send Message" className="alt" /></li>
						</ul>
					</form>
					<div className="copyright">
						&copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images <a href="https://unsplash.com/">Unsplash</a>
					</div>
				</div>
			</section>
        );
    }
}

export default Footer;