###### Artifact-Uprising Demo

# Usage
There are 4 main actionable items that are exposed by client.
* Products
* Cart
* Add to cart
* Orders

The `products` menu item displays a list of products that exist within the
system. Each product listing has an accompanying `Add to cart` command item 
that lets users add a given product to a globally available cart.
Users can view the cart contents by clicking on the cart, this should display a
page of items the user has added to the cart. From the cart view, the user should
see total cost of all items and an `Order` button that allows the user to place
an order. Users can see all orders placed by clicking on the `Orders` menu item.


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
