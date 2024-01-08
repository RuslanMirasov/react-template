import Section from '../components/Section/Section';
import { TitleBox, Title, Text } from 'components/Typography';
import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';

const Home = () => {
  const { popupOpen } = usePopup();
  return (
    <>
      <Section
        bg="https://www.schengenvisainfo.com/news/wp-content/uploads/2021/03/Germany-flag.jpg"
        padTop="big"
        padBottom="big"
        mask="linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 43%, rgba(0,0,0,0.2) 100%)"
        dark
      >
        <TitleBox>
          <Title tag="h1" size="h2">
            My site title
          </Title>
          <Text size="big">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quis eaque est sed ut non rerum quasi itaque necessitatibus, <br />
            sequi consequuntur? Aut excepturi at, sapiente debitis <br />
            doloremque porro odit
          </Text>
          <ButtonsList>
            <Button to="./books/444">Unterrichten</Button>
            <Button onClick={() => popupOpen('confirm', 'null', 'null')}>POPUP</Button>
          </ButtonsList>
        </TitleBox>
      </Section>
      <Section full></Section>
    </>
  );
};

export default Home;
