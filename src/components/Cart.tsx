import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  useDataCartContext,
  useDataShoppingCartContext,
} from "@/context/useCartContext";
import img from "@/assets/imgs";
import IconShoppingCart from "@/assets/imgs/svg/IconShoppingCart";
import Money from "@/utils/format.ts";
import { useEffect, useState } from "react";
import IDish from "@/types/IDish";

declare interface IQty {
  [k: string]: number;
}

export function Cart() {
  console.log("Render Cart");
  const { contextDataCart, setContextDataCart } = useDataCartContext();
  const { setContextDataShoppingCart } = useDataShoppingCartContext();
  const [qty, setQTY] = useState({} as IQty);

  const { title, description, price, image } = (contextDataCart.dishData ?? {
    title: "",
    description: "",
    price: 0,
    image: "",
  }) as IDish;

  useEffect(() => {
    console.log({ "Use Effect Cart": 11 });
    if (contextDataCart.isOpen)
      setQTY((p) => {
        p[title] = p[title] ?? 1;
        return p;
      });
  }, [contextDataCart.isOpen, title]); // TODO: check this eslint warning in: https://stackoverflow.com/a/60327893
  // const image: string = img[image as string];
  return (
    <Sheet
      open={contextDataCart.isOpen}
      onOpenChange={(o) => {
        setContextDataCart({ isOpen: o });
      }}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="relative overflow-hidden rounded-lg aspect-square m-1  self-center">
          <img
            src={img[image]}
            alt={title}
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-sm">{description}</p>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="name" className="text-left">
              Cantidad
            </Label>
            <Input
              id="name"
              type="number"
              value={qty[title] ?? 1}
              className="col-span-1"
              step={1}
              onChange={(e) => {
                setQTY({
                  ...qty,
                  [title]: Number(e.target.value),
                });
              }}
            />
            <Label htmlFor="name" className="">
              <label className="text-muted-foreground">
                {" "}
                * {Money.format(price as number)}
              </label>
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Total:
            </Label>
            <Label htmlFor="username" className="text-left text-rose-400">
              {Money.format((price as number) * (qty[title] ?? 1))}
            </Label>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="button"
              className="bg-green-600"
              onClick={() => {
                setContextDataShoppingCart((p) => ({
                  isOpen: !!(p.items.length + (qty[title] ?? 1)),
                  items: (() => {
                    const idxItem = p.items.findIndex((e) => e.title === title);

                    if (-1 === idxItem) {
                      p.items.push({
                        title,
                        price,
                        image,
                        qty: qty[title],
                      });
                      console.log(p);
                      return p.items;
                    }

                    p.items[Number(idxItem)].qty = qty[title];

                    return p.items;
                  })(),
                }));
                setContextDataCart((p) => ({ isOpen: !p.isOpen }));
              }}
            >
              Añadir
              <IconShoppingCart />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
