import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background: ${(props) => props.theme.background};

  padding: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const LocationSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;

  margin-right: 0.75rem;

  padding: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['purple-dark']};
    margin: 0.25rem;
  }
`
export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.375rem;
  width: 2.375rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

interface CounterProps {
  active: boolean
}

export const Counter = styled.div<CounterProps>`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  margin-right: -2.125rem;
  margin-top: -2.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    display: none;
  }

  ${({ active }) =>
    active &&
    `
    display: none;
  `}
`
