'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from '../page.module.css'


const Login =()=>{
    const router = useRouter();
  const  navigate=(page)=>{
     router.push("/login/"+page)
    }
    return(
        <div className="login-div" >
            <h1 className="heading">Login</h1>
            <br />
            <Link href="/">Go to Home Page </Link>
            <br /><br />
            <button className={styles.button} onClick={() => navigate("loginstudent")} >Go to login student Page</button>
            <br /><br />
            <button className={styles.button} onClick={() => navigate("loginstudent")} >Go to login teacher Page</button>
        </div>
    )
}
export default Login;