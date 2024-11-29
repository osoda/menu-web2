import { useEffect, useState, useRef } from "react";

import "./App.css";
import IconWhatsapp from "./assets/imgs/svg/IconWhatsapp.tsx";
import IconInstagram from "./assets/imgs/svg/IconInstagram.tsx";
import IconLocation from "./assets/imgs/svg/IconLocation.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dish, type IDish } from "./components/gridMenu/Dish.tsx";
import DishCategory from "./components/gridMenu/DishCategory.tsx";
import { ShoppingCart } from "./components/ShoppingCart";
import img from "./assets/imgs";
import { slugify } from "@/utils/slugify.ts";
import { Accordion } from "@/components/ui/accordion";
import {
  DataCartContextProvider,
  DataShoppingCartContextProvider,
} from "@/context/cartContext";
import { Cart } from "@/components/Cart";

import "./wdyr";

function GridMenu(dishes: Array<IDish>) {
  const x: Array<string> = [];
  const [accordionValue, setAccordionValue] = useState(x);
  const flagIsOpenFirstTime = useRef(false);
  const allCategory: Array<string> = [];

  useEffect(() => {
    console.log("use Efect");
    if (
      !flagIsOpenFirstTime.current &&
      accordionValue.length < allCategory.length
    ) {
      console.log("use effect 11");
      setAccordionValue(allCategory);
      flagIsOpenFirstTime.current = !flagIsOpenFirstTime.current;
    }
  });

  let category: string = "";
  let itemsCategory: JSX.Element | undefined;
  let jsxVal: JSX.Element | undefined;

  dishes.forEach((dishData, k) => {
    if (category !== dishData.category) {
      console.log({ category, k, l: dishes.length });
      if (category !== "") {
        jsxVal = (
          <>
            {" "}
            {jsxVal}
            <DishCategory category={category}>{itemsCategory}</DishCategory>
          </>
        );
      }

      itemsCategory = undefined;
      category = dishData.category;
      allCategory.push(slugify(category));
    }

    itemsCategory = (
      <>
        {itemsCategory} <Dish dishData={dishData} key={k} />
      </>
    );

    if (dishes.length === k + 1) {
      category = dishData.category;
      jsxVal = (
        <>
          {" "}
          {jsxVal}
          <DishCategory category={category}>{itemsCategory}</DishCategory>
        </>
      );
    }
  });

  return (
    <DataCartContextProvider>
      <Accordion
        type="multiple"
        value={accordionValue}
        onValueChange={setAccordionValue}
      >
        {jsxVal}
      </Accordion>
      <Cart></Cart>
    </DataCartContextProvider>
  );
}

function App() {
  const [dishes, setDishes] = useState<Array<IDish>>([]);

  useEffect(() => {
    fetch("./data/dishes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDishes(myJson);
      });
  }, []);

  console.log("App Render");

  return (
    <>
      <DataShoppingCartContextProvider>
        <div className="max-w-screen-lgm-auto relative">
          <header className="flex flex-col gap-4 pb-5">
            <img
              src={img.Banner}
              alt="Image"
              className="rounded-md object-cover h-32 sm:h-64"
            ></img>
            <div className="flex flex-row gap-4 ">
              <Avatar className="h-32 w-32 object-cover mr-3">
                <AvatarImage src={img.Logo} />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-1">
                <p className="item text-3xl font-bold"> La plaza restaurant </p>
                <p className="text-muted-foreground font-medium">
                  Pida, pruebe y repita las delicias de la plaza donde les
                  ofrecemos las comidas más rapidas y sabrosas de la ciudad.
                </p>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center bg-rose-500 rounded-full text-white h-14 w-14">
                    <a
                      href="https://whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconWhatsapp />
                    </a>
                  </div>
                  <div className="flex justify-center items-center bg-rose-500 rounded-full text-white h-14 w-14">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconInstagram />
                    </a>
                  </div>
                  <div className="flex p-3 text-rose-500 font-bold self-center">
                    <IconLocation />{" "}
                    <a
                      href="https://maps.app.goo.gl/B5Cx7kwUd5bTHCb3A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      {" "}
                      Cl 72 #46-8
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main>
            ;<div className="flex flex-col border-t">{GridMenu(dishes)}</div>
          </main>

          <footer>
            <div className="flex justify-center  border-t py-2 mt-3">
              <div className="text-sm text-muted-foreground">
                Copyright © 2024{" "}
              </div>
            </div>
          </footer>

          <ShoppingCart></ShoppingCart>
        </div>
      </DataShoppingCartContextProvider>
    </>
  );
}
App.whyDidYouRender = true;

export default App;
