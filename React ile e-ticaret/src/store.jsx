import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice'
import dataReducer2 from './dataCaro'
import DataCard from "./DataCard";
import RegisterData from "./RegisterData";
import LoginDatam from './LoginData'





export const store = configureStore({

    reducer: {

        data: dataReducer,
        dataCaro: dataReducer2,
        CardItem: DataCard,
        RegisterItem: RegisterData,
        LoginData: LoginDatam,

    }

})

