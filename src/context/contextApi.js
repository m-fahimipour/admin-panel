import { createContext, useContext, useReducer } from "react";
import reducer, {initialState} from "./reducer";


const stateContext = createContext();

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <stateContext.Provider value={{ state, dispatch }}>
                {children}
           </stateContext.Provider>
}


export function useDispatch(){
    const {dispatch} = useContext(stateContext);

    if(!dispatch){
        throw new Error("you must use this custom Hook and Provider Component together");
    }

    return dispatch;
}

export function useContextState(){
    const {state} = useContext(stateContext);

    if(!state){
        throw new Error("you must use this custom Hook and Provider Component together");
    }

    return state;
}