"use client";

import { FormEvent } from "react";
import Checkbox from "./checkbox"; // Adjust the import path as necessary
import { Button } from "./button";
import clsx from "clsx";

const cbTextOptions = {
   op1: "gerenciar os financeiros para você receber pagamentos automaticamente?",
   op2: "achar novos alunos para você sem tantos esforços da sua parte no média social?",
   op3: "fornecer um fonte único de recursos de material didático?",
   op4: "anunciar seus serviços e preços?",
   opLast: "Outra coisa?",
};
export default function CampaignForm1() {
   const handleCheckboxChange = (checked: boolean) => {
      console.log({ checked });
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      // You can now send `data` to your server or process it as needed
   };

   const buttonCss =
      "dark:bg-logo-light dark:text-logo-dark dark:hover:bg-secondary " +
      "bg-primary text-logo-light hover:bg-logo-dark";

   return (
      <div className="text-md px-8">
         <p className="text-3xl my-5 text-center">
            Você é professor particular de inglês?
         </p>
         <p>
            O que você gostaria de ver num sistema tecnológico projetado para
            profissionais como você? Gostaria de ver um sistema que:
         </p>
         <div />
         <form onSubmit={handleSubmit} className="space-y-3 px-4 mt-4">
            <Checkbox
               label={cbTextOptions.op1}
               name="checkbox1"
               onChange={handleCheckboxChange}
            />
            <Checkbox label={cbTextOptions.op2} name="checkbox2" />
            <Checkbox label={cbTextOptions.op4} name="checkbox2" />
            <Checkbox label={cbTextOptions.opLast} name="checkbox3" />
            <div>
               <input
                  type="text"
                  id="textbox"
                  name="textbox"
                  placeholder="Entrar mais informações"
                  className="w-11/12 block border-2 ml-9 py-1 border-gray-200 text-sm outline-2 placeholder:text-gray-500"
               />
            </div>
            <div className="flex flex-col justify-content align-middle text-center pt-6 pb-4">
               <div className="py-1 font-bold text-xl bold">
                  Participe agora e faça seu voto!
               </div>
               <Button className={clsx(buttonCss, "font-bold text-2xl w-1/2 mx-auto")} type="submit">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a href="/api/auth/login">Enviar</a>
               </Button>
            </div>
         </form>
      </div>
   );
}
