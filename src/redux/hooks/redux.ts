import {useAppSelectorType} from "../store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<useAppSelectorType> = useSelector;
