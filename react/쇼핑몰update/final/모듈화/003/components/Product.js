import Card from './Card';
import Cart from './Cart';

const Product = ({ item }) => {
    //이런 식으로도 가능
    const result = []
    item.forEach(item => {
        result.push(<Card goods={item} key={item.id} />)
    });
    return (
        <main class="product">
            <ul class="product-list">
                {result}
            </ul>
            <Cart />
        </main>
    )
}

export default Product;

// 이름이 있는 모듈을 가져오려면 중괄호가 필요하고, default export 한 모듈을 가져오려면 중괄호가 필요하지 않습니다