import NavBar from "@/components/NavBar";

// pages/user.js
export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    const user = await res.json()
  
    return {
      props: { user }, 
    }
  }

export default function User({ user }) {
  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center h-screen bg-orange-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
        <p className="text-xl text-white mb-2">Name: {user.name}</p>
        <p className="text-xl text-white mb-2">Email: {user.email}</p>
        <p className="text-xl text-white mb-2">Username: {user.username}</p>
        <p className="text-xl text-white mb-2">Phone: {user.phone}</p>
        <p className="text-xl text-white mb-2">Website: {user.website}</p>
      </div>
    </div>
    </>
  )
}
