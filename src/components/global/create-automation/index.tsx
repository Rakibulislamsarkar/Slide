'use client'

import { Button } from "@/components/ui/button";
import { AutomationDuoToneWhite } from "@/icons/automation-duotone-white";
import React, { useMemo } from "react";
import Loader from "../loader";
import { useCreateAutomation } from "@/hooks/use-automations";
import { v4 } from "uuid";

type Props = {};

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])


  console.log(mutationId)
  const {isPending, mutate} = useCreateAutomation(mutationId)



  return (
    <Button variant='outline' className="px-6 py-6 lg:px-8 lg:py-6 rounded-2xl border font-medium"
    onClick={() =>
      mutate({
        name: 'Untitled',
        id: mutationId,
        createdAt: new Date(),
        keywords: [],
      })
    }
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="hidden lg:inline-block ml-2">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
