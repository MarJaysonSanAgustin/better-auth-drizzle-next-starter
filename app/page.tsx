import { auth } from "@/app/lib/auth";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect("/signin")
  }

  const handleSignOut = async () => {
    "use server"
    await auth.api.signOut({
      headers: await headers()
    })
    redirect("/signin", RedirectType.replace)
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <form action={handleSignOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  )
}