import { CreditCard, Bank, Money } from 'phosphor-react'
import { Card } from './styles'

interface CardProps {
  paymentType: string
}

export function PaymentOptionCard({ paymentType }: CardProps) {
  return (
    <Card>
      {paymentType === 'CARTÃO DE CRÉDITO' && <CreditCard size={16} />}
      {paymentType === 'CARTÃO DE DÉBITO' && <Bank size={16} />}
      {paymentType === 'DINHEIRO' && <Money size={16} />}
      <label>{paymentType}</label>
    </Card>
  )
}
