import styled from "styled-components";
import FeaturesCard from "./FeatureCard";

const Features = () => {
  return (
    <Container>
      <p>Features</p>
      <Heading>
        Build and <br />
        Customize for
        <br /> your habits
      </Heading>
      <Paragraph>
        ShowTrackr’s built-in machine learning and context-aware features
        guarantee that all the notifications and recommendations are always
        delivered to you in the perfect moment.
      </Paragraph>

      <FeaturesCard
        title={"Automated tracking"}
        text={
          "Track your favorite shows automatically without switching between apps."
        }
        bg={"linear-gradient(135deg, #9C09DB 0%, #1C0FD7 100%);"}
      />
       <FeaturesCard
        title={"Machine learning"}
        text={"Get recommendations like never before, which are truly customized for your taste."
        }
        bg={"linear-gradient(135deg, #F2C314 0%, #FC3832 100%)"}
      />
       <FeaturesCard
        title={"Smart notifications"}
        text={"Receive smart notifications exactly at the right moments when you need them."        }
        bg={"linear-gradient(135deg, #32FBFC 0%, #3214F2 100%);"}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  p {
    color: gray;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 25px;
  color: #2c2c2c;
`;

export default Features;
