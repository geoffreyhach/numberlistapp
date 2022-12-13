import { Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import NumbersLists from "./NumbersLists";

function MainCard(props) {
    const [numbers, setNumbers] = useState([]);
    useEffect(() => {
        const endpoint = "http://localhost:3200/api/number";
        async function fetchData() {
            const res = await axios.get(endpoint);
            setNumbers(res.data);
            console.log(res.data);
        }
        fetchData();
    }, []);
    return (
        <Card sx={{ minWidth: 275, padding: "1rem" }}>
            <Form setNumbers={setNumbers} />
            <NumbersLists numbers={numbers} setNumbers={setNumbers} />
        </Card>
    );
}

export default MainCard;
