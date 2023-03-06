import styled from 'styled-components'

export const PaymentInfoConatainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  margin-top: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  border-radius: 6px;
`

export const PaymentLabel = styled.div`
  padding: 2.5rem;
  padding-bottom: 2rem;

  display: flex;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }

  div {
    line-height: 130%;

    span {
      color: ${(props) => props.theme['base-subtitle']};
      justify-content: flex-start;

      margin-bottom: 0.125rem;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 2.5rem;
  padding-right: 2.5rem;

  margin-bottom: 2.5rem;
`
