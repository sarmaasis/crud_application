import React, {Component} from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header= styled(AppBar)`
    background: #000000
`;

const Tab = styled(NavLink)`
    font-size: 20px;
    margin-right: 15px;
    color: inherit;
    text-decoration: none;
`;


const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
                <Tab to='/'>Home</Tab>
                <Tab to='/addUser'>Add User</Tab>
                <Tab to='/allUser'>All User</Tab>
            </Toolbar>
        </Header>
    )
}

export default NavBar;