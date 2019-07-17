import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
    background-color: #05668D;
    min-height: 50px !important;
    display: flex;
    justify-content: space-between;
`;

const NavItemsContainer = styled.div``;

const NavItem = styled(Link)`
    margin-left: 15px !important;
`;

const Navbar = () => {
    return (
        <AppBar position="fixed">
            <StyledToolbar>
                <h3>Note Taker</h3>
                <NavItemsContainer>
                    <NavItem href="#" color="inherit">Home</NavItem>
                    <NavItem href="#" color="inherit">Login</NavItem>
                </NavItemsContainer>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;