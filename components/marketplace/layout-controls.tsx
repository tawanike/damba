"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PanelLeft, BotMessageSquare, Bell, ShoppingCart, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function MarketplaceHeader({ onToggleLeft, onToggleRight }: { onToggleLeft: () => void, onToggleRight: () => void }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-full flex h-14 items-center gap-3 px-4">
        <button onClick={onToggleLeft} className="p-2 rounded-md hover:bg-accent" aria-label="Toggle filters">
          <PanelLeft className="size-5" />
        </button>
        <div className="font-bold">Commace</div>
        <nav className="ml-6 hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/products" className="hover:text-foreground">Products</Link>
          <Link href="/protected" className="hover:text-foreground">Account</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-accent" aria-label="Notifications">
            <Bell className="size-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-accent" aria-label="Cart">
            <ShoppingCart className="size-5" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                User <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/signin">Sign in</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={onToggleRight} className="p-2 rounded-md hover:bg-accent" aria-label="Toggle AI assistant">
            <BotMessageSquare className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export function ThreeColumnShell({ left, center, right }: { left: React.ReactNode, center: React.ReactNode, right: React.ReactNode }) {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <MarketplaceHeader onToggleLeft={() => setLeftOpen(v => !v)} onToggleRight={() => setRightOpen(v => !v)} />

      <div className="flex-1 w-full max-w-full mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row w-full max-w-full gap-4">
          {/* Left sidebar: full-width on small, fixed 220px on md+ */}
          <aside className={`${leftOpen ? 'block' : 'hidden'} shrink-0 w-full md:w-[220px]`}>{left}</aside>
          {/* Center: flex grows to fill */}
          <main className="flex-1 min-w-0 order-none">{center}</main>
          {/* Right sidebar: full-width on small, fixed 360px on md+ */}
          <aside className={`${rightOpen ? 'block' : 'hidden'} shrink-0 w-full md:w-[360px]`}>{right}</aside>
        </div>
      </div>
    </div>
  )
}
