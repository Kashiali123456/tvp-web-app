import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
   users: "",
    token: "",
    loading: ""
}

export const registerUser = createAsyncThunk('users', async(body) =>{
    let res = await fetch("http://192.168.100.18:8000/api/user/register",{
        
        method: "POST",
        headers:{
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            Authorization: 'Bearer {token}',
            authorization: localStorage.getItem('token')
           
        },
        body:JSON.stringify(body)

    })
    // console.log('fsafdsgd', res);
    return await res.json();
})
    

const SignUpSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addToken:(state, action)=>{
            state.token = localStorage.getItem('token')
        },
        addUsers:(state, action)=>{
            state.users = localStorage.getItem('users')
            console.log('adfasfdsgfd', state.users )
        }
    },
    extraReducers:{
        [registerUser.pending]: (state, action) =>{
            state.loading= true
        },
        [registerUser.fulfilled]:(state,{payload:{users, token}})=>{
            state.loading=false
            state.token= token;
            state.users = users
            localStorage.setItem("token", JSON.stringify(token))
            localStorage.setItem("users", JSON.stringify(users))
        },
        [registerUser.rejected]: (state, action) =>{
            state.loading= true
        },

    }
})
export const {addToken, addUsers} = SignUpSlice.actions;
export default SignUpSlice.reducer;