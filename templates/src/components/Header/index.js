

function Header() {
    return (
        <header className="sticky top-0 py-4 bg-secondary">
            <div className="xl:container mx-auto flex justify-between">
                <a className="" href="/">
                    <img className="h-7" src="./logo.svg" alt="Cabride Logo" />
                </a>
                <nav className="flex items-center text-white">
                    <div className="">
                        <a href="/" className="py-3 px-4 text-alpha">Home</a>
                        <a href="/past-rides" className="py-3 px-4">Past Rides</a>
                        <a href="/accounts" className="py-3 px-4">My Account</a>
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
