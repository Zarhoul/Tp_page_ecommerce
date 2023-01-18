import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    background: #f8f9fb;
    width: 100%;
    height : 10%;
    display: flex;
    flex-direction: row;
    flex-grow: 1 8 1;
`;

const Logo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
`;

const LogoButton = styled.a`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.2em;
    text-decoration: none;
    color: #24242b;
    cursor: pointer;
    :hover{color: #8c8a9c;};
`;

const List = styled.div`
    display : flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 8;
`;

const ListItem = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: #979796;
    :hover{color: #8c8a9c;};
    :nth-child(1){color: #24242b;};
`;

const DropdownMenu = styled.div`
    position: relative;
    display: inline-block
    :hover{display: block;};
`;

const DropdownButton = styled.button`
    background: none;
    font-size: 20px;
    color: #979796;
    border: none;
    cursor: pointer;
`;

const DropdownContent = styled.div`
    color: #979796;
    cursor: pointer;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    display: block;
`;

const ContentLink = styled.a`
    display: block;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`;

const CartButton = styled.div`
    flex-grow: 1;
`;

function Header() {
    return (
        <Wrapper>
            <Logo>
                <LogoButton href="...">Start Bootstrap</LogoButton>
            </Logo>
            <List>
                    <ListItem href="...">Home</ListItem>
                    <ListItem href="...">About</ListItem>
                    <DropdownMenu>
                        <DropdownButton>Dropdown</DropdownButton>
                        <DropdownContent>
                            <ContentLink href="#">Link 1</ContentLink>
                            <ContentLink href="#">Link 2</ContentLink>
                            <ContentLink href="#">Link 3</ContentLink>
                        </DropdownContent>
                    </DropdownMenu>
            </List>
            <CartButton>
                <button>
                    cart
                </button>
            </CartButton>
        </Wrapper>
    )
}

export default Header