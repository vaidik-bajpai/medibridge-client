"use client";

import { useRouter } from "next/navigation";
import Action from "../../../../components/ActionButton";
import FormInput from "../../../../components/FormInput";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { SubmitHandler, useForm } from "react-hook-form";
import InputDropDown from "../../../../components/InputDropDown";

interface IFormInput {
    fullname: string
    email: string;
    password: string;
    role: string;
}

const signupValidation = Yup.object({
    fullname: Yup.string().required("Username is required"), 
    email: Yup.string().email('Invalid email address.').required("Email is required"),
    password: Yup.string().min(8).max(72).required("Password is required"),
    role: Yup.string().required("Please select a role") // 👈 this
});

function Signup() {
    const router = useRouter();
    
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(signupValidation)
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log("Form data to be sent to backend:", data);
        try {
            const response = await fetch(
                "http://localhost:8080/v1/user/signup",
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
                router.push("/home/signin");
            } else {
                console.error("Failed to sign up");
            }
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <div className="w-full shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-lg p-3 py-5">
            <div className="relative max-w-4xl px-2 border-1 py-5 pr-5">
                <h1 className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 px-2 bg-white text-indigo-800 text-2xl">
                    SIGNUP
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-3xl">
                    <div className="flex gap-4 w-full">
                        <FormInput {...register('fullname')} type="text" placeholder="Enter your fullname" label="Full Name:" name="fullname" error={errors.fullname?.message}/>
                        <InputDropDown {...register('role')} name="role" error={errors.role?.message} />
                    </div>
                    <FormInput {...register('email')} type="email" placeholder="Enter your email" label="Email:" name="email" error={errors.email?.message}/>
                    <FormInput {...register('password')} type="password" placeholder="Enter your email" label="Password:" name="password" error={errors.password?.message}/>
                    
                    <Action buttonText="Sign Up"/>
                </form>
            </div>
        </div>
    )
}

export default Signup;