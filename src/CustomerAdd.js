import React, { useState } from "react";
import CustomerView from "./CustomerView";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const [customers, setCustomers] = useState([]);
    function addCustomer() {
        console.log(input);
        if (input) {
            setCustomers((previousState) => [...previousState, input]);
            console.log("Customer Array", customers);
            setInput("");
        }
    }
    return (
        <>
            <div>
                <h3>Add New Customer</h3>
                <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addCustomer}>Add</button>
            </div>
            <CustomerView customers={customers} />
        </>
    );
}
