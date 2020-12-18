import React from "react";

/**
 * Component for About page
 *
 * @component
 */

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <h1>Who we are</h1>
        <img src="/images/image.jpg" alt="about" />
      </div>
      <div class="aboutRight">
        <p className="aboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          neque natus esse veritatis consequatur blanditiis sed delectus rerum
          sapiente, at laboriosam, facere dignissimos totam asperiores illo
          veniam culpa dolorum nam.
        </p>
        <h2>Our customers come first</h2>
        <p className="customerText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          praesentium? Voluptatum maxime perspiciatis nemo autem ratione
          laboriosam, veniam consequatur dignissimos in, quasi laborum
          blanditiis sed, iure sapiente debitis numquam doloremque! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. In blanditiis doloremque
          delectus dicta iure alias perferendis tempora optio exercitationem a
          perspiciatis, quod ea quia quisquam facilis incidunt distinctio veniam
          quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          sequi qui dolorem laborum reprehenderit deserunt error quo dolore
          nostrum mollitia itaque iure quasi, eos, voluptatibus fuga voluptatem,
          fugiat repellat cupiditate?
        </p>
      </div>
    </div>
  );
}

export default About;
