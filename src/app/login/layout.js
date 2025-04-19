'use client'

import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"

export default function Layout({children}){

    const pathName= usePathname();
    return (
        <div>
            
            {
               pathName !== '/login/loginteacher' ?

                <ul className="login-menu"><br /><br />
                <ul><li><h3>Login Navbar</h3></li></ul>
                    <li>
                        <Link href="/login">Login Main</Link>
                    </li><br /><br />
                    <li>
                        <Link href="/login/loginstudent">  Student Login </Link>
                    </li><br /><br />
                    <li>
                        <Link href="/login/loginteacher">  Teacher Login </Link>
                    </li><br /><br />
                </ul>
                : <Link href="/login">Go To Main Login Page</Link>
            }
            {children}
        </div>
    )
}