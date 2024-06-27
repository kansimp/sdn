import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Moreicon from '../MoreIcon/MoreIcon';
import axios from 'axios';

export default function TableListBrands({ open, handleClose, handleOpen, flag, setFlag, brandId, setBrandId }) {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        getAllBrands();
    }, [flag]);
    const getAllBrands = async () => {
        const res = await axios.get('http://localhost:5000/brands');
        if (res.data.data) {
            const brands = res.data.data.map((b, index) => {
                return {
                    ...b,
                    id: index + 1,
                };
            });
            setRows(brands);
        }
    };
    const columns = [
        { field: 'id', headerName: 'STT', width: 90 },
        {
            field: '_id',
            headerName: 'ID',
            width: 250,
            editable: true,
        },
        {
            field: 'brandName',
            headerName: 'Brand Name',
            width: 250,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Moreicon
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    brandId={params.row._id}
                    setBrandId={setBrandId}
                    setFlag={setFlag}
                    flag={flag}
                />
            ),
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#2d3748',
                        color: '#FFFFFF',
                    },
                    '& .MuiDataGrid-filler': {
                        backgroundColor: '#2d3748',
                        color: '#FFFFFF',
                    },
                    '& .css-tgsonj': {
                        backgroundColor: '#FFF',
                    },
                }}
            />
        </Box>
    );
}
