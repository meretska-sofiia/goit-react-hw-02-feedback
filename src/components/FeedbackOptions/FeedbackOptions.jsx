import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(buttonName => (
        <Button
          key={buttonName}
          type="button"
          name={buttonName}
          onClick={onLeaveFeedback}
        >
          {buttonName}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;
