
async function userList(){
let data = await fetch("https://dummyjson.com/users");
data = await data.json();
return data.users;
}


export default async function Page() {
    let users = await userList();
    // console.log(users);
    
 return(
    <div>
        <h1>users list</h1>
        {
            users.map((item)=>(
          <div>
          <h3><b style={{color:"red"}}>Id:</b> {item.id}</h3>
          <h3><b style={{color:"red"}}>First Name:</b> {item.firstName}</h3>
          <h3><b style={{color:"red"}}>Last Name: </b> {item.lastName}</h3>
          <h3><b style={{color:"red"}}>Maiden Name:</b> {item.maidenName}</h3>
          <h3><b style={{color:"red"}}>Gender: </b> {item.gender}</h3>
          <h3><b style={{color:"red"}}>Email: </b> {item.email}</h3>
          <hr />
          </div>

            ))
        }
    </div>
 )
}