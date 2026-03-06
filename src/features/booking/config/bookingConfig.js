export const bookingConfig = {
    businessName: "AJ Bartending",

    eventTypes: [
        "Wedding",
        "XV Party",
        "Corporate Event",
        "Graduation",
        "Private Party"
    ],


    fields: [
        { name: "name", label: "Full Name", type: "text", required: true},
        { name: "email", label: "Email", type: "email", required: true},
        { name: "phone", label: "Phone", type: "tel", required: true},
        { name: "guestCount", label: "guest Count", type: "number"},
        { name: "message", label: "Event Details", type: "textarea"},
    ]
}