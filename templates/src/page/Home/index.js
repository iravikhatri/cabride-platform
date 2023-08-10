import Header from "../../components/Header"
import RideCard from "../../components/RideCard"
import SearchPanal from "../../components/SearchPanal"

const data = [
    {
        driver: {
            name: "Amritpal Singh",
            image: "https://machohairstyles.com/wp-content/uploads/2020/12/buzz-cut-for-men-with-square-face-shape-1536x1159.jpg.webp"
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
            name: "Raja Ram",
            image: "https://machohairstyles.com/wp-content/uploads/2020/12/buzz-cut-for-men-with-square-face-shape-1536x1159.jpg.webp"
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
        fair_amount: 1100.00
    },
    {
        driver: {
            name: "Monty Kakkad",
            image: "https://machohairstyles.com/wp-content/uploads/2020/12/buzz-cut-for-men-with-square-face-shape-1536x1159.jpg.webp"
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
        fair_amount: 1250.00
    },
    {
        driver: {
            name: "Jacky Sodhi",
            image: "https://machohairstyles.com/wp-content/uploads/2020/12/buzz-cut-for-men-with-square-face-shape-1536x1159.jpg.webp"
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
        fair_amount: 1300.00
    },
]

function Home() {
    return (
        <div>
            <div className="sticky top-0">
                <Header />
                <SearchPanal />
            </div>
            <div className="xl:container mx-auto">
                {data?.map(item => (
                    <RideCard data={item} />
                ))}
            </div>
        </div>
    )
}

export default Home