import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;

  align-items: flex-start;

  padding: 0.5rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    height: 4rem;
    width: 4rem;
  }

  &:not(:first-child) {
    margin-top: 1.5rem;
  }
`

export const Details = styled.div`
  margin-left: 1rem;
  font-weight: 400;
  font-size: 1rem;

  margin-bottom: 1.5rem;

  span {
    line-height: 1.3rem;
    margin-bottom: 0.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

export const AmountContainer = styled.div`
  height: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  display: flex;
  justify-content: space-between;

  align-items: center;

  padding: 0.75rem 0.5rem;

  margin-right: 0.5rem;

  p {
    font-size: 1rem;

    padding: 0.34375rem 0.25rem;

    display: flex;
    justify-content: center;
  }

  svg {
    color: ${(props) => props.theme.purple};

    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }
`

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;

  display: flex;
  align-items: center;
  padding: 0.5rem;

  height: 2rem;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const PriceTag = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3rem;
  width: 100%;
  text-align: right;
`
