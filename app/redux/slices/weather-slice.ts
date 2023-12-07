import { createSlice, PayloadAction} from "@reduxjs/toolkit"

type initState = {
    value: object | null
}

const initialState = {
    value: null
} as initState


export const weather_data = createSlice({
    name: "weather_data",
    initialState,
    reducers:{
        addData: (state,action: PayloadAction<object>) => {
            return {
                value: action.payload
            }
        }
    }
})

export const {addData} = weather_data.actions
export default weather_data.reducer