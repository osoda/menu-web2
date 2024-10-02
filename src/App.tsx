import { useState } from 'react'
import './App.css'
import imgBanner from "./assets/banner.jpg";
import imgLogo from "./assets/logo.jpg";
import IconWhatsapp from "./assets/svg/IconWhatsapp.tsx";
import IconInstagram from "./assets/svg/IconInstagram.tsx";
import IconLocation from "./assets/svg/IconLocation.tsx";
import imgPizza from "./assets/pizza.jpg";
import imgPerroCaliente from "./assets/perroCaliente.webp";
import imgSalchipapa from "./assets/salchipapa.png";
import imgHamburguesa from "./assets/hamburguesa.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Dish} from "./components/gridMenu/Dish.tsx";


const dishes = [
  {
    title: "Pizza doble carne",
    description: "Pizza doble carne 300gr. Puedes elegir entre cerdo, pollo y res, acompañada con queso y salsa de su preferencia",
    price: 29900,
    image : imgPizza,
  },
  {
    title: "Perro caliente",
    description: "Perro caliente sencillo 150gr. Contiene salchicha ranchera, papa chongo salsa de tomate, mayonesa y cebolla",
    price: 9000,
    image : imgPerroCaliente,
  },
  {
    title: "Salchipapa",
    description: "Salchipapa 500gr para 2 personas de buen comer, acompañada de verduras y salsas especiales con 3 tipos de quesos incluyendo el costeño",
    price: 31000,
    image : imgSalchipapa,
  },
  {
    title: "Hamburguesa",
    description: "Hamburguesa 200gr. Contiene carne de res a la parrilla, junto con ensaladas y cebolla caramelizada. Aparte se entregan hasta 2 tipos de salsas ",
    price: 25000,
    image : imgHamburguesa,
  }
]



function App() {

  return (
    <>
      <div className='max-w-screen-lgm-auto'>
        <header className='flex flex-col gap-4 pb-5'>
          <img src={imgBanner} alt="Image" className="rounded-md object-cover h-32 sm:h-64"></img>
          <div className='flex flex-row gap-4 '>
              <Avatar className='h-32 w-32 object-cover mr-3'>
                <AvatarImage src={imgLogo} />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className='flex flex-col items-start gap-1'>
                <p className='item text-3xl font-bold'> Título Restaurante </p>
                <p className='text-muted-foreground font-medium'>Descripción resumida del restaurante con el slogan o los detalles mas importantes</p>
                <div className='flex gap-2'>
                  
                  <div className='flex justify-center items-center bg-rose-500 rounded-full text-white h-14 w-14'>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><IconWhatsapp/></a>
                  </div>
                  <div className='flex justify-center items-center bg-rose-500 rounded-full text-white h-14 w-14'>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><IconInstagram/></a>
                  </div>
                  <div className='flex p-3 text-rose-500 font-bold self-center'><IconLocation/> <a href="https://maps.app.goo.gl/B5Cx7kwUd5bTHCb3A" target="_blank" rel="noopener noreferrer" className='text-center'> Cl 72 #46-8</a></div>
                </div>
              </div>
          </div>
        </header>
        <main>;
          <div className="grid grid-cols-3 border-t pt-3 gap-3">
            {
            dishes.map((dishData) =>
              <Dish dishData={dishData} /> 
            )
            }
          </div>
        </main>

        <footer>
          <div className="flex justify-center  border-t py-2 mt-3">
            <div className="text-sm text-muted-foreground">Copyright © 2024 </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
