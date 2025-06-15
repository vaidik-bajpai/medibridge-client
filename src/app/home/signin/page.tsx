"use client"; 

import { SubmitHandler, useForm } from "react-hook-form";
import Action from "../../../../components/ActionButton";
import FormInput from "../../../../components/FormInput";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { useRouter } from 'next/navigation';


interface IFormInput {
    email: string;
    password: string;
}

const signupValidation = Yup.object({
    email: Yup.string().email('Invalid email address.').required("Email is required"),
    password: Yup.string().min(8, "Password must be atleast 8 characters long.").max(72, "Password cannot exceed the character limit of 72").required("Password is required"),
})

function Signin() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(signupValidation)
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/user/signin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(data),
                }
            );
            if (response.ok) {
                console.log("ok")
                router.push("/home/decision");
            } else if(response.status === 404) {
                console.log("not registered")
                router.push("/home/signup");
            } else {
                console.error("Failed to sign in");
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="w-full shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg p-3 py-5">
            <div className="relative max-w-4xl px-2 border-1 py-5 pr-5">
                <h1 className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 px-2 bg-white text-indigo-800 text-2xl">
                    LOGIN
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col w-full max-w-3xl gap-2">
                    <FormInput 
                        {...register('email')}
                        type="email"
                        placeholder="Enter your email"
                        label="Email:"
                        name="email"
                        error={errors.email?.message}/>
                    <FormInput {...register('password')}  type="password" placeholder="Enter your email" label="Password:" name="password" error={errors.password?.message}/>
                    <Action buttonText="Log In"/>
                </form>
            </div>
        </div>
    )
}

export default Signin;