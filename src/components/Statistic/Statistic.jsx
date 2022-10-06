import { StatisticContainer } from './Statistic.styled';
const Statistic = ({ total, positivePercentage, good, neutral, bad }) => {
  return (
    <StatisticContainer>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </StatisticContainer>
  );
};

export default Statistic;
