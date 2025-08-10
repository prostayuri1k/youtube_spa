import type {AppDispatch, RootState} from "../redux/store.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
    rejectValue: string | null
}>