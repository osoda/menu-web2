import { createContext, useState } from "react";
import IDish from "@/types/IDish";

declare interface ICartContextData {
  isOpen: boolean;
  dishData?: IDish;
}
export declare interface ICartContext {
  contextDataCart: ICartContextData;
  setContextDataCart: React.Dispatch<React.SetStateAction<ICartContextData>>;
}

declare interface IItemShoppingCart {
  title: string;
  price: number;
  image: string;
  qty: number;
}
declare interface IShoppingCartContextData {
  isOpen: boolean;
  items: Array<IItemShoppingCart>;
}
export declare interface IShoppingCartContext {
  contextDataShoppingCart: IShoppingCartContextData;
  setContextDataShoppingCart: React.Dispatch<
    React.SetStateAction<IShoppingCartContextData>
  >;
}

export const DataCartContext = createContext<ICartContext | null>(null);
export const DataShoppingCartContext =
  createContext<IShoppingCartContext | null>(null);

export function DataCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contextDataCart, setContextDataCart] = useState({ isOpen: false });

  const val = { contextDataCart, setContextDataCart };

  return (
    <DataCartContext.Provider value={val}>{children}</DataCartContext.Provider>
  );
}

export function DataShoppingCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultItems = [] as Array<IItemShoppingCart>;
  const [contextDataShoppingCart, setContextDataShoppingCart] = useState({
    isOpen: false,
    items: defaultItems,
  });

  const val = { contextDataShoppingCart, setContextDataShoppingCart };

  return (
    <DataShoppingCartContext.Provider value={val}>
      {children}
    </DataShoppingCartContext.Provider>
  );
}
