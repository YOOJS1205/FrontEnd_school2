import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  return (
    <div>
      <h2>hello</h2>
      <strong>hello</strong>
      <HelloLicatTwo />
    </div>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatThree />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatThree = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      }}
    </UserInfo.Consumer>
  )
}

export default App;

// props vs contextAPI

// props
// 자식에 전달되는 값이 자기 자신이나 부모에서 관리되기 때문에 변수 관리가 복잡하지 않음
// 어디서 문제점이 생겼는지 추적해서 찾을 수 있음

// context
// 전역에서 관리되기 때문에 변수가 많아질 경욱 관리하기 어려움
// 문제가 생겼을 때 순차적으로 따라가며 확인하는 것이 아니라 해당 컴포넌트로 바로가서 수정 가능