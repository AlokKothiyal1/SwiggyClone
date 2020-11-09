import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;

  p {
    font-size: 13px;
    color: #282c3f;
    margin-bottom: 5px;
    font-weight: bold;
    &:hover {
      color: #fc8019;
    }
  }
`;

function Options() {
  return (
    <div className="text-right mr-5 mt-2">
      <Wrapper>
        <p>Recommended</p>
        <p>South Indian</p>
        <p>North indian</p>
        <p>Indian Snacks</p>
      </Wrapper>
    </div>
  );
}

export default Options;
