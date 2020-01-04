function deserialize(str){
	try{
		return JSON.parse(str);
	}catch(ex){
		return [];
	}
};
function serialize(obj){
	try{
		return JSON.stringify(obj);
	}catch(ex){
		return "[]";
	}
};

function addItem(item){
	const items = deserialize(localStorage.cart || "[]");
	const existing = items.find(itm => itm.id === item.id);
	if(existing) return;
	
	item.quantity = 1;
	items.push(item);
	localStorage.cart = serialize(items);
	window.dispatchEvent(new Event("storage"));
};
function removeItem(item){
	const items = deserialize(localStorage.cart || "[]");
	const filtered = items.filter((itm) => {
		return itm.id !== item.id;
	});
	console.log("filtered: ", filtered);
	localStorage.cart = serialize(filtered);
	window.dispatchEvent(new Event("storage"));
};
function updateItem(item, qty){
	const items = deserialize(localStorage.cart || "[]");
	items.forEach((itm) => {
		if(itm.id === item.id){
			itm.quantity += qty;
			if(itm.quantity < 1){
				itm.quantity = 1;
			};
		};
	});
	localStorage.cart = serialize(items);
	window.dispatchEvent(new Event("storage"));
};
function listItems() {
	const items = deserialize(localStorage.cart || "[]");
	return items;
};
function clearCart(){
	localStorage.clear();
	window.dispatchEvent(new Event("storage"));
};
function subscribeToCart(callback){
	window.addEventListener("storage", callback);
};

export {
	addItem,
	removeItem,
	updateItem,
	listItems,
	clearCart,
	subscribeToCart
};