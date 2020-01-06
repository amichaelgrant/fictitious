###### Artifact-Uprising Demo

# Client
This is based on React.

* Clone the repo with `git clone https://github.com/amichaelgrant/fictitious.git`
* Change directory to the client folder; `cd fictitous/client`
* Start the application with the command; `yarn start`
* This should start the client application on port `3000`
* Go to [http://localhost:3000/index.html](http://localhost:3000/index.html) to access the application


# Server
NodeJS based API server.

* Clone the repo with `git clone https://github.com/amichaelgrant/fictitious.git`
* Change directory to the server; `cd fictitious/server`
* Run the command `npm start` to start the server
* Server runs on port `8000`
* Go to [http://localhost:8000](http://localhost:8000) to access the server
* To populate the system with sample/mock data, run the command `npm run init`

# Mock Data
Populate the API server with sample product data.

* Change directory to the server; `cd fictitious/server`
* Run the command `npm run init` to generate mock data for testing

# Starting Services With Docker Compose
This is not fully wired and so might not work very well. I would suggest testing
using above approach instead.
* Clone the repo with `git clone https://github.com/amichaelgrant/fictitious.git`
* Change directory to the server; `cd fictitious/`
* Run the command `docker-compose up --build`
