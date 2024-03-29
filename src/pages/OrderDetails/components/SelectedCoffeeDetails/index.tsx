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
import { SelectedCoffeeContext } from '../../../../contexts/selectedCoffeeContext'
import { Prohibit } from 'phosphor-react'

export function SelectedCoffeeDetails() {
  const { shoppingCartPrice } = useContext(SelectedCoffeeContext)

  const totalItems = shoppingCartPrice()

  return (
    <SelectedCoffeeContainer>
      <span>Cafés selecionados</span>
      {totalItems === 0 ? (
        <NoItemsDescriptions>
          <Prohibit size={26} />
          Nenhum Café Selecionado
        </NoItemsDescriptions>
      ) : (
        <OrderDescription>
          <SelectedCoffeeCard />
          <div>
            <LabelPriceContainer>
              <PaymentLine>
                <span>Total de itens</span>
                <label>{Number(totalItems).toFixed(2)}</label>
              </PaymentLine>
              <PaymentLine>
                <span>Entrega</span>
                <label>3.50</label>
              </PaymentLine>
              <TotalLine>
                <span>Total</span>
                <label>{Number(totalItems + 3.5).toFixed(2)}</label>
              </TotalLine>
            </LabelPriceContainer>
          </div>
          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
        </OrderDescription>
      )}
    </SelectedCoffeeContainer>
  )
}
