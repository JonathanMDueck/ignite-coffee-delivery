import { MapPinLine } from 'phosphor-react'
import {
  CompleteYourOrderContainer,
  AddressInfo,
  AddressInfoContainer,
  CityInput,
  ComplementInput,
  DefaultInput,
  StackedInputs,
  StreetInput,
  UFInput,
} from './styles'
import { PaymentInfo } from '../PaymentInfo'

export function AddressContainer() {
  return (
    <CompleteYourOrderContainer>
      <span>Complete seu pedido</span>
      <AddressInfoContainer>
        <AddressInfo>
          <MapPinLine size={22} />
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </AddressInfo>
        <DefaultInput type="text" placeholder="CEP" />
        <StreetInput type="text" placeholder="Rua" />
        <StackedInputs>
          <DefaultInput type="text" placeholder="Número" />
          <ComplementInput type="text" placeholder="Complemento" />
        </StackedInputs>
        <StackedInputs>
          <DefaultInput type="text" placeholder="Bairro" />
          <CityInput type="text" placeholder="Cidade" />
          <UFInput type="text" placeholder="UF" />
        </StackedInputs>
      </AddressInfoContainer>
      <PaymentInfo />
    </CompleteYourOrderContainer>
  )
}
