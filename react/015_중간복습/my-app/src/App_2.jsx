import React, { useState } from 'react';
import styled from 'styled-components';

const ContentOne = styled.div`
  margin: 40px;
`

const ContentTwo = styled.h2`
  color: red;
`

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`

const ContentFour = styled(ContentOne, ContentTwo)`
  border: 1px solid black;
`

function App() {
    return (
        <div>
            <ContentOne>Hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
            <ContentFour>hello world</ContentFour>
        </div>
    );
}

export default App;