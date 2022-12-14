import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import {
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    <StatisticsTitle>{title && title} </StatisticsTitle>

    <StatisticsList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </StatisticsList>
  </StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
