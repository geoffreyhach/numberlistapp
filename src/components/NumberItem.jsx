import { Divider, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import axios from "axios";

function NumberItem({ number, id, setNumbers }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleDelete = async () => {
        const endpoint = "http://localhost:3200/api/number/";
        await axios.delete(endpoint + id);
        const res = await axios.get(endpoint);
        setNumbers(res.data);
    };
    return (
        <>
            <ListItemButton
                component="a"
                href="#simple-list"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ListItemText primary={number} />
                {isHovered && <DeleteIcon color="red" onClick={handleDelete} />}
            </ListItemButton>
            <Divider />
        </>
    );
}

export default NumberItem;
