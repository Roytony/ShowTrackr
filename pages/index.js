import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styled from 'styled-components';
import Features from "../components/Features";
import Preview from "../components/Preview";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Features />
      <Preview />
      <Community />
      <Footer />
    </Container>
  )
}


const Container = styled.div`
  width:100%;
  min-height:100vh;
`;
export default Home;