import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Money from "@/utils/format.ts";
import img from "@/assets/imgs";
import { useDataCartContext } from "@/context/useCartContext";
import IDish from "@/types/IDish";

function Dish({ dishData }: { dishData: IDish }, key: number) {
  const image: string = img[dishData.image];
  const { setContextDataCart } = useDataCartContext();

  return (
    <Card
      className="w-full max-w-md md:max-w-lg lg:max-w-xl"
      key={key}
      onClick={() => setContextDataCart(() => ({ isOpen: true, dishData }))}
    >
      <div className="grid grid-cols-2 gap-6 text-left">
        <div className="flex flex-col justify-between gap-4 p-4">
          <div>
            <CardTitle className="text-lg pb-1">{dishData.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-4">
              {dishData.description}
            </CardDescription>
          </div>
          <div className="flex justify-end text-rose-500 font-semibold">
            <p>{Money.format(dishData.price)}</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg aspect-square m-4  self-center">
          <img
            src={image}
            alt={dishData.title}
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </Card>
  );
}

export { Dish, type IDish };
