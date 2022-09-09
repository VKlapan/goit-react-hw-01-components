import PropTypes from 'prop-types';
import { Label, ListItem, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => (
  <ListItem>
    <Label>{label}</Label>
    <Percentage>{percentage}</Percentage>
  </ListItem>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
