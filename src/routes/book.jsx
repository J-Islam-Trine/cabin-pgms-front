import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/book')({
  component: RouteComponent,
})

function RouteComponent() {

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here


    const form = e.target.form;    const name = form[0].value;
    const email = form[1].value;
    const arrival = form[2].value;
    const departure = form[3].value;

    const formData = {
      name,
      email,
      arrival,
      departure
    };

    const data = {
            store_id: import.meta.env.VITE_STORE_ID,
            tran_id: Math.floor(Math.random()*10000),
            success_url: "success/example",
            fail_url: "fail/example",
            cancel_url: "cancel/example",
            currency: "BDT",
            signature_key: import.meta.env.VITE_SIGNATURE_KEY,
            desc: "Description",
            cus_add1: "Dhaka",
            cus_add2: "Dhaka",
            cus_city: "Dhaka",
            cus_state: "Dhaka",
            cus_postcode: "0",
            cus_country: "Bangladesh",
            type: "json"
        }
        let newData = { ...data, ...formData };
        console.log(newData);

        await fetch(import.meta.env.VITE_PAYMENT_GATEWAY_TEST, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
                });

  }

  return (
        <>
        <form className="flex flex-col items-center justify-center max-w-md mx-auto mt-12">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
          <label className="block mt-4 mb-2" htmlFor="email">
            Email
          </label>
          <input className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="john@example.com" />
          <label className="block mt-4 mb-2" htmlFor="arrival">
            Arrival Date
          </label>
          <input className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline" id="arrival" type="date" />
          <label className="block mt-4 mb-2" htmlFor="departure">
            Departure Date
          </label>
          <input className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline" id="departure" type="date" />
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={(e) => {HandleSubmit(e)}}>
            Book
          </button>
        </form>
        </>

  )
}
