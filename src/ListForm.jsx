import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { useState } from "react";


function ListForm({ addToList }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const hanndleSubmit = (e) => {
        e.preventDefault();
        addToList(text);
        setText("");
    };
    return (
        <ListItem>
            <form onSubmit={hanndleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Add to list" 
                    variant="outlined"
                    onChange={handleChange} 
                    value={text}
                    inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create to do list" edge="end" type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}

export default ListForm;