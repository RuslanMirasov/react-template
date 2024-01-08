import { RegisterForm } from 'components/Forms';
import { Title, Text } from 'components/Typography';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupRegistration = () => {
  return (
    <PopupAnimation>
      <Title tag="h4" size="h4">
        Registrierung
      </Title>
      <hr />
      <Text size="small">Melden Sie sich an, um Ihren Fortschritt zu speichern und Ihre Leistungen zu verfolgen</Text>
      <RegisterForm />
    </PopupAnimation>
  );
};

export default PopupRegistration;
