import styled from "styled-components";

const Community = () => {
  return (
    <Container>
      <p>Community</p>
      <Heading>We believe in the power of the community</Heading>
      <Paragraph>
        Our goal is to create a product and service that you’re satisfied with
        and use it every day. This is why we’re constantly working on our
        services to make it better every day and really listen to what our users
        has to say.
      </Paragraph>
      <Btn>Read more testimonials</Btn>
    </Container>
  );
};

const Container = styled.div`
  background: #000;
  color: white;
  padding: 2rem;
  margin: 30px 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  color: #c0c0c0;
  line-height: 20px;
`;

const Btn = styled.button`
  padding: 1.2rem 3rem;
  background: #540cfa;
  color:white;
  font-weight:bold;
  border:none;
  border-radius:10px;
  font-size:1rem;
`;
export default Community;
