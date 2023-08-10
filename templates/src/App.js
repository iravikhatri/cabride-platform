import { Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import PastRides from "./page/PastRides";
import MyAccount from "./page/MyAccount";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="past-rides" element={<PastRides />} />
            <Route path="my-account" element={<MyAccount />} />
        </Routes>
    );
}

export default App;
