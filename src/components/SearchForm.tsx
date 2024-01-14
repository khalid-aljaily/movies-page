import { useState } from "react";
import { Input } from "./ui/input";
import {
  SquarePen,
  CalendarClockIcon,
  ArchiveIcon,
  AlignCenterIcon,
  Home,
  DownloadIcon,
  Expand,
  X,
} from "lucide-react";
import books from "@/assets/—Pngtree—color three books overlay material_4491738.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { categories } from "./Catigories";
function SearchForm() {
  return (
    <div className="flex-[3]">
      <div className="flex justify-between">
        <h2 className="mb-2 font-bold text-xl">Request</h2>
        <MobileDropdown />
      </div>
      <div className="space-y-5 md:max-w-[90%]">
        <label className="relative block">
          Name of movie
          <Input
            placeholder="enter the name of the movie"
            className="pl-11 mt-2"
          />
          <SquarePen className="absolute top-1/2 left-3 text-blue-200 mt-1" />
        </label>
        <label className="relative block">
          Genre
          <Input
            placeholder="enter the genre of the movie"
            className="pl-11 mt-2"
          />
          <ArchiveIcon className="absolute top-1/2 left-3 text-blue-200 mt-1" />
        </label>
        <label className="relative block">
          Year of production
          <Input
            placeholder="enter the genre of the movie"
            className="pl-11 mt-2"
          />
          <CalendarClockIcon className="absolute top-1/2 left-3 text-blue-200 mt-1" />
        </label>
        <Button className="bg-blue-200 text-black hover:bg-blue-300 rounded-full min-w-44 ml-auto block">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={() => setIsOpen(!isOpen)}
    >
      <DropdownMenuTrigger className="outline-none ml-1 md:ml-3 lg:hidden">
        {isOpen ? <X /> : <AlignCenterIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent data-state="open" className ='m-5'>
        <div className=" lg:block w-[300px] py-5">
          <ul className="">
            <li
              className="px-5 flex gap-2 py-4 hover:bg-gray-800 cursor-pointer text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Home />
              Home
            </li>
            <li
              className="px-5 flex gap-2 py-4 hover:bg-gray-800 cursor-pointer text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <DownloadIcon />
              Downloaded
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="px-5 flex gap-2 border-b-0 border-blue-200 data-[state=open]:border-l-2 text-gray-200 data-[state=open]:text-white">
                    <Expand />
                    Explore
                  </AccordionTrigger>
                  <AccordionContent className="p-5 space-y-1">
                    {categories.map((catigory) => (
                      <a
                        className="flex gap-2 text-gray-300 hover:bg-gray-800 cursor-pointer py-3"
                        onClick={() => setIsOpen(!isOpen)}
                      >
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
