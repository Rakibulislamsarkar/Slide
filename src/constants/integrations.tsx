import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description:
      'Connect your Instagram account to unlock seamless automation for DMs and comments.',
    icon: <InstagramDuoToneBlue />,
    strategy: 'INSTAGRAM',
    
  },
  {
    title: 'Connect Salesforce',
    description:
      'Connect your Salesforce account to streamline workflows and sync customer data effortlessly.',
    icon: <SalesForceDuoToneBlue />,
    strategy: 'CRM',
  },
]