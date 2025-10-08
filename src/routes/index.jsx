import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 font-mono">
       <h3 className='text-3xl'>Welcome To</h3>
       <h2 className='text-5xl text-red-600 font-bold'>The Cabin</h2>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          <a href="/book">Book Now</a> </button>
      </div>
      <div className="container mx-auto p-4 mt-12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
      </div>
    </div>
  )
}