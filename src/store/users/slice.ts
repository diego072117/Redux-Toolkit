import { createSlice } from '@reduxjs/toolkit'

export interface User {
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User {
    id: string
}

const initialState: UserWithId[] = [
    
        {
          id: "1",
          name: "Diego Parra",
          email: "parracalderond9@gmail.com",
          github: "diego072117",
        },
        {
          id: "2",
          name: "Santiago Carreño",
          email: "parracalderond9@gmail.com",
          github: "santicarreno13",
        },
        {
          id: "3",
          name: "Johan Avendaño",
          email: "parracalderond9@gmail.com",
          github: "Johan505",
        },
      
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer