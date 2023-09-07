import List from "@mui/material/List";
import ToDoItem from "./ToDoItem";
import ListForm from "./ListForm";
import { Box, Typography } from "@mui/material";

import { useState, useEffect } from 'react';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("lists"));
    if(!data) return [];
    return data; 
};

function ToDoLists() {
    const [lists, setLists] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(lists));
    }, [lists]);

    const removeList = (id) => {
        setLists((prevLists) => {
            return prevLists.filter((t) => t.id !== id);
        });
    };

    const toggleList = (id) => {
        setLists((prevLists) => {
            return prevLists.map((list) => {
                if(list.id === id) {
                    return {...list, completed: !list.completed};
                } else {
                    return list;
                }
            });
        });
    };

    const addToList = (text) => {
        setLists((prevLists) => {
            return [
                ...prevLists, 
                { text: text, id: crypto.randomUUID(), completed: false },
            ];
        });
    };

    return (
        <Box
            sx={{ 
                display: "flex",
                justifyContent: "center", 
                flexDirection: "column", 
                alignItems: "center",
                m: 3, 
            }}
        >
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Lists
            </Typography>
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {lists.map((list) => (
                    <ToDoItem 
                        list={list} 
                        key={list.id}
                        remove={removeList}
                        toggle={() => toggleList(list.id)} 
                    />
                ))}
                <ListForm addToList={addToList} />
            </List>
        </Box>
    );
}

export default ToDoLists;




