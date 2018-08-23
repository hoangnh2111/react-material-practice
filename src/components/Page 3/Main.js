import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <section id="main">
  <div className="inner">
    <header className="major special">
      <h1>Elements</h1>
      <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
    </header>
    {/* Text */}
    <section>
      <h3>Text</h3>
      <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
        This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
        This is <u>underlined</u> and this is code: <code>for (;;) {'{'} ... {'}'}</code>. Finally, <a href="#">this is a link</a>.</p>
      <hr />
      <header>
        <h3>Heading with a Subtitle</h3>
        <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
      </header>
      <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
      <header>
        <h4>Heading with a Subtitle</h4>
        <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
      </header>
      <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
      <hr />
      <h2>Heading Level 2</h2>
      <h3>Heading Level 3</h3>
      <h4>Heading Level 4</h4>
      <h5>Heading Level 5</h5>
      <h6>Heading Level 6</h6>
      <hr />
      <h4>Blockquote</h4>
      <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
      <h4>Preformatted</h4>
      <pre><code>i = 0;{"\n"}{"\n"}while (!deck.isInOrder()) {"{"}{"\n"}print 'Iteration ' + i;{"\n"}deck.shuffle();{"\n"}i++;{"\n"}{"}"}{"\n"}{"\n"}print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
    </section>
  </div></section>

        );
    }
}

export default Main;