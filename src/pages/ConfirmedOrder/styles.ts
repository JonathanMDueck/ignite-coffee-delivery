import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 18.3125rem;
    width: 30.75rem;

    margin-top: 6.25rem;
    align-items: flex-end;
  }
`
export const OrderInfo = styled.div`
  span {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 2.6rem;
    font-size: 2rem;

    margin-bottom: 0.25rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
`

export const OrderDetails = styled.div`
  border: solid 1px ${(props) => props.theme.yellow};

  padding: 2.5rem;
  border-radius: 6px 36px;
  width: 32.875rem;
`

export const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3rem;
  }

  &:not(:first-child) {
    margin-top: 2rem;
  }
`

export const LocationInfo = styled.div``

export const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3rem;
  }
`

export const PaymentInfo = styled.div``

export const baseIcon = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;
`

export const TimeIcon = styled(baseIcon)`
  background: ${(props) => props.theme.yellow};
`
export const PaymentIcon = styled(baseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const MapPinIcon = styled(baseIcon)`
  background: ${(props) => props.theme.purple};
`
