import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number;
}
interface Action{
    payload:{
        amount:number
    }
    type:string
}

const initialState:CounterState={
    value:0,
}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action:Action)=>{
            state.value=state.value+action.payload.amount
        },
        decrement:(state,action:PayloadAction<{amount:number}>)=>{
            state.value -= action.payload.amount
        }
    },
    extraReducers:(builder)=>{
        //building   the extra readucer 
       builder.addCase(incrementAsync.pending,()=>{
        console.log("mehtod is still pending!!");
        //chain teh add case
       }).addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value+= action.payload
            console.log("it done!!");
            
       })
    }
})
//asyc reducers is a function not a method
export const incrementAsync =createAsyncThunk(
    //name
    "counter/Asyncamount",
    async (amount:number)=>{
        //let the thread sllep for few seconds
        await new Promise((reslove)=>setTimeout(reslove,2000))
        return amount

    }

)
export const {increment,decrement} = CounterSlice.actions
export default CounterSlice.reducer;