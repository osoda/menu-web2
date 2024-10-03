import { useEffect, useState } from 'react'
import './App.css'
import IconWhatsapp from "./assets/imgs/svg/IconWhatsapp.tsx";
import IconInstagram from "./assets/imgs/svg/IconInstagram.tsx";
import IconLocation from "./assets/imgs/svg/IconLocation.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Dish, type IDish} from "./components/gridMenu/Dish.tsx";
import img from "./assets/imgs"

function App() {
  const [dishes, setDishes] = useState <Array<IDish>>([]);

  useEffect(()=>{
    fetch('./data/dishes.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setDishes(myJson)
    });
  },[])

  return (
    <>
      <div className='max-w-screen-lgm-auto'>
        <header className='flex flex-col gap-4 pb-5'>
          <img src={img.Banner} alt="Image" className="rounded-md object-cover h-32 sm:h-64"></img>
          <div className='flex flex-row gap-4 '>
              <Avatar className='h-32 w-32 object-cover mr-3'>
                <AvatarImage src={img.Logo} />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className='flex flex-col items-start gap-1'>
                <p className='item text-3xl font-bold'> La plaza restaurant </p>
                <p className='text-muted-foreground font-medium'>Pida, pruebe y repita las delicias de la plaza donde les ofrecemos las comidas más rapidas y sabrosas de la ciudad.</p>
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
              dishes.map((dishData,k) => <Dish dishData={dishData} key={k}/>)
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
