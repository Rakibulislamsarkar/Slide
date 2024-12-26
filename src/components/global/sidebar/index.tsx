"use client";

import { usePaths } from "@/hooks/use-nav";
import { LogoSmall } from "@/svgs/logo-small";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Items from "./items";
import { HelpDuoToneWhite } from "@/icons";
import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "./upgrade";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div
      className="w-[250px] 
    radial 
    fixed 
    left-0 
    lg:inline-block
    bg-gradient-to-b from-[#0e1119] 
    via-[#0c0c0c]
     to-[#030611] 
     hidden 
     bottom-0 
     top-0 
     m-2
     rounded-lg
     overflow-hidden"
    >
      <div
        className="flex flex-col w-full h-full p-4 
         bg-opacity-90 
        bg-clip-padding backdrop-filter 
        backdrop-blur-3xl"
      >
        <div className="flex items-center py-4">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3 text-sm">
          <Items page={page} slug={slug} />
        </div>
        <div className="my-4">
          <Separator orientation="horizontal" className="bg-[#333336]" />
        </div>
        <div className="px-4 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3 text-sm">
            <ClerkAuthState />
            <p>Profile</p>
          </div>
          <div className="flex items-center gap-x-3 text-sm">
            <HelpDuoToneWhite />
            <p>Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
