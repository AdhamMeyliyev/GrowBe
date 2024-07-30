import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <h1>Header</h1>
    </Headers>
  );
};

const Headers = styled.div`
  h1 {
    color: red;
  }
`;

export default Header;
