import Header from "../../components/Header"
import RideCard from "../../components/RideCard"
import SearchPanal from "../../components/SearchPanal"

const data = [
    {
        driver: {
            name: "Amritpal Singh",
            image: ""
        },
        drop: {
            datetime: "",
            city: "Ludhiana, Punjab, India"
        },
        pickup: {
            datetime: "",
            city: "Noida, Uttar Pradesh, India"
        },
        distance: "120 KM",
        fair_amount: 1200.00
    },
    {
        driver: {
            name: "Amritpal Singh",
            image: ""
        },
        drop: {
            datetime: "",
            city: "Ludhiana, Punjab, India"
        },
        pickup: {
            datetime: "",
            city: "Noida, Uttar Pradesh, India"
        },
        distance: "120 KM",
        fair_amount: 1200.00
    },
    {
        driver: {
            name: "Amritpal Singh",
            image: ""
        },
        drop: {
            datetime: "",
            city: "Ludhiana, Punjab, India"
        },
        pickup: {
            datetime: "",
            city: "Noida, Uttar Pradesh, India"
        },
        distance: "120 KM",
        fair_amount: 1200.00
    },
    {
        driver: {
            name: "Amritpal Singh",
            image: ""
        },
        drop: {
            datetime: "",
            city: "Ludhiana, Punjab, India"
        },
        pickup: {
            datetime: "",
            city: "Noida, Uttar Pradesh, India"
        },
        distance: "120 KM",
        fair_amount: 1200.00
    },
]

function Home() {
    return (
        <div>
            <Header />
            <SearchPanal />
            <div className="xl:container mx-auto">
                {data?.map(item => (
                    <RideCard data={item} />
                ))}
            </div>
        </div>
    )
}

export default Home