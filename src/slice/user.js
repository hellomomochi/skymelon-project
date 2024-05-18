import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user', //ตั้งชื่อ
    initialState: { //ค่าเริ่มต้น
        userId: ""
    },
    reducers: { //คอนเซ็ปคล้ายฟังก์ชั่น set ของ userstate
        setUserid: (state, { payload }) => {
            state.userId = payload.userId
        },
        clearUserid: (state) => {
            state.userId = '';
        }
    }
})

export const { setUserid, clearUserid} = userSlice.actions

export default userSlice.reducer