

function InputField({ id, label, placeholder, type, value }) {
    return (
        <div className="">
            <label htmlFor={id}>
                {label}
            </label>
            <input
                className="w-full px-6 py-3 mt-1 rounded-xl bg-beta"
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}
export default InputField