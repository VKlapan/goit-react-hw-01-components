import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Avatar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  margin-right: ${props => props.theme.space[2]}px;
  border-radius: 50%;
  background-color: red;
`;

export const Image = styled.img`
  width: 48px;
  border-radius: ${props => props.theme.space[2]}px;
  img {
    src: ${props => props.avatar};
    alt: ${props => props.name};
  }
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
`;
