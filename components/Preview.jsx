/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";

const Preview = () => {
  return (
    <Container>
      <ImageCotainer>
        <Image
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F1de4su4id2v11.jpg&f=1&nofb=1"
          }
        />
        <Image
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yj9cCGmFY5Cva3wKEpMlPQAAAA%26pid%3DApi&f=1"
        }
        />

        <Image
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fcfjl17atexjy.png&f=1&nofb=1"
          }
        />
      </ImageCotainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;
`;

const ImageCotainer = styled.div`
  display: flex;
  overflow: scroll;
`;

const Image = styled.img`
  width: 80%;
  margin-left:10px;
  height:300px;
  object-fit:cover;
`;

export default Preview;
