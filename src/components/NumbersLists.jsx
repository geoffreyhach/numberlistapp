import { List } from "@mui/material";
import React from "react";
import NumberItem from "./NumberItem";

function NumbersLists({ numbers, setNumbers }) {
    return (
        <List>
            {numbers.map((number) => (
                <NumberItem
                    key={number._id}
                    number={number.number}
                    id={number._id}
                    setNumbers={setNumbers}
                />
            ))}
        </List>
    );
}

export default NumbersLists;
