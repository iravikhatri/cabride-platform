import Header from "../../components/Header"



function PastRides() {
    const titles = [
        {
            id: "1",
            title: "ID Number",
        },
        {
            id: "2",
            title: "Booked Date",
        },
        {
            id: "3",
            title: "Driver",
        },
        {
            id: "4",
            title: "Pickup",
        },
        {
            id: "5",
            title: "Drop Off",
        },
        {
            id: "6",
            title: "Paid Amount",
        },
        {
            id: "7",
            title: "Action",
        }
    ]

    const data = [
        {
            "ride_id": "CR128831939212",
            "schedule_at": "13:00 PM - 23, June 2023",
            "driver": "Manjeet Singh",
            "pickup": "Ludhiana, Punjab, India",
            "drop": "Mohali, Punjab, India",
            "paid_amount": "1200",
            "actions": "Book Now"
        },
        {
            "ride_id": "CR128831939211",
            "schedule_at": "13:00 PM - 23, June 2023",
            "driver": "Manjeet Singh",
            "pickup": "Ludhiana, Punjab, India",
            "drop": "Mohali, Punjab, India",
            "paid_amount": "1200",
            "actions": "Book Now"
        },
        {
            "ride_id": "CR128831933212",
            "schedule_at": "13:00 PM - 23, June 2023",
            "driver": "Manjeet Singh",
            "pickup": "Ludhiana, Punjab, India",
            "drop": "Mohali, Punjab, India",
            "paid_amount": "1200",
            "actions": "Book Now"
        },
        {
            "ride_id": "CR228831939212",
            "schedule_at": "13:00 PM - 23, June 2023",
            "driver": "Manjeet Singh",
            "pickup": "Ludhiana, Punjab, India",
            "drop": "Mohali, Punjab, India",
            "paid_amount": "1200",
            "actions": "Book Now"
        },
        {
            "ride_id": "CR148831939211",
            "schedule_at": "13:00 PM - 23, June 2023",
            "driver": "Manjeet Singh",
            "pickup": "Ludhiana, Punjab, India",
            "drop": "Mohali, Punjab, India",
            "paid_amount": "1200",
            "actions": "Book Now"
        },
        {
            "ride_id": "CR128631933212",
            "schedule_at": "13:00 PM - 23, June 2023",
            "driver": "Manjeet Singh",
            "pickup": "Ludhiana, Punjab, India",
            "drop": "Mohali, Punjab, India",
            "paid_amount": "1200",
            "actions": "Book Now"
        }
    ]
    return (
        <>
            <Header />
            <div className="xl:container mx-auto">
                <table className="w-full mt-6 border-separate border-spacing-y-3">
                    <thead className="sticky top-24 rounded-2xl">
                        <tr className="bg-beta text-white text-left">
                            {titles.map(item => {
                                return (
                                    <th key={item.id} className="p-5">{item.title}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => {
                            return (
                                <tr key={item.ride_id} className="bg-white text-black rounded-xl">
                                    <td className="p-5">{item.ride_id}</td>
                                    <td className="p-5">{item.schedule_at}</td>
                                    <td className="p-5">{item.driver}</td>
                                    <td className="p-5">{item.pickup}</td>
                                    <td className="p-5">{item.drop}</td>
                                    <td className="p-5">₹{item.paid_amount}</td>
                                    <td className="p-5">{item.actions}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PastRides