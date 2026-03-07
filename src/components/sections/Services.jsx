function Services() {

    const services = [
        {
            title: "Weddings",
            description: "Professional bartending service to make your wedding celebration unforgettable."     
        },
        {
            title: "XV Parties",
            description: "Celebrate this special milestone with custome cocktails and friendly bartenders."     
        },
        {
            title: "Corporate Events",
            description: "Professional service for company parties, networking events and celebrations."     
        },        
        {
            title: "Graduations",
            description: "Celebrate achievements with a fun and memorable drink experience."     
        },
        {
            title: "Private Parties",
            description: "Birthdays, anniversaries and house parties with a mobile bar setup."     
        },
    ]

    return (
        <section className="w-full py-20 px-6 bg-white rounded-2xl">

            <div className="max-w-6x1 mx-auto space-y-12">
                
                <div className="text-center space-y-4"> 
                    <h2 className="text-3x1 font-semibold text-gray-900">
                        Events We Serve
                    </h2>

                    <p className="text-gray-600 max-w-x1 mx-auto">
                        We provide mobile bartending services for a variety of special occasions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 border border-gray-200 rounded-x1 hover:shadow-sm transition"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Services