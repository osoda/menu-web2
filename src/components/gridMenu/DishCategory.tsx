import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react";
import { slugify } from "@/utils/slugify.ts";
import '@/wdyr'

type IDisCategory = {
    category : string,
    children : React.ReactNode
}


const DishCategory : React.FC<IDisCategory> = ({category, children})=>{
    return (
            <AccordionItem value={slugify(category)}>
                <AccordionTrigger className="font-bold text-lg">{category}</AccordionTrigger>
                <AccordionContent>
                    <div className='grid grid-cols-3 border-t pt-3 gap-3'>
                    {children}
                    </div>
                </AccordionContent>
            </AccordionItem>
    )
}

DishCategory.whyDidYouRender = true

export default DishCategory;