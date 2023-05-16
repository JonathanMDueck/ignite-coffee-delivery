import { PaymentOptionCard } from '../PaymentOptionCard'
import { CurrencyDollar } from 'phosphor-react'
import {
  PaymentInfoConatainer,
  PaymentLabel,
  PaymentOptionsContainer,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/orderContext'

export function PaymentInfo() {
  const { order } = useContext(OrderContext)

  return (
    <PaymentInfoConatainer>
      <PaymentLabel>
        <CurrencyDollar size={22} />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentLabel>
      <PaymentOptionsContainer>
        <PaymentOptionCard
          paymentType="CARTÃO DE CRÉDITO"
          active={order?.payment === 'CARTÃO DE CRÉDITO'}
        />
        <PaymentOptionCard
          paymentType="CARTÃO DE DÉBITO"
          active={order?.payment === 'CARTÃO DE DÉBITO'}
        />
        <PaymentOptionCard
          paymentType="DINHEIRO"
          active={order?.payment === 'DINHEIRO'}
        />
      </PaymentOptionsContainer>
    </PaymentInfoConatainer>
  )
}
