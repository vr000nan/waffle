export default function Register() {
    return (
        <div className="bg-amber-200 h-screen flex items-center">
            {/* <h1>
                Enter your info below to start Waffling!
            </h1> */}
            <form className="w-64 mx-auto rounded-lg">
                <div className="rounded-md border-t-4 border-b-4 border-x-4 border-amber-700">
                    <input type="text" placeholder="Username" className="block w-full p-2"/>
                    <input type="password" placeholder="Password" className="block w-full p-2" />
                </div>
                <button className="bg-amber-700 text-white block w-full rounded-md mt-2 p-2">Register</button>
            </form>
        </div>
    )
}