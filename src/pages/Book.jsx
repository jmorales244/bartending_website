import BookingWidget from "../features/booking/components/BookingWidget"

// Page to hold widget for booking 

function Book() {
    return (
        <div className="py-20 px-6 bg[#f7f7f7]">
            
            <div className="max-w-4x1 mx-auto space-y-10 text-center">

                <h1 className="max-w-4x1 font-semibold text-gray-900">
                    Book Your Event
                </h1>

                <p className="text-gray-600">
                    Tell us about your event and we will contact you to confirm availability.
                </p>
        
                <BookingWidget />
            </div>
        </div>
    )
}

export default Book