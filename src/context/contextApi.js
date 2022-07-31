import { createContext, useReducer } from "react";

stateContext = createContext();

export default function Provider({ children }) {
    [state, dispatch] = useReducer(reducer, initialState);

    return <stateContext.Provider value={{ state, dispatch }}>
                {children}
           </stateContext.Provider>
}


export function useDispatch()