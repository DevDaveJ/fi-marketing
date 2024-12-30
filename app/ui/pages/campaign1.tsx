
import CampaignForm1 from "../mr-campaign-form-1";
import { ubuntu, dmSerifDisplay } from "../fonts";

export default function Campaign1() {
   return (
      <main>
         <div className="flex flex-col">
				<div className="w-screen display-none md:block md:h-[10dvh] bg-black dark:invert" />
            <div className="flex flex-col md:flex-row">
               <div className="w-screen md:w-7/10 md:h-[80dvh] flex flex-col">
                  <div className="h-mobileW md:h-1/2 w-full bg-logo-light flex justify-center items-end">
                     <div
                        className={`${ubuntu.className} mb-3 text-7xl lowercase text-logo-dark`}
                     >
                        fluência
                     </div>
                  </div>
                  <div className="h-mobileW md:h-1/2 w-full bg-logo-dark flex justify-center">
                     <div
                        className={`${dmSerifDisplay.className} mt-3 text-7xl uppercase text-logo-light`}
                     >
                        inglesa
                     </div>
                  </div>
               </div>
               <div className="md:w-3/10 min-[h-mobileW] md:h-full my-auto">
                  <CampaignForm1 />
               </div>
            </div>
				<div className="w-screen display-none md:block md:h-[10dvh] bg-black dark:invert" />
         </div>
      </main>
   );
}
