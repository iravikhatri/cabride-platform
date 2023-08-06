import InputField from '../../elements/InputField'


function SearchPanal() {
    return (
        <div className="sticky top-14 bg-secondary text-white">
            <div className="xl:container mx-auto py-6">
                <div className="pt-12 pb-10 font-light text-3xl">
                    <h2>Welcome to the cabride,</h2>
                    <h2>Most convenient place to book your ride.</h2>
                </div>
                <div className="flex gap-x-6">
                    <div className="w-full grid grid-cols-3 gap-x-6">
                        <InputField

                            id="leaving-from"
                            type="text"
                            label="Leaving from"
                            placeholder="E.g. Delhi"
                        />
                        <InputField
                            label="Going to"
                            id="going-to"
                            type="text"
                            placeholder="E.g. Jaipur"
                        />
                        <InputField
                            label="Schedule date"
                            id="chedule date"
                            type="text"
                            placeholder="E.g. 23, June 2024"
                        />
                    </div>
                    <div className="flex flex-col justify-end">
                        <button className="px-16 py-3 bg-primary rounded-xl">
                            Check
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPanal