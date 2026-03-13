import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// khởi tạo giá trị nhận được khi đăng nhập thành công
const user ={
  "id" : 0,
  "username" : null,
  "email" : null,
  "firstName" : null,
  "lastName" : null,
  "gender" : null,
  "image" : null,
  "accessToken" : null,
  "refreshToken" : null,
  "loading" : false,
  "error" : null
}

export const login = createAsyncThunk('auth/login', async ({username,password}, { rejectWithValue }) => {
  try {
    const info = await axios.post('https://dummyjson.com/user/login',{
      username: username,
      password: password,
      expiresInMins: 30,
    })
    return info.data
  }
  catch(error){
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
    }
    return rejectWithValue(error.message)
  }
});

// lấy thông tin đăng nhập
export const getInfo = createAsyncThunk('auth/getInfo', async ({token}, { rejectWithValue }) => {
  try {
    const info = await axios.get('https://dummyjson.com/auth/me',{
      headers:{'Authorization': `Bearer ${token}`}
    })
    return info.data
  }
  catch(error){
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
    }
    return rejectWithValue(error.message)
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: user,
  reducers: {
    logout: (state) => {
      state.id = 0,
      state.username = null,
      state.email = null,
      state.firstName = null,
      state.lastName = null,
      state.gender = null,
      state.image = null,
      state.loading = false,
      state.accessToken = null,
      state.refreshToken = null,
      state.error = null
    }
  },
  extraReducers: (builder) => {
    // Trạng thái chờ đăng nhập
    builder
    .addCase(login.pending, (state, action) => {
      state.id = 0,
      state.username = null,
      state.email = null,
      state.firstName = null,
      state.lastName = null,
      state.gender = null,
      state.image = null,
      state.loading = true,
      state.accessToken = null,
      state.refreshToken = null,
      state.error = null
    })
    .addCase(login.fulfilled, (state, action) => {
      state.id = action.payload.id,
      state.username = action.payload.username,
      state.email = action.payload.email,
      state.firstName = action.payload.firstName,
      state.lastName = action.payload.lastName,
      state.gender = action.payload.gender,
      state.image = action.payload.image,
      state.loading = false,
      state.accessToken = action.payload.accessToken, // API returns 'accessToken'
      state.refreshToken = action.payload.refreshToken,
      state.error = null
    })
   .addCase(login.rejected, (state, action) => {
      state.id = 0,
      state.username = null,
      state.email = null,
      state.firstName = null,
      state.lastName = null,
      state.gender = null,
      state.image = null,
      state.loading = false,
      state.accessToken = null,
      state.refreshToken = null,
      state.error = action.payload
   })
   .addCase(getInfo.fulfilled, (state, action) => {
      state.id = action.payload.id,
      state.username = action.payload.username,
      state.email = action.payload.email,
      state.firstName = action.payload.firstName,
      state.lastName = action.payload.lastName,
      state.gender = action.payload.gender,
      state.image = action.payload.image
   })
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;