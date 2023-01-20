import Link from "next/link";
import { Header } from "src/components";
import { Footer } from "src/components";
import menu from "public/menu-icon.ico";
import Image from "next/image";
import { useRouter } from "next/router";
import { magic } from "lib/magic-client";
import { useEffect, useState } from "react";
import { Spinner } from "src/components/index";

export default function Settings() {
    const [auth, setAuth] = useState<string | boolean>("loading")

    const router = useRouter();
    const handleLogout = async () => {
        try {
            const logout = await magic.user.logout();
            if (logout) {
                router.push("/")
            }
        } catch (error) {
            console.log("Error")
        }
    }
    useEffect(() => {
        const handleLoggedIn = async () => {
            const isLoggedIn = await magic.user.isLoggedIn();
            if (!isLoggedIn) {
                router.push("/")
                setAuth(false)
            }
            else {
                setAuth(true)
            }
        }
        handleLoggedIn();
    })
    let Spinning = (<Spinner />)
    let setingsPage = (
        <div className="">
            <Header />
            <div className="min-h-screen w-screen flex">
                <div className="center sm:m-0 absolute top-2/4 sm:left-1/4 left-2/4">
                    <ul className="text-sky-700 text-xl underline">
                        <li className="py-2 flex tracking-wider "><Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={menu} alt={""}></Image><Link href={""}>Add payment</Link></li>
                        <li className="py-2 flex tracking-wider "><Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={menu} alt={""}></Image><Link href={""}>Manage Subscription</Link></li>
                        <li className="py-2 flex tracking-wider "><Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={menu} alt={""}></Image><Link href={""}>Change Email</Link></li>
                        <li className="py-2 flex tracking-wider " onClick={handleLogout}><Image width={6} height={6} className="w-6 h-6 mr-2 rounded-full" src={menu} alt={""}></Image><Link href={""}>Logout</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )

    return auth === 'loading' ? Spinning : auth ? setingsPage : Spinning;


};