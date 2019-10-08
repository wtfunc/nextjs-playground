import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary}; 
`;

export default () => (
  <Content><p>Fairly simple to get up and running i think..</p></Content>
);