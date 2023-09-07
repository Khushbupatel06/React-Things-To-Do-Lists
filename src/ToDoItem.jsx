import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem({list, remove, toggle}) {
    const labelId = `checkbox-list-label-${list.id}`;
    const removeList = () => {
        remove(list.id);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    onClick={removeList} 
                >
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={list.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={list.text} />
            </ListItemButton>
        </ListItem>
    );
}

export default ToDoItem;