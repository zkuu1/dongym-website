'use server';

import { prisma } from "./prisma";
import { RegisterSchema, SignInSchema } from "./zod";
import { hashSync } from 'bcryptjs';
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { de, th } from "zod/v4/locales";

export const SignupCredentials = async (
  prevstate: unknown,
  formData: FormData
) => {
  const ValidateFields = RegisterSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!ValidateFields.success) {
    return {
      status: 'error',
      message: 'Invalid form input',
      error: ValidateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = ValidateFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      status: 'success',
      message: 'Registration successful!',
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'User already exists with this email address',
    };
  }
};


export const SigninCredentials = async (prevState: unknown, formData: FormData) => {
  const ValidateFields = SignInSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!ValidateFields.success) {
    return {
      status: 'error',
      message: 'Invalid form input',
      error: ValidateFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = ValidateFields.data;

  // hanya validasi
  return {
    status: 'success',
    message: 'Form valid',
    data: { email, password }
  };
};


