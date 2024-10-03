/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { openAI } from "@/utils/open-ai";
import { Loader } from "lucide-react";

import React, { useState } from "react";

interface DrawerProps {
  description: string | null;
}

const DrawerAi = ({ description }: DrawerProps) => {
  const [open, setOpen] = useState(false);
  const [wizerdSuggestions, setWizerdSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWizerdSuggestion = async () => {
    setIsLoading(true);
    try {
      const response = (await openAI(description!)) as string;
      setWizerdSuggestions(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("wizerd suggestion", wizerdSuggestions);
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="flex float-right border border-1 py-2 px-4 rounded hover:opacity80"  onClick={handleWizerdSuggestion}>         
            Ask Your Wizard 🧙🏼‍♂️
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              🧙🏼‍♂️ Oyyy! Wizerd here! am helping you with your wizarly
              storytelling or resume writing ✨
            </DrawerTitle>
            {isLoading ? (<Loader className="flex mx-auto justify-center animate-spin" /> )
            : (
              <DrawerDescription className="whitespace-pre-wrap">
                {wizerdSuggestions.length > 0  && <p>{wizerdSuggestions}</p>}
              </DrawerDescription>
            )}
           
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerAi;
