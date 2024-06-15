import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="bg-amber-200 h-screen flex items-center">
            {/* <h1>
                Flip for fun and flip for friends—join Waffle today!
            </h1> */}
            <form className="w-64 mx-auto rounded-lg mb-12">
                <div className="rounded-md border-t-4 border-b-4 border-x-4 border-amber-700">
                    <input value={username}
                        type="text" placeholder="Username"
                        onChange={e => setUsername(ev.target.value)}
                        className="block w-full p-2"
                    />
                    <input
                        value={password}
                        type="password" placeholder="Password"
                        onChange={e => setPassword(ev.target.value)}
                        className="block w-full p-2"
                    />
                </div>
                <button className="bg-amber-700 text-white block w-full rounded-md mt-2 p-2">Register</button>
            </form>
        </div>
    )
}