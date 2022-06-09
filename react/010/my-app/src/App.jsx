function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello() {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };
  return(
    <div>
      {productList.products.map((item) => (
        <div className={item.id}>
          <h1>{item.id - 100} {item.title}</h1>
          <p>{item.price}원</p>
        </div>
      ))}
    </div>
  )
}

export default App;
