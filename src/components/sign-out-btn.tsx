"use client"

import { signOut } from "next-auth/react"

import { Button } from "~/components/ui/button"

export default function SignOutButton() {
  return (
    <>
      <Button
        onClick={async () => {
          await signOut()
        }}
        className="max-w-max"
      >
        Sign out
      </Button>
    </>
  )
}
