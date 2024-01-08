import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Form, Input } from '..';

const CallbackForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup();

  const sendCallbackForm = form => {
    setLoading();

    setTimeout(() => {
      unsetLoading();
      popupOpen(
        'confirm',
        'Vielen Dank\nfür Ihr Feedback',
        'Ihre Nachricht wurde erfolgreich gesendet. Wir werden Ihr Angebot so schnell wie möglich bearbeiten.'
      );
    }, 1500);
  };

  return (
    <Form onSubmit={sendCallbackForm}>
      <Input type="hidden" name="subject" value="Helfen App zu verbessern" />
      <Input type="textarea" name="massege" placeholder="Ihre Nachricht" required />
      <Button full>Senden</Button>
    </Form>
  );
};

export default CallbackForm;
