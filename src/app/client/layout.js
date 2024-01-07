'use client';
import NavBar from "@/components/client/Navbar";
import {SessionProvider} from "next-auth/react";
export default function ClientLayout({ children,session }) {
return (
<>
<SessionProvider session={session}>
<NavBarar/>
{children}
</SessionProvider>
</>
)
}