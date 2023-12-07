import { createSlice, PayloadAction} from "@reduxjs/toolkit"

type initState = {
    value: string | null
}

const initialState = {
    value: null
} as initState


export const cityTaken = createSlice({
    name: "cityTaken",
    initialState,
    reducers:{
        addCity: (state,action: PayloadAction<string>) => {
            return {
                value: action.payload
            }
        }
    }
})

export const {addCity} = cityTaken.actions
export default cityTaken.reducer