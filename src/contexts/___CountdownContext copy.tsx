import { createContext, ReactNode } from "react";
import { ChallengesProvider } from "./ChallengesContext";

interface CountdownProviderProps {
    children: ReactNode;
}

interface CountdownContextData {

}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

    return (
        <CountdownContext.Provider value={{

        }}>
            {children}
        </CountdownContext.Provider>
    )
}