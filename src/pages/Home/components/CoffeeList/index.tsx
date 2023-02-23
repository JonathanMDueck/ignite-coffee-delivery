import { CoffeeListContainer, Title } from "./styles";
import coffeeList from '../../../../CoffeeList.json';
import { CoffeeCard } from "../CoffeeCard";

export function CoffeeList() {
    return (
        <div>
            <Title>Nossos Cafés</Title>
            <CoffeeListContainer>

                {coffeeList.map(item => {
                    return (
                        <CoffeeCard key={item.title}
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            price={item.price}
                            image={item.image} />
                    )
                })}
            </CoffeeListContainer>
        </div>

    )
}