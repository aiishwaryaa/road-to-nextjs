'use client'

import Link from "next/link"
import styles from './page.module.css'
import{useRouter} from 'next/navigation'
import Image from "next/image"
import Profile from '../../public/img1.jpg'

export default function Home(){
  const router = useRouter()//hook hai 
  const navigate = (name)=>{
    router.push(name)//bar bar push na use kr ke yeh function bnaya hai
  }
  return (
    <main className={styles.main}>
    <h1>Home page</h1><br />
    <Image src={Profile} />
    <br /><br />
    <Image src='https://i.pinimg.com/736x/ab/98/71/ab987122fd4f0e67467202781d96e318.jpg' width={300} height={300}/>
    <br /><br />
    <Link href='/login'>Go to Login Page</Link><br /><br />
    <Link href='/about'>Go to About Page</Link>
<br /><br />
<button className={styles.button} onClick={()=>navigate('/login')}>Go to Login page</button><br /><br />
<button className={styles.button} onClick={()=>navigate('/about')}>Go to About page</button><br /><br />
<button className={styles.button} onClick={()=>navigate('/productlist(clientside)')}>Go to ProductList page client side</button><br /><br />
<button className={styles.button} onClick={()=>navigate('/productlist(serverside)')}>Go to ProductList page server side</button><br />
   



    </main>
  )
} 