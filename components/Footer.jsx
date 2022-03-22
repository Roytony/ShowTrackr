import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p >Get Started</p>
      <Heading>Start tracking your TV shows for free </Heading>
      <Paragraph>
        In order to start tracking your TV shows, all you have to do is enter
        your email address. Everything else will be taken care of by us. All you
        have to do is sit back, relax and enjoy your TV shows.
      </Paragraph>
    </Container>
  );
};

const Container = styled.footer`
  padding: 0 2rem;
  margin: 0 auto;
  text-align:center;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #2c2c2c;
  line-height: 20px;
`;

export default Footer;
