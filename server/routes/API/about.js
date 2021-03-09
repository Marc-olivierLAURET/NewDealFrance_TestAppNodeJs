exports.getAbout = function(request, response) {
    const date = new Date().getTime()
    const aboutJson = {
        client: {"host": '127.0.0.1'},
        server: {
            current_time: date,
            services: [{
                name: 'weather',
                description: "Display current weather for a city",
                parameters: [
                    {
                        name: "city",
                        type: "string"
                    }
                ]
            }]
        }
    };
    response.status(200).json(aboutJson);
}