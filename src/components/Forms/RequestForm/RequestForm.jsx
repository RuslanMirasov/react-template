import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Fieldset, Form, Input } from '..';

const RequestForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup();

  const sendRequestForm = form => {
    const formData = form;
    setLoading();

    const formObject = {};
    for (const [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    console.log(formObject);

    setTimeout(() => {
      unsetLoading();
      popupOpen('confirm');
    }, 1500);
  };

  return (
    <Form onSubmit={sendRequestForm}>
      <Input type="hidden" name="subject" value="request from my site" />
      <Fieldset col="auto" label="Hobby">
        <Input type="radio" name="hobby" label="Guitare" value="Guitare" required />
        <Input type="radio" name="hobby" label="Alkohol" value="Alkohol" required />
      </Fieldset>
      <Input type="number" name="number" label="Age" placeholder="18-56" required />
      <Input type="text" name="name" label="Vorname" placeholder="Christoph" required />
      <Input type="email" name="email" label="Email" placeholder="example@example.com" required />
      <Input type="tel" name="phone" label="Telefonnumer" placeholder="+490000000000" />
      <Input type="textarea" name="massege" label="Nachricht" placeholder="Hallo, alle zusammen..." />
      <Fieldset col="1" label="Datenschutzbestimmungen">
        <Input
          type="checkbox"
          name="agree"
          label="Wenn Sie auf die Schaltfläche klicken, erklären Sie sich mit den Datenschutzbestimmungen einverstanden."
          value="ok"
          required
        />
      </Fieldset>

      <Button full>Registrieren</Button>
    </Form>
  );
};

export default RequestForm;
