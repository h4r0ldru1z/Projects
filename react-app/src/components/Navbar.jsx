import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Menu = styled.ul`
display: flex;
list-style: none;
`;
const MenuItem = styled.li`
margin-right:30px;
font-size: 20px;
font-weight: bold;
color: gray;
`;


const Logo = styled.h1
    `
font-weight: bold;
text-decoration: underline crimson;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Harold</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <span>button</span>
            </Wrapper>
        </Container>
    )
}

export default Navbar
