import SingleOrder from "./SingleOrder";

const Orders = () => {

    return(
        <div>
            {[1,2,3].map(num => <SingleOrder />)}
        </div>
    )
}

export default Orders;
