import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";


const Transactions = () => {
    return(
        <h1>Transactions</h1>
    );
}

export default Transactions;