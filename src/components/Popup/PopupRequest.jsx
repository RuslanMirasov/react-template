import { RequestForm } from 'components/Forms';
import { Title, Text } from 'components/Typography';

const PopupRequest = ({ title, text }) => {
  return (
    <>
      <Title tag="h4" size="h4">
        {title}
      </Title>
      <hr />
      <Text size="small">{text}</Text>
      <RequestForm />
    </>
  );
};

export default PopupRequest;
