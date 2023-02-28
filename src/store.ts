import {configureStore} from '@reduxjs/toolkit'
// import {cakeReducer} from '../features/cake/cakeSlice'
// import {iceReducer} from '../features/icecream/iceSlice'
// import {userReducer} from '../features/user/userSlice'
// import reduxLogger from 'redux-logger'
// const logger=reduxLogger.createLogger()

export const store=configureStore(
    {
        reducer:{
            // cake:cakeReducer,
            // ice:iceReducer,
            // user:userReducer
        },
        // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
    }
)
