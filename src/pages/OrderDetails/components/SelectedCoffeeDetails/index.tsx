import {
  ConfirmButton,
  LabelPriceContainer,
  OrderDescription,
  PaymentLine,
  SelectedCoffeeContainer,
  TotalLine,
} from './styles'

import { SelectedCoffeeCard } from '../SelectedCoffeeCard'

export function SelectedCoffeeDetails() {
  return (
    <SelectedCoffeeContainer>
      <span>Cafés selecionados</span>
      <OrderDescription>
        <SelectedCoffeeCard />
        <div>
          <LabelPriceContainer>
            <PaymentLine>
              <span>Total de itens</span>
              <label>29,70</label>
            </PaymentLine>
            <PaymentLine>
              <span>Entrega</span>
              <label>3,50</label>
            </PaymentLine>
            <TotalLine>
              <span>Total</span>
              <label>33,20</label>
            </TotalLine>
          </LabelPriceContainer>
        </div>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </OrderDescription>
    </SelectedCoffeeContainer>
  )
}
