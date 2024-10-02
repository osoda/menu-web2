import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import  Money from "@/utils/format.ts";
  

declare interface IDish {
    title: string,
    description: string,
    price: number,
    image : string,
}

function Dish({dishData} : {dishData : IDish}){
    return (
        <Card className="w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div className="flex flex-col justify-between gap-4 p-4">
                  <div>
                    <CardTitle className="text-lg pb-1">{dishData.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                    {dishData.description}
                    </CardDescription>
                  </div>
                  <div className="flex justify-end text-rose-500 font-semibold">
                    <h1 variant="outline">{Money.format(dishData.price)}</h1>
                  </div>
                </div>  
                <div className="relative overflow-hidden rounded-lg aspect-square m-4  self-center">
                  <img
                    src={dishData.image}
                    alt={dishData.title}
                    className="object-cover w-full h-full"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
              </div>
            </Card>
    )
}



export {Dish, type IDish};