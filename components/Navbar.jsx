import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        Show<span>Tracker</span>
      </Logo>
      <NavContainer>
        <Link href="#">Features</Link>
        <Link href="#">Community</Link>
        <Link href="#">Get Started</Link>
      </NavContainer>
      <Actions>
        <Btn1>Log In</Btn1>
        <Btn2>Get Started</Btn2>
      </Actions>
    </Container>
  );
};

const Container = styled.div`
    padding:0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

const Logo = styled.h2`
  font-size: 2rem;
  font-weight: bold;

  span {
    color: #540cfa;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
      display: none;
  }
`;

const Link = styled.a`
  margin-left: 20px;
  font-size: 1rem;
  color: #3b3b3b;
`;
const Actions = styled.div`
  display: flex;
`;

const Btn1 = styled.button`
  padding: 1.2rem 3rem;
  font-weight: bold;
  font-size: 1rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
      display: none;
  }
`;

const Btn2 = styled.button`
  padding: 1.2rem 3rem;
  font-weight: bold;
  font-size: 1rem;
  background: #540cfa;
  outline: none;
  color: white;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    padding:1rem;
}
`;

export default Navbar;
