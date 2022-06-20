import { useEffect } from 'react';
import { useSelector } from 'react-redux'

function StockCounter(){

    const { stock } = useSelector(state => ({
        stock: state.goodsReducer.stock,
    }))
    console.log(stock);

    const { message } = useSelector(state => ({
        message: state.stockReducer.message,
    }))
    console.log(message);

    // useEffect 사용!!!
    useEffect(() => {
        if (!stock) {
            
        }
    }, [stock])

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default StockCounter