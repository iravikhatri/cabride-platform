import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
        <header className="sticky top-0 py-4 bg-secondary">
            <div className="xl:container mx-auto flex justify-between">
                <Link className="" to="/">
                    <img className="h-7" src="./logo.svg" alt="Cabride Logo" />
                </Link>
                <nav className="flex items-center text-white">
                    <div className="">
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "py-3 px-4"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/past-rides"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "py-3 px-4"
                            }
                        >
                            Past Rides
                        </NavLink>
                        <NavLink 
                            to="/my-account" 
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "py-3 px-4"
                            }
                        >
                            My Account
                        </NavLink>
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
