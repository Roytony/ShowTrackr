import styled from "styled-components";

const FeaturesCard = ({ bg, title, text }) => {
  return (
    <div>
      <Box bg={bg} />
      <Heading>{title}</Heading>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: ${(props) => props.bg};
`;

const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;
const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 17px;
`;
export default FeaturesCard;
