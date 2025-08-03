'use client'

import { useFormStatus } from "react-dom";


export const RegisterButton = () => {

    const {pending} = useFormStatus();
    return (
         <button
                type="submit"
                disabled={pending}
                className="w-full bg-base_purple text-white py-3 px-4 rounded-lg font-bold hover:bg-yellow-600 transition-all shadow-lg"
              >
                {pending ? "Registering..." : "Register"}
              </button>
    )
}

export const SignInButton = () => {

    const {pending} = useFormStatus();
    return (
         <button
                type="submit"
                disabled={pending}
                className="w-full bg-base_purple text-white py-3 px-4 rounded-lg font-bold hover:bg-yellow-600 transition-all shadow-lg"
              >
                {pending ? "Authecticating..." : "Login"}
              </button>
    )
}