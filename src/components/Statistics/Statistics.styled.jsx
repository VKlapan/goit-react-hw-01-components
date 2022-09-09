import styled from '@emotion/styled';

export const StatisticsSection = styled.section``;

export const StatisticsTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.secondaryText};

  margin: 0;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  margin-bottom: ${props => props.theme.space[3]}px;

  padding: ${props => props.theme.space[2]}px;
`;
