
import { Container } from '../globalStyles';
import styled from 'styled-components';

export const Parallax = styled.div`
  height:500px;
  background-attachment: fixed;
  filter: blur(${props => props.blur ? props.blur : 0});
  -webkit-filter: blur(${props => props.blur ? props.blur : 0});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.image});
  position:relative;
`

/* Position text in the middle of the page/image */
export const ParallaxText = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  left: 50%;
  transform:translateX(-50%);
  transform:translateY(-50%);
  text-align: center;
  color: #000;
  color: #fff;
  padding: 18px;
  font-size: 44px;
  letter-spacing: 10px;
  border: 4px solid white;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 0.4); 

  &::first-letter{
    font-weight:bold;
    font-size:64px;
    text-transform:uppercase;
    color:goldenrod;
  }
  `;