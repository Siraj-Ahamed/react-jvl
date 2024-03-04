import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { UseDispatch, useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    // const [customers, setCustomers] = useState([]);

    const dispatch = useDispatch();

    function addCustomer() {
        console.log(input);
        if (input) {
            // setCustomers((previousState) => [...previousState, input]);
           dispatch(addCustomerAction(input))
            // console.log("Customer Array", customers);
            setInput("");
        }
    }
    return (
        <>
            <div>
                <h3>Add New Customer</h3>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addCustomer}>Add</button>
            </div>
    
        </>
    );
}
