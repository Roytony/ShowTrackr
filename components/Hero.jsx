import styled from "styled-components";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <Left>
        <Heading>
          Track Your
          <br /> Shows
          <br /> Automatically
        </Heading>

        <Paragraph>
          With ShowTrackr you can track your favorite TV shows automatically, so
          you never loose track of your TV shows ever again. 🍿
        </Paragraph>
        <InputContainer>
          <input placeholder="your@email.com" />
          <button>Start Tarcking</button>
        </InputContainer>
        <Box3 />
      </Left>
      <Right>
        <Image
          width={500}
          height={900}
          layout="intrinsic"
          alt=""
          src="/iphone-x-mockup.png"
        />
        <Box />
        <Box2 />
      </Right>
    </Container>
  );
};

const Container = styled.main`
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 100%;
  padding: 0 2rem;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow:hidden;
  @media (max-width: 768px) {
      width:100%;
      margin:50px 0;
  }
`;
const Heading = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 35px;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 25px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  height: 50px;
  input {
    flex: 1;
    height: 100%;
    padding: 10px 20px;
  }
  button {
    padding: 10px 8px;
    background: #540cfa;
    border: none;
    outline: none;
    color: white;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

const Box = styled.div`
  position: absolute;
  width: 500px;
  right: 40px;
  top: 100px;

  transform: rotate(30deg);
  height: 500px;
  border-radius: 20px;
  z-index: -10;
  background-image: linear-gradient(135deg, #f2c314 0%, #fc3832 100%);
`;

const Box2 = styled.div`
  position: absolute;
  width: 500px;
  right: 40px;
  top: 100px;

  transform: rotate(50deg);
  height: 500px;
  border-radius: 20px;
  z-index: -10;
  background-image: linear-gradient(135deg, #9c09db 0%, #1c0fd7 100%);
`;

const Box3 = styled.div`
  position: absolute;
  width: 300px;
  left: -250px;
  bottom: 100px;

  transform: rotate(57deg);
  height: 300px;
  border-radius: 20px;
  z-index: -10;
  background-image: linear-gradient(135deg, #32fbfc 0%, #3214f2 100%); ;
`;
export default Hero;
