import React from 'react'
import styled from 'styled-components'
function Footer() {
    const Copyright = styled.h4`
    font-size :'30px';
    color :white;
`;
    const Wrapper = styled.section`
background-color :black; 
padding: 1em;
text-align:center;
font-weight:400;
`;
    return (
        <Wrapper>
            <Copyright>Copyright &#169; Your Website 2022</Copyright>
        </Wrapper>
    )
}

export default Footer