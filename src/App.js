import "./styles.css";
import React, { useState, useEffect } from "react";
import Logo from "./Components/Logo";
import styled from "styled-components";
const Navbar = styled.div`
  background: black;
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
export default function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        console.log(size);
        setSize(window.innerWidth);
      },
      []
    );
  });
  return (
    <div className="App">
      <Navbar>
        <Logo size={size} setSize={setSize} />
        <div style={{ textAlign: "right", margin: "1rem" }}>
          <a href="https://www.google.com">Google</a>
          <a href="https://www.amazon.com">Amazon</a>
        </div>
      </Navbar>
    </div>
  );
}
