

function Header() {
    return (
        <header className="bg-gray-200">
            <a className="" href="/">
                <img src="./logo.svg" alt="Cabride Logo" />
            </a>
            <nav className="">
                <div className="">
                    <div className="">
                        <a href="/" className="">Home</a>
                        <a href="/cabs-nearby" className="">Cabs Nearby</a>
                        <a href="/past-rides" className="">Past Rides</a>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="buttons">
                                <a href="/" className="">Sign up</a>
                                <a href="/" className="">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
