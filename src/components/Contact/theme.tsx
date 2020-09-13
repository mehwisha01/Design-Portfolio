import styled from "styled-components";
import React from "react";

// Forms, inputs, buttons

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
export const Textarea = styled.input`
  width: 300px;
  height: 70px;
  resize: none;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 200px;
  height: 35px;
  color: black;
  background-color: #000000;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#4d4d4d"};
`;
