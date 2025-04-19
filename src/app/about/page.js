//linking and routing

import Link from "next/link";

const About =()=>{
    return (
        <div>
            <h1> About Page</h1>
            <br />
            <Link href="/">Go to Home Page </Link>
            <Link href="/aboutstudent">Go to About student </Link>

        </div>
    )
}
export default About;