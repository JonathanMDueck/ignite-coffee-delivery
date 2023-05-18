import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.9375rem;
  }
`
export const OrderDescription = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  padding: 2.5rem;
`

export const NoItemsDescriptions = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  font-weight: 400;

  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 1rem;
  }
`

export const LabelPriceContainer = styled.div`
  margin-top: 1.5rem;
`

export const PaymentLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
  }

  label {
    font-size: 1rem;
  }
`

export const TotalLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.625rem;
`

export const ConfirmButton = styled.button`
  background: ${(props) => props.theme.yellow};

  margin-top: 1.5rem;

  color: ${(props) => props.theme.white};

  width: 100%;

  padding: 0.75rem;

  border: none;
  border-radius: 6px;

  font-size: 0.875rem;
  line-height: 1.4rem;
  font-weight: 700;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
