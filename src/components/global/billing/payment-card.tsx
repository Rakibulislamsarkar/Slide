'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PLANS } from "@/constants/pages"
import { cn } from "@/lib/utils"
import { Check, Sparkles } from 'lucide-react'
import { motion } from "framer-motion"


interface PaymentCardProps {
  label: 'PRO' | 'FREE'
  current: 'PRO' | 'FREE'
  landing?: boolean
  onSelect?: () => void
}

export default function PaymentCard({ 
  current, 
  label, 
  landing,
  onSelect 
}: PaymentCardProps) {
  const isPro = label === 'PRO'
  const isCurrent = label === current
  const planFeatures = PLANS[isPro ? 1 : 0].features

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative group rounded-2xl p-[2px] overflow-hidden",
        !isCurrent && "opacity-90 hover:opacity-100",
        isPro ? "bg-gradient-to-br from-primary via-purple-500 to-pink-500" : "bg-muted"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

      <Card className={cn(
        "relative h-full rounded-2xl border-0",
        "bg-gradient-to-b from-background/95 to-background",
        landing && "bg-gradient-to-br from-background/80 to-background/95"
      )}>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className={cn(
                "text-2xl font-bold tracking-tight",
                isPro && "bg-gradient-to-br from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              )}>
                {landing ? (
                  isPro ? 'Premium Plan' : 'Standard'
                ) : (
                  isCurrent ? 'Your Current Plan' : current === 'PRO' ? 'Downgrade' : 'Upgrade'
                )}
              </h2>
              {isPro && (
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              This is what your plan covers for automations and AI features
            </p>
          </div>

          <div className="space-y-2">
            <div className={cn(
              "text-4xl font-bold",
              isPro && "bg-gradient-to-br from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
            )}>
              {isPro ? '$99' : 'Free'}
              {isPro && <span className="text-lg text-muted-foreground ml-1">/month</span>}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {isPro ? 'Smart AI' : 'Standard'}
            </p>
          </div>

          <ul className="space-y-3">
            {planFeatures.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-x-3 text-sm text-muted-foreground"
              >
                <Check className={cn(
                  "h-4 w-4 shrink-0",
                  isPro ? "text-primary" : "text-muted-foreground"
                )} />
                {feature}
              </motion.li>
            ))}
          </ul>

          <Button
            onClick={onSelect}
            disabled={!landing && isCurrent}
            className={cn(
              "w-full rounded-full font-medium transition-all duration-200",
              isPro && landing && "bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-primary-foreground hover:opacity-90",
              !isPro && "bg-primary/10 text-primary hover:bg-primary/20",
              "shadow-lg hover:shadow-xl active:scale-95"
            )}
          >
            {landing ? (
              isCurrent ? 'Get Started' : current === 'PRO' ? 'Free' : 'Get Started'
            ) : (
              isCurrent ? 'Active' : current === 'PRO' ? 'Downgrade' : 'Upgrade'
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

