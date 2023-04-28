import {
  ConfirmButton,
  LabelPriceContainer,
  NoItemsDescriptions,
  OrderDescription,
  PaymentLine,
  SelectedCoffeeContainer,
  TotalLine,
} from './styles'

import { SelectedCoffeeCard } from '../SelectedCoffeeCard'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/orderContext'

export function SelectedCoffeeDetails() {
  const { shoppingCartPrice } = useContext(OrderContext)

  const totalItems = shoppingCartPrice()

  return (
    <SelectedCoffeeContainer>
      <span>Cafés selecionados</span>
      {totalItems === 0 ? (
        <NoItemsDescriptions>Nenhum Café Selecionado</NoItemsDescriptions>
      ) : (
        <OrderDescription>
          <SelectedCoffeeCard />
          <div>
            <LabelPriceContainer>
              <PaymentLine>
                <span>Total de itens</span>
                <label>{totalItems}</label>
              </PaymentLine>
              <PaymentLine>
                <span>Entrega</span>
                <label>3,50</label>
              </PaymentLine>
              <TotalLine>
                <span>Total</span>
                <label>{totalItems + 3.5}</label>
              </TotalLine>
            </LabelPriceContainer>
          </div>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </OrderDescription>
      )}
    </SelectedCoffeeContainer>
  )
}
