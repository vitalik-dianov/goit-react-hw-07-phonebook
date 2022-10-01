import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
