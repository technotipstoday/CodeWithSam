import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center h-screen bg-orange-500">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-6">About Us</h1>
        <p className="text-white">This is the about page</p>
      </div>
    </div>
    </>

  )
}