import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
class Three extends Component {
    render() {
        return (
            <section id="three">
				<div className="inner">
					<article>
						<div className="content">
							<span className="icon fa-laptop"></span>
							<header>
								<h3>Tempus Feugiat</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu.</p>
							<ul className="actions">
								<li><a href="#" className="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
						<div className="content">
							<span className="icon fa-diamond"> </span>
							<header>
								<h3>Aliquam Nulla</h3>
							</header>
							<p>Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed.</p>
							<ul className="actions">
								<li><a href="#" className="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
					<div className="content">
							<span className="icon fa-laptop"></span>
							<header>
								<h3>Sed Magna</h3>
							</header>
							<p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.</p>
							<ul className="actions">
								<li><a href="#" className="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
				</div>
			</section>
        );
    }
}

export default Three;