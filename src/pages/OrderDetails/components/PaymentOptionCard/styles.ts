import styled from 'styled-components'

interface CardProps {
  active: boolean
}

export const Card = styled.div<CardProps>`
  padding-left: 1rem;
  margin-right: 0.75rem;
  background: ${(props) =>
    props.active ? props.theme['purple-light'] : props.theme['base-button']};
  padding-left: 1rem;
  padding-top: 1.09375rem;
  padding-bottom: 1.09375rem;
  width: 100%;

  border: ${(props) => (props.active ? 'solid;' : 'none;')};
  border-width: ${(props) => (props.active ? '1px;' : '0;')};
  border-color: ${(props) => (props.active ? props.theme.purple : 'none;')};

  border-radius: 6px;

  display: flex;
  align-items: center;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.75rem;
  }

  label {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    &:hover {
      cursor: pointer;
      background: ${(props) =>
        props.active ? props.theme['purple-light'] : props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.active ? props.theme['purple-light'] : props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`
