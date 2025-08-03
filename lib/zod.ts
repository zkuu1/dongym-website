import {object, string} from 'zod';

export const RegisterSchema = object({
    name: string().min(1, 'Name is required'),
    email: string().email('Invalid email address'),
    password: string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: string().min(6, 'Confirm Password must be at least 6 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
}) 

export const SignInSchema = object({
    email: string().email('Invalid email address'),
    password: string().min(6, 'Password must be at least 6 characters long')
}) 