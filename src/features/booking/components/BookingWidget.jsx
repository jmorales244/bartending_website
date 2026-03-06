import { useState } from "react";

function BookingWidget() {

    const [eventType, setEventType] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const bookingRequest = {
            eventType,
            date,
            name,
            email
        }

        console.log("Booking request:", bookingRequest)
    }

    return (
        <div className="max-w-x1 mx-auto p-6 border border-gray-200 rounded-x1 bg-white">

            <h2 className="text-2x1- font-semibold mb-6">
                Request Event Booking
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Event Type
                    </label>

                    <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    >
                        <option value="">Select event</option>
                        <option>Wedding</option>
                        <option>XV Party</option>
                        <option>Corporate Event</option>
                        <option>Graduation</option>
                        <option>Private Party</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Event Date
                    </label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Full Name
                    </label>

                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>
                
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Email
                    </label>

                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-[#f25f5c] text-white py-3 rounded-lg hover:bg-[#e14d4a] transition"
                >
                    Submit Request
                </button>
                
            </form>

        </div>
    )
}

export default BookingWidget