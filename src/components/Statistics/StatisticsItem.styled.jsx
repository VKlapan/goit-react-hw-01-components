import styled from '@emotion/styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-item: center;

  padding: ${props => props.theme.space[3]}px;
  background-color: ${() => getRandomHexColor};
`;

export const Label = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.s};
`;

export const Percentage = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.m};
`;
