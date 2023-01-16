import React from 'react'
import styled from 'styled-components'
function Footer() {
    const Copyright = styled.h4`
        font-size: 0.9em;
        color: #FFFFFF;
        margin: 0;
        font-weight: 400;
        text-align: center;
    `;
    const Wrapper = styled.section`
        background: #24242b; 
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        height: 10%;
    `;
    return (
        <Wrapper>
            <Copyright>Copyright &#169; Your Website 2022</Copyright>
        </Wrapper>
    )
}

export default Footer