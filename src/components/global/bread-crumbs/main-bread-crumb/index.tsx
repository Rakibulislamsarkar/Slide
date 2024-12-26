import { PAGE_ICON } from '@/constants/pages'
import React from 'react'

type Props = {
  page: string
  slug?: string
}

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === 'Home' && (
        <div className="flex justify-start w-full">
          <div className="w-auto py-5 flex flex-col md:flex-row  md:gap-4 items-start md:items-center">
            <p className="text-text-secondary text-lg">Welcome back</p>
            <h2 className="capitalize text-3xl font-medium">{slug}!</h2>
          </div>
        </div>
      )}
      <span className="inline-flex py-5 lg:py-5 pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-base capitalize">{page}</h2>
      </span>
    </div>
  )
}

export default MainBreadCrumb