export type TabStatusType = 'all' | 'ecommerce' | 'landing' | 'react'

export const tabsItems: Array<{ status: TabStatusType; title: string }> = [
  {
    status: 'all',
    title: 'all',
  },
  {
    status: 'landing',
    title: 'landing',
  },
  {
    status: 'react',
    title: 'react',
  },
  {
    status: 'ecommerce',
    title: 'ecommerce',
  },
]
