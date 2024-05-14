import React from 'react'

function Dashboard() {
  return (
    <div style={{border:"1px solid black",textAlign:"center"}}>
     <div style={{display:"flex",justifyContent:"space-around"}}>
        <p>Payments App  </p>
        <p>Hello User</p>
     </div> <br />
     <div style={{display:"flex",gap:"10px"}}>
        <p>Your Balance</p>
        <p>5000</p>
     </div> <br />
     <div>
        <p>Users</p>
        <input type="text" placeholder='Search users' />
     </div><br />
     <div style={{display:"flex",justifyContent:"space-around"}}>
        <p>Akhil</p>
        <button>Send Money </button>
     </div><br />
    </div>
  )
}

export default Dashboard
