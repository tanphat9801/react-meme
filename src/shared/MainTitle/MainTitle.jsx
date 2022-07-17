import styled, { css } from "styled-components";

const MainContent = styled.h2`
  font-size: 24px;
  color: gray;
  font-weight: 500;
  margin-top: 20px;
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

const MainTitle = ({ children, type }) => {
  if (type === "center") {
    return (
      <>
        <MainContent center>{children}</MainContent>
      </>
    );
  }
  return (
    <>
      <MainContent>{children}</MainContent>
    </>
  );
};

export default MainTitle;
