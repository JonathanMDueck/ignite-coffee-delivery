import { BackgroundContainer, CoffeeIcon, InfoContainer, InfoLabelContainer, IntroContainer, PackageIcon, ShoppingCartIcon, TimerIcon, TitleContainer } from "./styles";
import CoffeeImg from '../../../../assets/Imagem.png';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


export function Intro() {

    return (
        <BackgroundContainer>

            <IntroContainer>
                <TitleContainer>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <span>
                        Com o Coffee Delivery você recebe o seu café onde estiver, a qualquer hora
                    </span>

                    <InfoContainer>
                        <InfoLabelContainer>
                            <ShoppingCartIcon>
                                <ShoppingCart size={16} weight="fill" />
                            </ShoppingCartIcon>
                            <span>Compra simples e segura</span>
                        </InfoLabelContainer>
                        <InfoLabelContainer>
                            <PackageIcon>
                                <Package size={16} weight="fill" />
                            </PackageIcon>
                            <span>Embalagem mantém o café intacto</span>
                        </InfoLabelContainer>
                        <InfoLabelContainer>
                            <TimerIcon>
                                <Timer size={16} weight="fill" />
                            </TimerIcon>
                            <span>Entrega rápida e rastreada</span>
                        </InfoLabelContainer>
                        <InfoLabelContainer>
                            <CoffeeIcon>
                                <Coffee size={16} weight="fill" />
                            </CoffeeIcon>
                            <span>O café hega fresquinho até você</span>
                        </InfoLabelContainer>
                    </InfoContainer>

                </TitleContainer>
                <img src={CoffeeImg} />
            </IntroContainer>
        </BackgroundContainer>
    )
}