import { createContext, useContext, type PropsWithChildren } from "react";

interface AuthState {
    saludo: string;
    token: string;
}

export const AuthState = createContext({} as AuthState);

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}: PropsWithChildren) => {
    return(
        <AuthContext.Provider value={{
            saludo: 'Hola mundo',
            token: '123456'
        }}>
            {children}
        </AuthContext.Provider>
    )
}
