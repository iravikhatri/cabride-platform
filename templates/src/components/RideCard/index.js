
function RideCard({ data }) {
    return (
        <div className="mt-6 py-10 px-10 flex justify-between items-center bg-white">
            <div className="w-24 flex flex-col justify-center items-center">
                <img className="w-12 h-12 mb-2 object-cover rounded-full" src={data.driver.image} alt={data.driver.name} />
                <p className="text-sm">{data.driver.name}</p>
            </div>
            <div className="flex">
                <div>
                    <p className="text-3xl font-semibold">13:00 PM</p>
                    <p>{data.pickup.city}</p>
                    <p className="text-off-gray">23, June 2023</p>
                </div>
                <div className="mx-14 flex flex-col justify-center text-center">
                    <p>{data.distance}</p>
                    <div className="flex items-center">
                        <div className="h-6 w-6 flex justify-center items-center bg-alpha rounded-full">
                            <div className="h-3 w-3 bg-primary rounded-full"></div>
                        </div>
                        <div className="h-0 w-80 border-b border-off-gray"></div>
                        <div className="h-6 w-6 flex justify-center items-center bg-alpha rounded-full">
                            <div className="h-3 w-3 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <p>1h 20m</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-semibold">13:00 PM</p>
                    <p>{data.drop.city}</p>
                    <p className="text-off-gray">23, June 2023</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
                <p className="text-3xl font-medium">₹{data.fair_amount}</p>
                <button className="px-10 py-3 bg-primary rounded-xl text-white">
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default RideCard
