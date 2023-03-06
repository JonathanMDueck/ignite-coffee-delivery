import { PaymentOptionCard } from '../PaymentOptionCard'
import { CurrencyDollar } from 'phosphor-react'
import {
  PaymentInfoConatainer,
  PaymentLabel,
  PaymentOptionsContainer,
} from './styles'

export function PaymentInfo() {
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
        <PaymentOptionCard paymentType="CARTÃO DE CRÉDITO" />
        <PaymentOptionCard paymentType="CARTÃO DE DÉBITO" />
        <PaymentOptionCard paymentType="DINHEIRO" />
      </PaymentOptionsContainer>
    </PaymentInfoConatainer>
  )
}
