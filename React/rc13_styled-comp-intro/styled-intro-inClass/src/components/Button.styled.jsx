import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  /* background-color: hotpink; */
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: pink;
  &:hover {
    transform: scale(0.97);
  }
`;
