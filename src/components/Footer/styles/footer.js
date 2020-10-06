import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 70px 45px;
`;
export const Link = styled.a`
  font-size: ${({ size }) => (size ? `${size}px` : "13px")};
  color: #757575;
  padding: 1px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const MainLink = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${Link} {
    margin-bottom: 16px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const Break = styled.div`
  margin: 10px;
`;
