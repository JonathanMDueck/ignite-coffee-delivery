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

export const CompleteYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  margin-right: 2rem;

  span {
    margin-bottom: 0.9375rem;
  }
`

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.9375rem;
  }
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px;
  padding: 2.5rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: solid 1px ${(props) => props.theme['base-button']};
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 400;

  padding: 0.75rem;
  margin-bottom: 1rem;

  outline: none;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const DefaultInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const ComplementInput = styled(BaseInput)`
  width: 100%;
  margin-left: 0.875rem;

  ::placeholder::after {
    content: 'optional';
    font-size: italic;
  }
`

export const StackedInputs = styled.div`
  display: flex;
`

export const UFInput = styled(BaseInput)`
  width: 3.75rem;
  margin-left: 0.875rem;
`

export const AddressInfo = styled.div`
  margin-bottom: 2rem;
  span {
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.1375rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 1.875rem;
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.5rem;
  }
`
