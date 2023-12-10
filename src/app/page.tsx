import { redirect } from "next/navigation"
import { getServerAuthSession } from "~/server/auth"

import SignOutButton from "../components/sign-out-btn"

export default async function Home() {
  const session = await getServerAuthSession()

  if (!session?.user) {
    redirect("/api/auth/signin")
  }

  return (
    <main className="container flex h-screen flex-col items-center justify-center">
      <div className="text-foregrounds mb-10 bg-background text-center text-xl font-medium">
        Hello there! {session?.user?.name}
      </div>
      <SignOutButton />
    </main>
  )
}
