const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(buttonName => (
        <button
          style={{ textTransform: 'capitalize' }}
          key={buttonName}
          type="button"
          name={buttonName}
          onClick={onLeaveFeedback}
        >
          {buttonName}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
