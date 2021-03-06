import { FormEvent, useState } from "react";

import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "../components/WidgetForm";
import { ToogleTheme } from "./ToggleTheme";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toogleWidgetVisibility = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  const handleClick = (e: FormEvent): any => {
    //if(!isWidgetOpen) alert(1);
    toogleWidgetVisibility();
  };

  /* const handleEnterSpacekey = (e:KeyboardEvent):any =>{
        e?.preventDefault();
        console.log(e?.code , isWidgetOpen);
        if( ( e?.code == "Enter" || e?.code == "Space" || e?.code == "NumpadEnter")) {
            if(!isWidgetOpen) alert(1);
            toogleWidgetVisibility();
        }
        
    } */

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end justify-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <ToogleTheme show={!isWidgetOpen} />

      <Popover.Button
        onClick={handleClick}
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
