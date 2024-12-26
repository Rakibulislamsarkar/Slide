import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  page: string
  slug: string
}

const Items = ({ page, slug }: Props) => {
  return SIDEBAR_MENU.map((item) => (
    <Link
      key={item.id}
      href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`}
      className={cn(
        'capitalize flex gap-x-2 rounded-xl p-2',
        page === item.label && 'bg-neutral-800',
        page === slug && item.label === 'home'
          ? 'bg-[#0f0f0f]'
          : 'text-white'
      )}
    >
      {item.icon}
      {item.label}
    </Link>
  ))
}

export default Items