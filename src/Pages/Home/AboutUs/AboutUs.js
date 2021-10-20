import React from 'react';

const AboutUs = () => {
    return (
        <div id="aboutus" className="container">
            <div class="row justify-content-md-center">


                <div className="col-md-12 col-sm-12 col-lg-6 mt-5">
                    <h1>
                        About Us
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos eveniet autem laboriosam voluptate, provident praesentium aliquid doloremque eum aperiam sint maxime culpa atque quo ab. Vel velit ratione molestias!</p>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                    <iframe style={{ maxWidth: '100%' }} width="640" height="500" src="https://www.youtube.com/embed/ciSJmUeht9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;