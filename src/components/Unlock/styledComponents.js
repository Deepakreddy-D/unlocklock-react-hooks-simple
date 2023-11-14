// Style your elements here
import styled from 'styled-components'

export const Bg = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #3c2940);
`
export const Image = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const Para = styled.h1`
  color: white;
  font-family: 'Roboto';
`
export const Button = styled.button`
  width: 70px;
  border-width: 0;
  color: #06b6d4;
  border-radius: 9px;
  padding: 7px;
  cursor: pointer;
`
