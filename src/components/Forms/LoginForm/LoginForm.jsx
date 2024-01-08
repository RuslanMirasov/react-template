import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Form, Input } from '..';

const LoginForm = () => {
  const { setLoading, unsetLoading, popupClose } = usePopup();

  const sendLoginForm = form => {
    setLoading();

    setTimeout(() => {
      unsetLoading();
      popupClose();
    }, 1500);
  };

  return (
    <Form onSubmit={sendLoginForm}>
      <Input type="email" name="email" label="Ihre Email" placeholder="example@example.com" required />
      <Input type="password" name="password" label="Password" placeholder="Mindestens 6 Zeichen" required />
      <ButtonsList>
        <Button full>Anmelden</Button>
      </ButtonsList>
    </Form>
  );
};

export default LoginForm;
