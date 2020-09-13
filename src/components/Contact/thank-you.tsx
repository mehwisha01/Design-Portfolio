import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import pic11 from "../Contact/Contact";

//import pic11 from "";

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>Thank you for contacting me!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;
