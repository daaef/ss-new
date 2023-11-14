"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <Provider>
      <DevTools/>
        <NextUIProvider>
            {children}
        </NextUIProvider>
    </Provider>
    )
};

export default Providers