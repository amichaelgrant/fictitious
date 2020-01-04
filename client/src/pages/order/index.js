import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import OrderList from "../../components/order/OrderList";
import {listOrders} from "../../apis/order";



function Index(props) {
	//console.log("Order: ", props);
	
	const[orders, setOrders] = useState([]);
	const[size, setSize] = useState(0);
	
	useEffect(() => {
		listOrders({}).then((ps)=>{
			setOrders(ps.items);
			setSize(ps.size);
		});
	}, []);
	
	return (
		<div className="orders">
			<h1 className="title">Orders</h1>
			<div className="subtitle">[{size}] items available</div>
			
			<div>
				<OrderList
					items={orders}
					onItemClick={(item)=>{
						props.history.push(`/order/${item.id}`);
					}}
				/>
			</div>
		</div>
	);
}

export default withRouter(Index);
