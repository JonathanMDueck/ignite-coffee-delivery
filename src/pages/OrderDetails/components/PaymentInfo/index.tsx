import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  Card,
  PaymentInfoConatainer,
  PaymentLabel,
  PaymentOptionsContainer,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/orderContext'

enum PaymentTypes {
  CREDITO = 'CARTÃO DE CRÉDITO',
  DEBITO = 'CARTÃO DE DÉBITO',
  DINHEIRO = 'DINHEIRO',
}

export function PaymentInfo() {
  const { order, updatePaymentType } = useContext(OrderContext)

  function handleUpdatePaymenteType(paymentType: string) {
    updatePaymentType(paymentType)
  }

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
        <Card
          onClick={() => {
            handleUpdatePaymenteType(PaymentTypes.CREDITO)
          }}
          active={order?.payment === PaymentTypes.CREDITO}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Card>
        <Card
          onClick={() => {
            handleUpdatePaymenteType(PaymentTypes.DEBITO)
          }}
          active={order?.payment === PaymentTypes.DEBITO}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </Card>
        <Card
          onClick={() => {
            handleUpdatePaymenteType(PaymentTypes.DINHEIRO)
          }}
          active={order?.payment === PaymentTypes.DINHEIRO}
        >
          <Money size={16} />
          DINHEIRO
        </Card>
      </PaymentOptionsContainer>
    </PaymentInfoConatainer>
  )
}
