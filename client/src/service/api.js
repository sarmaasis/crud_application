import axios from 'axios'

const url = 'http://localhost:5000'

// api call to add a user in database
export const addUser = async (data) => {
    try{

        return await axios.post(`http://localhost:5000/api/addUser`,data);

    } catch(err){
        console.log(err);
    }
}

// api call to get all users from database
export const getUser = async () => {

    try{
         return await axios.get(`http://localhost:5000/api/getUsers`)
    } catch (err) {
        console.log(err)
    }
    
}

// api call to get a user using ID
export const getUserById = async (id) =>{
    try{
        return await axios.get(`${url}/${id}`);
    } catch(err){
        console.log(err)
    }
}

// api call to edit existing user data in database
export const editUser = async (user,id) => {
    try{
        return await axios.post(`${url}/${id}`,user)
    }catch(err){
        console.log(err)
    }
}

// api call to delete a user details from database
export const deleteUser = async(id) => {
    try{
        return await axios.delete(`${url}/${id}`)
    }catch(err){
        console.log(err)
    }
}