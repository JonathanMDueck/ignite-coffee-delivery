import { MapPinLine } from 'phosphor-react'

import {
  AddressContainer,
  AddressInfo,
  ComplementInput,
  CompleteYourOrderContainer,
  DefaultInput,
  OrderDetailsContainer,
  SelectedCoffeesContainer,
  StackedInputs,
  StreetInput,
  UFInput,
} from './styles'

export function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <CompleteYourOrderContainer>
        <span>Complete seu pedido</span>
        <AddressContainer>
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
            <ComplementInput type="text" placeholder="Cidade" />
            <UFInput type="text" placeholder="UF" />
          </StackedInputs>
        </AddressContainer>
      </CompleteYourOrderContainer>
      <SelectedCoffeesContainer>
        <span>Cafés selecionados</span>
      </SelectedCoffeesContainer>
    </OrderDetailsContainer>
  )
}
