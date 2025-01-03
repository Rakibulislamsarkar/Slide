"use client";

import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import { Menu } from 'lucide-react';
import React from "react";
import Sheet from "../sheet";
import { Separator } from "@/components/ui/separator";
import { HelpDuoToneWhite } from "@/icons/help-duotone-white";
import UpgradeCard from "../sidebar/upgrade";
import { SubscriptionPlan } from "../subscription-plan";
import Items from "../sidebar/items";
import ClerkAuthState from "../clerk-auth-state";
import { LogoSmall } from "@/svgs/logo-small";
import CreateAutomation from "../create-automation";
import Search from "./search";
import { Notifications } from "./notification";
import MainBreadCrumb from "../bread-crumbs/main-bread-crumb";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  
  const showBreadcrumb = PAGE_BREAD_CRUMBS.includes(page) || page === slug;

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-3 justify-end">
        {/* Mobile Menu */}
        <span className="lg:hidden flex items-center flex-1">
          <Sheet trigger={<Menu />} className="lg:hidden" side="left">
            <div
              className="flex flex-col 
              gap-y-3
              w-full 
              h-full 
              p-3 
              bg-[#0e0e0e] 
              bg-opacity-90 
              bg-clip-padding 
              backdrop-filter 
              backdrop--blur__safari 
              backdrop-blur-3xl"
            >
              <div className="flex gap-x-2 items-center p-2 justify-center">
                <LogoSmall />
              </div>
              <div className="flex flex-col py-3">
                <Items page={page} slug={slug} />
              </div>
              <Separator orientation="horizontal" className="bg-[#333336]" />
              <div className="px-3 flex flex-col gap-y-3">
                <div className="flex gap-x-2">
                  <ClerkAuthState />
                  <p className="text-[#9B9CA0]">Profile</p>
                </div>
                <div className="flex gap-x-3">
                  <HelpDuoToneWhite />
                  <p className="text-[#9B9CA0]">Help</p>
                </div>
              </div>
              <SubscriptionPlan type="FREE">
                <div className="flex-1 flex flex-col justify-end">
                  <UpgradeCard />
                </div>
              </SubscriptionPlan>
            </div>
          </Sheet>
        </span>

        <Search />
        <CreateAutomation />
        <Notifications />
      </div>

      {showBreadcrumb && (
        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      )}
    </div>
  );
};

export default Navbar;

