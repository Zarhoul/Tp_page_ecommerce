import React from 'react';
import styled from 'styled-components';

function Title() {

    const Title = styled.h1`
        font-size: 3em;
        text-align: center;
        color: #FFFFFF;
        margin: 0 0 10px 0;
    `;

    const SubTitle = styled.h4`
        font-size: 1em;
        text-align: center;
        font-weight: 400;
        color: #8c9493;
        margin: 0;
    `;

    const Wrapper = styled.section`
        padding: 4em;
        background: #24242b;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    return (
        <Wrapper>
            <Title>Shop in style</Title>
            <SubTitle>With this Shop homepage template</SubTitle>
        </Wrapper>
    )
}

export default Title
