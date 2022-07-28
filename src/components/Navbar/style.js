import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  background: #e2e2e2;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1300px) {
    justify-content: space-evenly;
    position: relative;
  }
`;

export const ImgStyle = styled.img`
  height: 100%;
  width: 400px;
  @media (max-width: 570px) {
    width: 100%;
  }
`;

export const Brand = styled.div`
  width: 30%;
  @media (max-width: 1300px) {
    width: 70%;
  }
`;
export const ListNav = styled.div`
  width: 40%;
  height: 100%;
  padding: 0 20px;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const UlStyle = styled.ul`
  font-family: "GFS Neohellenic", sans-serif;
  height: 100%;
  font-size: 24px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5c5c5c;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const LiStyle = styled.li`
  cursor: pointer;
  &:hover {
    color: #026a8b;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: #026a8b;
  }
  @media (max-width: 1300px) {
    text-decoration: none;
  }
`;

export const DivButton = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1300px) {
    display: none;
  }
`;
export const InfoButton = styled.button`
  font-size: 40px;
  font-size: 40px;
  border: none;
  background: #e2e2e2;
  cursor: pointer;
`;
export const DivMenu = styled.div`
  position: absolute;
  background: #e2e2e2;
  width: 100%;
  height: 50vh;
  top: 10vh;
  left: 0px;
`;
