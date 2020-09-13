import React, { Component } from "react";
import styled from "styled-components";
import { Form, Input, Button, Text, Textarea } from "../Contact/theme";
import success from "../Contact/thank-you";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;
const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="BlackBox">
            <Input type="text" placeholder="Name " id="name" required />
          </div>
          <Input type="text" name="email" placeholder="Email" />

          <div className="field">
            <Textarea
              type="textarea"
              placeholder="Please leave me a Message"
              id="message"
              rows="6"
              required
            />
          </div>

          <br></br>

          {/* <ul className="actions"> */}

          <Input type="submit" value=" Submit" background-color="#555555" />
        </form>
      </section>
    </div>
  </section>
);

export default Contact;
