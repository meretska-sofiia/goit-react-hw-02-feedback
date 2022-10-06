const Statistic = ({ total, positivePercentage, good, neutral, bad }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>
        Total:
        {total}
      </p>
      <p>Positive feedback:{positivePercentage} %</p>
    </div>
  );
};

export default Statistic;
