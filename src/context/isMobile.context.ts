import { Context, createContext } from 'react';

const IsMobileContext: Context<boolean> = createContext<boolean>(false);

export default IsMobileContext;