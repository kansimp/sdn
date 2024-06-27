import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 542,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    position: 'relative',
};

const validationSchema = Yup.object({
    brandName: Yup.string().required('Brand Name is required'),
});

const handleAdd = async (values) => {
    const res = await axios.post('http://localhost:5000/brands', { brandName: values.brandName });
};

export default function AddBrandModal({ open, handleClose, setFlag, flag }) {
    const formik = useFormik({
        initialValues: {
            brandName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission
            handleAdd(values);
            handleClose();
            setFlag(flag + 1);
        },
    });

    const onClose = () => {
        formik.resetForm();
        handleClose();
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div
                            className="py-2 text-center"
                            style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: '600',
                                backgroundColor: '#2D3748',
                                borderRadius: '10px 10px 0 0 ',
                            }}
                        >
                            Add new brand
                        </div>
                        <HighlightOffIcon
                            onClick={onClose}
                            style={{ color: '#fff', position: 'absolute', top: '5', right: '5', fontSize: '32px' }}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex p-8 justify-between " style={{ alignItems: 'center' }}>
                                <div className="font-bold">Brand Name</div>
                                <TextField
                                    id="brandName"
                                    name="brandName"
                                    label="Brand Name"
                                    variant="outlined"
                                    value={formik.values.brandName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.brandName && Boolean(formik.errors.brandName)}
                                    helperText={formik.touched.brandName && formik.errors.brandName}
                                />
                            </div>
                            <div className="p-8 flex justify-center" style={{ alignItems: 'center' }}>
                                <div
                                    className="font-bold mr-4"
                                    style={{ textDecoration: 'underline', color: '#d98305', cursor: 'pointer' }}
                                    onClick={onClose}
                                >
                                    Cancel
                                </div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#2D3748',
                                        height: '2.5rem',
                                        fontWeight: '600',
                                        '&:hover': {
                                            backgroundColor: '#384964',
                                        },
                                        borderRadius: '10px',
                                    }}
                                >
                                    Add
                                </Button>
                            </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
