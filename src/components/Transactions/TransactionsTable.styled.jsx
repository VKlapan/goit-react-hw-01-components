import styled from '@emotion/styled';

export const Table = styled.table`
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.primaryTable};
`;

export const RowHead = styled.tr`
  text-align: left;
  text-transform: uppercase;
`;

export const TitleTable = styled.th`
  width: ${props => props.theme.space[8]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;
