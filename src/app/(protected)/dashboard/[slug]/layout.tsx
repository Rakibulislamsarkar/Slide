import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import { PrefetchUserAutnomations, PrefetchUserProfile } from '@/react-query/prefetch';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout =  async({ children, params }: Props) => {
  // Query Client
  const query = new QueryClient()
  await PrefetchUserProfile(query)
  await PrefetchUserAutnomations(query)







  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug} />
      {/* Navbar */}
      <div
        className="
      lg:ml-[250px] 
      lg:pl-5 
      lg:py-2 
      flex 
      flex-col 
      overflow-auto"
      >
        <Navbar slug={params.slug}/>
        {children}
      </div>
    </div>   
    </HydrationBoundary>
   
  );
};

export default Layout;
