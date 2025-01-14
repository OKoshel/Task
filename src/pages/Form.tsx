import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

interface FormProps {
    email: string;
    password: string;
    phoneNumber: string;
}

const Form = () => {
    const { register, handleSubmit, control, reset, formState: { errors, isValid } } = useForm<FormProps>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            phoneNumber: ''
        }
    });

    const onSubmit = (data: FormProps) => {
        console.log(data);
        reset();
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            margin: "0 auto",
            maxWidth: '500px'
        }}>
            <Typography sx={{
                textAlign: "center",
                fontSize: '20px',
            }}>React Hook Form with Advanced Features</Typography>

            <form onSubmit={handleSubmit(onSubmit)} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                margin: "0 auto",
                width: '100%',
            }}>
                <TextField
                    label="Email"
                    variant="outlined"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format"
                        }
                    })}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        maxLength: {
                            value: 15,
                            message: 'Password must not exceed 15 characters'
                        },
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long'
                        },
                        validate: (value) => {
                            const hasNumber = /\d/;
                            return hasNumber.test(value) || "Password must contain a number";
                        }
                    })}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

                <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone number must be 10 digits"
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            {...field}
                        />
                    )}
                />
                {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber.message}</span>}

                <Button
                    variant="outlined"
                    type="submit"
                    disabled={!isValid}
                    sx={{
                        width: '100px',
                        margin: '0 auto',
                    }}
                >
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default Form;
