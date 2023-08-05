

function Header() {
    return (
        <header className="py-3  bg-blue-950">
            <div className="xl:container mx-auto flex justify-between">
                <a className="" href="/">
                    <img className="h-10" src="./logo.svg" alt="Cabride Logo" />
                </a>
                <nav className="flex items-center text-white">
                    <div className="">
                        <a href="/" className="py-3 px-4">Home</a>
                        <a href="/cabs-nearby" className="py-3 px-4">Cabs Nearby</a>
                        <a href="/past-rides" className="py-3 px-4">Past Rides</a>
                        <a href="/logout" className="py-3 px-4">Logout</a>
                    </div>
                    {/* <div className="">
                        <a href="/" className="py-3 px-4 mr-2">Log in</a>
                        <a href="/" className="py-3 px-6 bg-blue-700 text-white rounded">Sign up</a>
                    </div> */}
                </nav>
            </div>
        </header>
    )
}

export default Header
