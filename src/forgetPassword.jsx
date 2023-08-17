import { useFormik } from "formik";
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function ForgetPassword() {
    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            email: ''
        },
        // validationSchema: formValidationSchema,
        onSubmit: (newUpdate) => {
            // console.log("form value", newUpdate)
            UpdateData(newUpdate)
            navigate("/verifyotp")
            console.log("edit")
        }
    });

    const UpdateData = (newUpdate) => {
        // console.log(newUpdate)
        fetch("https://olx-backend-seven.vercel.app/forget-password/",
            {
                method: "POST",
                body: JSON.stringify(newUpdate),
                headers: {
                    "content-type": "application/json"
                }
            });
    };
    return (
        <div className="login-card">
            <Card sx={{ mx: 2, height: 250, maxWidth: 250 }} className="card">
                <form onSubmit={formik.handleSubmit} className='loginform'>
                    <h2>FORGET PASSWORD</h2>
                    <div className='loginfield'>
                        <TextField
                            placeholder="email"
                            name='email'
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            label="Email"
                            variant="outlined" />

                        <Button color="success" type='submit' variant="contained">submit</Button>

                    </div>

                </form>
            </Card>
        </div>

    );
}