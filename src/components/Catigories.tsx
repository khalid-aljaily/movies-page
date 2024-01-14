import { Home, DownloadIcon, Expand } from "lucide-react";
import books from "@/assets/—Pngtree—color three books overlay material_4491738.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
export const categories = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Animation",
  "Documentary",
  "Family",
  "Historical",
  "Musical",
  "Western",
  "Crime",
];
function Catigories() {
  return (
    <div className="hidden lg:block flex-1 bg-white/5 border-r border-r-white/10 ">
      <ul className="mt-[40px]">
        <li className="px-5 flex gap-2 py-4 hover:bg-gray-800 cursor-pointer text-gray-200">
          <Home />
          Home
        </li>
        <li className="px-5 flex gap-2 py-4 hover:bg-gray-800 cursor-pointer text-gray-200">
          <DownloadIcon />
          Downloaded
        </li>
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="px-5 flex gap-2 border-b-0 text-gray-200 data-[state=open]:text-white">
                <Expand />
                Explore
              </AccordionTrigger>
              <AccordionContent className="p-5 space-y-1">
                {categories.map((catigory) => (
                  <a className="flex gap-2 text-gray-300 hover:bg-gray-800 cursor-pointer py-3">
                    <DownloadIcon className="h-4" />
                    {catigory}
                  </a>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      </ul>
      <div className="text-center bg-blue-300/10 mx-3 rounded-lg p-5 mt-40">
        <img src={books} alt="books" className="block -mt-28 " />
        <p className="-mt-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          veritatis.
        </p>
        <Button className="w-full bg-blue-200 hover:bg-blue-300 text-black rounded-full">
          Update
        </Button>
      </div>
    </div>
  );
}

export default Catigories;
