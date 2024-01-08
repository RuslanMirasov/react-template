import { Button, ButtonsList } from 'components/Buttons';
import { LoginForm } from 'components/Forms';
import { Title, Text } from 'components/Typography';
import { usePopup } from '../../contexts/PopupContext';

const PopupLogin = () => {
  const { popupOpen } = usePopup();
  return (
    <>
      <Title tag="h4" size="h4">
        Anmeldung
      </Title>
      <LoginForm />
      <ButtonsList align="center">
        <hr />
        <Text size="small">Wenn Sie noch kein Profil haben,</Text>
        <Button full variant="border-dark" onClick={() => popupOpen('registration')}>
          Registrieren Sie sich
        </Button>
      </ButtonsList>
    </>
  );
};

export default PopupLogin;
