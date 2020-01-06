import React, {Fragment} from 'react';


function OrderList({items, onItemClick}) {

	const onClick = (item) => {
		return(evt) => {
			onItemClick && onItemClick(item);
		}
	};

	return (
		<div className="product-list">
			{items && (
				<table className="table is-fullwidth">
					<tbody>
						{items.map((item) => (
							<tr key={item.id}>
								<td>
									<div>{item.id}</div>
									<div className="tag">{item.created}</div>
								</td>
								<td>
									{item.items.map((itm) => (
										<div>{itm.name} ({itm.quantity}) @ ({itm.price})</div>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default OrderList;
