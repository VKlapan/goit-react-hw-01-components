import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => (
  <li className={css.item}>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
