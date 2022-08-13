import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, styled, Button} from "@mui/material"
import { getUser } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../service/api";

const StyledTable = styled(Table)`
    width: 70%;
    margin: 50px auto 0 auto;
`;

const StyledRow = styled(TableRow)`
    & > th {
        font-size: 20px;
    }
`;

const BlueButton = styled(Button)`
    background: #
`;

const AllUser = () => {

    const [users, setUsers] = useState([])

    useEffect( () =>{
        getAllUser()
    }, []);

    const getAllUser = async () => {
        let response = await getUser()
        setUsers(response.data)
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
        getAllUser()
    }
    return(
        <StyledTable>
            <TableHead>
                <StyledRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Phone</TableCell>
                </StyledRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TableRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <BlueButton varient='contained' style= {{marginRight: 10}} component={Link} to={`/editUser/${user._id}`}>Edit</BlueButton>
                                <Button variant="contained" onClick={() => deleteUserDetails(user._id)} >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;