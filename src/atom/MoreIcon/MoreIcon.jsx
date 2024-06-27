import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

export default function Moreicon({ open, handleClose, handleOpen, brandId, setBrandId, setFlag, flag }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleDelete = async () => {
        console.log('brandId', brandId);
        const res = await axios.delete(`http://localhost:5000/brands?brandId=${brandId}`);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreHorizIcon style={{ color: 'black' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    onClick={() => {
                        handleOpen();
                        handleCloseMenu();
                        setBrandId(brandId);
                    }}
                >
                    <EditIcon className="mr-6" style={{ color: 'green' }} />
                    Edit
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleDelete();
                        setFlag(flag + 1);
                        handleCloseMenu();
                    }}
                >
                    <ClearIcon className="mr-6" style={{ color: 'red' }} />
                    Delete
                </MenuItem>
            </Menu>
        </div>
    );
}
