import { Button } from "@/components/ui/button";
import IconShoppingCart from "@/assets/imgs/svg/IconShoppingCart";
import { useDataShoppingCartContext } from "@/context/useCartContext";
import Money from "@/utils/format.ts";

export function ShoppingCart() {
  const { contextDataShoppingCart } = useDataShoppingCartContext();

  return (
    <div
      className={`fixed inset-x-0 bottom-2 ${
        contextDataShoppingCart.isOpen ? "" : "hidden"
      }`}
    >
      <Button className="bg-green-600">
        Ver pedido
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {`${contextDataShoppingCart.items?.length} producto`}
        </span>
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-rose-500 ring-1 ring-inset ring-pink-700/10">
          {Money.format(
            contextDataShoppingCart.items?.reduce(
              (a, e) => a + Number(e.price) * Number(e.qty),
              0
            ) ?? 0
          )}
        </span>
        <IconShoppingCart />
      </Button>
    </div>
  );
}
