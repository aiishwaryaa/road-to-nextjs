'use client'

import Link from "next/link"
import styles from './page.module.css'
import{useRouter} from 'next/navigation'

export default function Home(){
  const router = useRouter()//hook hai 
  const navigate = (name)=>{
    router.push(name)//bar bar push na use kr ke yeh function bnaya hai
  }
  return (
    <main className={styles.main}>
    <h1>Home page</h1>
    <Link href='/login'>Go to Login Page</Link>
    <Link href='/about'>Go to About Page</Link>
<br /><br />
<button className={styles.button} onClick={()=>navigate('/login')}>Go to Login page</button>
<button className={styles.button} onClick={()=>navigate('/about')}>Go to About page</button>

    </main>
  )
}