import React from "react";

import { User } from "@/types";

type SessionStateContextProps = {
  user: User | undefined;
  isAuthorized: boolean;
};

type SessionDispatchContextProps = {
  login: (args: User) => void;
  logout: () => void;
}

type Actions = { type: 'login', payload: User } | { type: 'logout' }

const SessionStateContext = React.createContext<SessionStateContextProps | undefined>(undefined);
const SessionDispatchContext = React.createContext<SessionDispatchContextProps | undefined>(undefined);

export function sessionReducer(state: SessionStateContextProps, action: Actions): SessionStateContextProps {
	switch (action.type) {
		case 'login': {
			return { ...state, user: { ...action.payload }, isAuthorized: true }
		}
		case 'logout': {
			return { user: undefined, isAuthorized: false }
		}
		default: {
			throw new Error('Unhandled action type')
		}
	}
}


/**
 * Provides a context for the user session.
 * @param children The child components to be wrapped by the provider.
 * @returns A JSX element that provides the Session context.
 */
export function SessionProvider(props: React.PropsWithChildren): JSX.Element {

  const [state, dispatch] = React.useReducer(sessionReducer, {
    user: undefined,
    isAuthorized: false
  });

  const dispatchValue = React.useMemo(
    () => ({
      login: (args: User) => dispatch({ type: 'login', payload: args }),
      logout: () => dispatch({ type: 'logout' }),
    }),
    [],
  );


  return (
    <SessionDispatchContext.Provider value={dispatchValue}>
      <SessionStateContext.Provider value={state}>
        {props.children}
      </SessionStateContext.Provider>
    </SessionDispatchContext.Provider>
  );
}

/**
 * @returns Returns the state values of the Session.
 */
export function useSessionState() {
  const context = React.useContext(SessionStateContext);
  if (context === undefined) {
    throw new Error('useSessionState must be used within a SessionContextProvider.')
  }

  return context;
}

/**
 * @returns Returns the dispatch values of the Session.
 */
export function useSessionDispatch() {
  const context = React.useContext(SessionDispatchContext);
  if (context === undefined) {
    throw new Error('useSessionDispatch must be used within a SessionContextProvider.')
  }

  return context;
}

