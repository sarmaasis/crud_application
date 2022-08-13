

import styled from '@emotion/styled';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import React, {Component, useState} from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom'

// material ui components styling
const Group = styled(FormGroup)`
    width: 20%;
    margin: 7.5% auto 0 auto;
    & > {
        margin-top: 20px;
    }
`;

const SmallButton = styled(Button)`
    width: %50
`

// default value for the form fields
const defaultValue = {
    name: '',
    email: '',
    username: '',
    phone: '',
}

const AddUser = () => {

    // to navigate between the pages
    const navigate = useNavigate()

    const [user, setUser] = useState(defaultValue)

    const onChnageValue = (e) => {
            setUser({...user,[e.target.name]: e.target.value});
    }

    const addUserDetails = async () =>{
        await addUser(user)
        navigate('/allUser')
    }

    return(
        
        <Group>
            <Typography variant='h4'>Add User</Typography>
            <br></br>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type='text' onChange={(e) => onChnageValue(e)} name='name'/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type='email' onChange={(e) => onChnageValue(e)} name='email'/>
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input type='text' onChange={(e) => onChnageValue(e)} name='username'/>
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input type='phone' onChange={(e) => onChnageValue(e)} name='phone'/>
            </FormControl>
            <br></br>
            <SmallButton variant='contained' onClick={addUserDetails}>Add User</SmallButton>
        </Group>
    )
}

export default AddUser;