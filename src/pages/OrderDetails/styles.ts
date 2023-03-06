import styled from 'styled-components'

export const OrderDetailsContainer = styled.div`
  background: ${(props) => props.theme.background};
  padding: 2.5rem 10rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme['base-subtitle']};

  display: flex;
`
