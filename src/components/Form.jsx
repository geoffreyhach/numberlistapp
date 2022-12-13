import React, { useState, useRef } from "react";
import Joi from "joi";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

function Form({ numbers, setNumbers }) {
    const [number, setNumber] = useState();
    const [error, setError] = useState("");
    const ref = useRef(null);
    const schema = Joi.object({
        number: Joi.number().integer().less(9999).allow(""),
    });

    const handleChange = (e) => {
        const { error } = schema.validate({ number: e.target.value });
        console.log(error);
        if (!error) {
            setError("");
            setNumber(e.target.value);
        } else setError(error.message);
    };

    const handleSubmit = async () => {
        const endpoint = "http://localhost:3200/api/number";
        await axios.post(endpoint, {
            number,
        });
        setNumber("");

        const res = await axios.get(endpoint);
        setNumbers(res.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Typography color="red">{error}</Typography>}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
            >
                <TextField
                    id="filled-basic"
                    label="Entrez un nombre"
                    variant="filled"
                    value={number || ""}
                    onChange={(e) => handleChange(e)}
                    inputRef={ref}
                    data-cy="input"
                />
                <IconButton type="submit" disabled={!number}>
                    <AddIcon data-cy="submit-btn" />
                </IconButton>
            </Stack>
        </form>
    );
}

export default Form;
