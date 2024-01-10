import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import {useDispatch} from "react-redux";


const store = configureStore({
    reducer: {
        posts: todoReducer,
    },
});

export default store;

export type ReduxStateType = typeof store.getState;

export type ReduxState = ReturnType<ReduxStateType>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useThunkDispatch = () => useDispatch<TypedDispatch>();

export type useAppSelectorType = ReturnType<ReduxStateType>;