import React from 'react';
const TextBlock = () => {
  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">Madan Mohan Maddala</h1>
        <p id="textblock-content">Full Stack Developer</p>
        <div id="textblock-description">
          <h2 id="exp-title">Parallax Effect - Best viewed in desktop</h2>
          <p>
            The &lt;Parallax&gt; component creates a scrolling container that contains all your parallax layers.
            The <code>pages</code> prop is set to 2, indicating two pages worth of scrolling height. This container
            is given a class <code>animation</code> to apply specific styles.
          </p>
          <p>
            Inside the &lt;Parallax&gt;, you have multiple &lt;ParallaxLayer&gt; components, each representing a layer
            of the parallax effect. These layers are given different <code>speed</code> props to determine how fast they
            move compared to the scroll speed. A <code>speed</code> of 0 means the layer is static. Positive values
            move in the scroll direction, and negative values move against it. The <code>offset</code> prop is used to
            position the layer at a specific scroll position; 0 means the layer starts at the top.
          </p>
          <p>
            Each &lt;ParallaxLayer&gt; contains a <code>div</code> with two classes: <code>animation_layer</code> and
            <code>parallax</code>. These classes apply styles crucial for the parallax effect. Additionally, each layer
            has a unique <code>id</code> for applying specific background images.
          </p>
          <p>
            <code>.App</code> sets <code>overflow: hidden</code> to ensure that any content exceeding the bounds of the div
            is hidden, preventing scrollbars from appearing.
          </p>
          <p>
            <code>.animation</code> and <code>.animation_layer</code> have a set height of 1600px to fit the content
            and create the desired parallax effect.
          </p>
          <p>
            <code>.animation_layer</code> positions its background image at the bottom center with a size that
            covers the entire area and does not repeat. The <code>position: absolute</code> allows the layers
            to position in relation to their nearest positioned ancestor. A fixed position of
            <code>.animation_layer.parallax</code> creates the parallax effect by keeping the background in place
            during scrolling.
          </p>
          <p>
            <code>#textblock</code> establishes a full viewport height block with a specific background color, removing
            any default margins and paddings.
          </p>
          <p>
            <code>#textblock-container</code> is centered with a width of 50% of its parent and padding at the top.
          </p>
          <p>
            <code>#textblock-title</code>, <code>#textblock-content</code>, and <code>#textblock-footer</code> set the
            font properties and colors for the title, content, and footer within the text block.
          </p>
          <p>
            The <code>#textblock-footer</code> is fixed to the bottom of the viewport, ensuring it's always visible at
            the bottom of the screen and is styled to be centered.
          </p>
          <p>
            IDs like <code>#artback</code>, <code>#mountain</code>, and <code>#jungle1</code> apply unique background
            images to each parallax layer, contributing to the effect.
          </p>
          <p>
            By stacking these layers with different speeds and fixed positioning, as the user scrolls, the layers move
            at different rates, creating a sense of depth and the illusion of a three-dimensional effect, which is the
            essence of the parallax effect.
          </p>
        </div>
      </div>
        </div>
  );
}

export default TextBlock;