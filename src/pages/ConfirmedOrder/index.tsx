import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BaseInfo,
  ConfirmedOrderContainer,
  MapPinIcon,
  OrderDetails,
  OrderInfo,
  PaymentIcon,
  TimeIcon,
} from './styles'

import ConfirmedOrderImage from '../../assets/ConfirmedOrder.png'

export function ConfirmedOrder() {
  return (
    <ConfirmedOrderContainer>
      <OrderInfo>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderDetails>
          <BaseInfo>
            <MapPinIcon>
              <MapPin size={16} weight="fill" />
            </MapPinIcon>
            <div>
              <label>
                Entrega em <b>Rua Joao Daniel Martinelli, 102</b>
              </label>
              <label>Farrapos - Porto Alegre, RS</label>
            </div>
          </BaseInfo>
          <BaseInfo>
            <TimeIcon>
              <Timer size={16} weight="fill" />
            </TimeIcon>
            <div>
              <label>Previsão de entrega</label>
              <label>
                <b>20 min - 30 min</b>
              </label>
            </div>
          </BaseInfo>
          <BaseInfo>
            <PaymentIcon>
              <CurrencyDollar size={16} weight="fill" />
            </PaymentIcon>
            <div>
              <label>Pagamento na entrega</label>
              <label>
                <b>Cartão de Crédito</b>
              </label>
            </div>
          </BaseInfo>
        </OrderDetails>
      </OrderInfo>
      <img src={ConfirmedOrderImage} alt="" />
    </ConfirmedOrderContainer>
  )
}
