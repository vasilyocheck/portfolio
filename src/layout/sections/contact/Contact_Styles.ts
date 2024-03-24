import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contact = styled.section`  
  position: relative;
`;

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  font-family: Poppins, sans-serif;
  color: ${theme.colors.font};
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0375rem;
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

export const S = {
    Contact,
    Form,
    Field
}