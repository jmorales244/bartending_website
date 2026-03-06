import BookingWidget from "../features/booking/components/BookingWidget"

// Page to hold widget for booking 

function Book() {
    return (
        <div className="max-w-2x1 mx-auto">
            <h1>Book Your Event</h1>
            <BookingWidget />
        </div>
    )
}

export default Book