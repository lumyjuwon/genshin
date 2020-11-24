import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #090909;
  color: #f1f2f3;
  cursor: pointer;
  padding: 20px 15px;
  border-radius: 15px;
  transition: 0.3s ease-in-out;
  font-size: 20px;
  &:hover {
    transform: translateY(-8px);
    transition: 0.3s ease 0s;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
    font-size: 16px;
  }
`;

export function TopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function scrollFunction() {
    console.log('scroll');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };
  console.log(isButtonVisible);

  return (
    <>
      {isButtonVisible && (
        <Button onClick={TopEvent} id="topButton">
          TOP
        </Button>
      )}
    </>
  );
}
