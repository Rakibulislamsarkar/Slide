"use client";
// import { onOAuthInstagram } from '@/actions/integrations'
// import { onUserInfo } from '@/actions/user'
import { Button } from "@/components/ui/button";
// import { useQuery } from '@tanstack/react-query'
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  //   const onInstaOAuth = () => onOAuthInstagram(strategy)

  //   const { data } = useQuery({
  //     queryKey: ['user-profile'],
  //     queryFn: onUserInfo,
  //   })

  //   const integrated = data?.data?.integrations.find(
  //     (integration) => integration.name === strategy
  //   )

  return (
    <div className="border rounded-xl p-5 flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 items-start justify-between">
      <div className="flex flex-col flex-1  text-left">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-[#9D9D9D] text-sm mt-2">{description}</p>
      </div>
      <Button variant="secondary"
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className="text-sm font-medium mt-4 md:mt-0"
      >
        {/* {integrated ? 'Connected' : 'Connect'} */}
        Connect
      </Button>
    </div>
  );
};

export default IntegrationCard;
