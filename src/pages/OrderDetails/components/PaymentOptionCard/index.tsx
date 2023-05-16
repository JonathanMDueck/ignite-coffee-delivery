import { CreditCard, Bank, Money } from 'phosphor-react'
import { Card } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/orderContext'

interface CardProps {
  paymentType: string
  active: boolean
}

export function PaymentOptionCard({ paymentType, active }: CardProps) {
  const { updatePaymentType } = useContext(OrderContext)

  function handleUpdatePaymenteType(paymentType: string) {
    updatePaymentType(paymentType)
  }

  return (
    <Card
      onClick={() => {
        handleUpdatePaymenteType(paymentType)
      }}
      active={active}
    >
      {paymentType === 'CARTÃO DE CRÉDITO' && <CreditCard size={16} />}
      {paymentType === 'CARTÃO DE DÉBITO' && <Bank size={16} />}
      {paymentType === 'DINHEIRO' && <Money size={16} />}
      <label>{paymentType}</label>
    </Card>
  )
}
