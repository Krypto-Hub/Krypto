import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";


const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });

export default Transactions;