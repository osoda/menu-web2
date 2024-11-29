import { useContext } from "react";
import {
  DataCartContext,
  DataShoppingCartContext,
} from "@/context/cartContext";

export function useDataCartContext() {
  const context = useContext(DataCartContext);
  if (!context) {
    throw new Error(
      "UseDataCartContext must be used whitin a DataCartContextProvider"
    );
  }

  return context;
}

export function useDataShoppingCartContext() {
  const context = useContext(DataShoppingCartContext);
  if (!context) {
    throw new Error(
      "UseDataCartContext must be used whitin a DataCartContextProvider"
    );
  }

  return context;
}
