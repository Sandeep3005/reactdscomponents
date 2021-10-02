import styled from "styled-components";

export interface IButtonProps {
  primary?: boolean;
  textContent: string;
  onClick: any;
  variant: string;
}

const StyledButton = styled.button<any>`
  display: inline-block;
  padding: 0.8em 1.5em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid;
  border-radius: 2em;
  box-sizing: border-box;
  font-weight: 300;
  text-align: center;
  border-color: ${(props) =>
    props.variant === "primary" ? "#4B3869" : "#63B4B8"};
  background-color: ${(props) =>
    props.variant === "primary" ? "#4B3869" : "#63B4B8"};
  color: ${(props) => (props.variant === "primary" ? "white" : "white")};
`;

export const Button = (props: IButtonProps) => {
  const { textContent, variant } = props;
  return <StyledButton variant={variant}>{textContent}</StyledButton>;
};
