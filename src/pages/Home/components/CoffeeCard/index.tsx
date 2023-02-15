import ExpressoTradicional from '../../../../assets/ExpressoTradicional.png';
import CafeComLeite from '../../../../assets/CafeComLeite.png';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { CoffeeCardContainer, TagContainer, Tag, BuyContainer, PriceContainer } from './styles';

interface CofffeeCardProps {
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
}

export function CoffeeCard({ title, description, tags, price, image }: CofffeeCardProps) {

    function getImageSource() {
        switch (image) {
            case 'ExpressoTradicional':
                return ExpressoTradicional;
            case 'CafeComLeite':
                return CafeComLeite;
        }
    }

    return (
        <CoffeeCardContainer>
            <img src={getImageSource()} />
            <TagContainer>
                {tags.map(item => {
                    return <Tag>{item.toUpperCase()}</Tag>
                })}
            </TagContainer>
            <h2>{title}</h2>
            <p>{description}</p>
            <BuyContainer>
                <PriceContainer>
                    <p>R$ </p>
                    <span>{price}</span>
                </PriceContainer>
                <Plus />
                <span>0</span>
                <Minus />

                <button>
                    <ShoppingCart weight='fill' />
                </button>
            </BuyContainer>
        </CoffeeCardContainer>
    )
}