import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
  height: 100vh;
  display: flex;
  
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1`
  ${font({maxSize: 27, minSize: 20, weight: 400})};
  
  p {
    display: none;
  }
`;

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, maxSize: 50, minSize: 36})};  
  letter-spacing: 0.15625rem;
  margin: 10px 0;  
  
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 1.25rem;
      background-color: ${theme.colors.accent};      
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const SmallText = styled.span`
  font-size: 0.875rem;  
  font-weight: 400;  
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  
  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      bottom: -20px;
    }
  }
  
  @media ${theme.media.mobile} {
    margin-top: 65px;
  };
`;

export const S = {
    Main,
    Photo,
    MainTitle,
    Name,
    SmallText,
    PhotoWrapper
}