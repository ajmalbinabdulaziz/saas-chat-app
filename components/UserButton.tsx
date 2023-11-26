"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "inspector"
import { signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"
  

export default function UserButton({ session }: {session: Session | null })  {
    console.log(session)
    if (!session)
        return (
            <Button variant={"outline"} onClick={()=>signIn()} >
                Sign In
            </Button>
        )

    return (
        session && ( 
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name={session?.user?.name} 
                // image="https://github.com/shadcn.png"
                image={session?.user?.image}
                 />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
           
                <DropdownMenuItem onClick={()=> signOut()}>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        )
    )
}