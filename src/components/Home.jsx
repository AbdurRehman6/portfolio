import React from "react";
import vg from "../assets/2.webp";
import Image from "../assets/pro2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>ABDUR REHMAN</h1>
          <p>Solutions to all your problems</p>
          <img src={Image} alt="" />
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day.We are leading tech company whose aim is to increase the
            problem solving ability in childrem.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            officia omnis excepturi adipisci, pariatur, porro asperiores nobis
            odit impedit dolores minima. Modi quia voluptatum animi illo
            corporis nemo a qui cumque natus possimus. Eligendi corporis
            adipisci eaque rem vitae, iusto obcaecati nam tenetur, omnis, ipsa
            sint tempore saepe recusandae iste.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
