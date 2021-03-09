## MeteoApp with a call to an API


## With Docker
## Installation
You need to install docker compose -> https://github.com/Yelp/docker-compose/blob/master/docs/install.md
### `Start with Docker compose`
    ``` docker-compose up --build ```
### `Delete all dockers`
    ``` docker rm -f $(docker ps -a -q) ```

## USE THE APP
Go to "http://localhost:3000/"

## IMPORTANT INFORMATIONS
This app will not work without docker because it uses resources provided by Docker

## Services
### `Weather`
    Widgets
        - Call to openweathermap api to get some information about the current weather.
            Take one parameters: city.