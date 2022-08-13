

import styled from '@emotion/styled';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import React, {Component, useState, useEffect} from 'react';
import { editUser, getUser } from '../service/api';
import {useNavigate, Link, useParams} from 'react-router-dom'
import { getUserById } from '../service/api';

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

const defaultValue = {
    name: '',
    email: '',
    username: '',
    phone: '',
}

const EditUser = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState(defaultValue)

    useEffect(() =>{
        loadUserDetails()
    },[])

    const {id} = useParams()

    const loadUserDetails = async () => {
        const response = await getUserById(id)
        setUser(response.data)
    }
    

    const onChnageValue = (e) => {
            setUser({...user,[e.target.name]: e.target.value});
    }

    const editUserDetails = async () =>{
        await editUser(user,id)
        navigate('/allUser')
    }

    return(
        
        <Group>
            <Typography variant='h4'>Edit User</Typography>
            <br></br>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input type='text' onChange={(e) => onChnageValue(e)} name='name' value={user.name}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input type='email'onChange={(e) => onChnageValue(e)} name='email' value={user.email}/>
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input type='text' onChange={(e) => onChnageValue(e)} name='username' value={user.username}/>
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input type='phone' onChange={(e) => onChnageValue(e)} name='phone' value={user.phone}/>
            </FormControl>
            <br></br>
            <SmallButton variant='contained' onClick={editUserDetails}>Edit User</SmallButton>
        </Group>
    )
}

export default EditUser;