"use client"

import React from 'react'
import GeneralHeader from '../../../../components/GeneralHeader'
import GeneralHeaderSmall from '../../../../components/GeneralHeaderSmall'
import FormInputSmall from '../../../../components/FormInputSmall'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { SubmitHandler, useForm } from 'react-hook-form';
import InputDropDownSmall from '../../../../components/InputDropDownSmall'
import { error } from 'console'
import ActionButton from '../../../../components/ActionButton'
import { useRouter } from 'next/navigation'

interface IFormInput {
    fullname: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    dob: string;
    age: number;
    contactNo: string;
    address: string;
    emergencyName: string;
    emergencyRelation: string;
    emergencyPhone: string;
}

const regPatientSchema = yup.object({
  fullname: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),

  gender: yup
    .string()
    .oneOf(["MALE", "FEMALE", "OTHER"], "Gender must be MALE, FEMALE or OTHER")
    .required("Gender is required"),

  dob: yup
    .date()
    .max(new Date(), "Date of birth must be in the past")
    .required("Date of birth is required"),

  contactNo: yup
    .string()
    .matches(/^\d{10}$/, "Contact number must be 10 digits")
    .required("Contact number is required"),

  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(255, "Address must be at most 255 characters"),

  emergencyName: yup
    .string()
    .required("Emergency contact name is required"),

  emergencyRelation: yup
    .string()
    .required("Emergency contact relation is required"),

  emergencyPhone: yup
    .string()
    .matches(/^\d{10}$/, "Emergency phone number must be 10 digits")
    .required("Emergency phone number is required"),
});


const Register = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(regPatientSchema)
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await fetch(
                "http://localhost:8080/v1/patient",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(data),
                }
            )
            router.push("/home/patients")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="space-y-3 p-4 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded">
            <div className="space-y-3">
                <GeneralHeader headerText="Register a patient"/>
            </div>
            <form className="space-y-3 relative max-w-4xl px-2 border-1 py-5 pr-5" onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-1'>
                    <GeneralHeaderSmall headerText='Demographics'/>
                    <div className='flex gap-1 px-2'>
                        <FormInputSmall {...register('fullname')} type="text" label='Full name' name='fullname' error={errors.fullname?.message}/>
                        <FormInputSmall {...register('dob')} type="date" label='Date' name="dob" error={errors.dob?.message}/>
                        <InputDropDownSmall {...register('gender')} name='gender' error={errors.gender?.message}/>
                    </div>
                </div>
                
                <div className='space-y-1'>
                    <GeneralHeaderSmall headerText='Contact Info'/>
                    <div className='flex gap-1'>
                        <div className='w-1/3'><FormInputSmall {...register('contactNo')} type="text" label='Contact Number' name='contactNo' error={errors.contactNo?.message}/></div>
                        <div className='w-2/3'><FormInputSmall {...register('address')} type="text" label='Address' name="address" error={errors.address?.message}/></div>
                    </div>
                </div>

                <div className='space-y-1'>
                    <GeneralHeaderSmall headerText='Relationship'/>
                    <div className='flex gap-1'>
                        <FormInputSmall {...register('emergencyName')} type="text" label='Person name' name='emergencyName' error={errors.emergencyName?.message}/>
                        <FormInputSmall {...register('emergencyRelation')} type="text" label='Relation' name='emergencyRelation' error={errors.emergencyRelation?.message}/>
                        <FormInputSmall {...register('emergencyPhone')} type="text" label='Contact Number' name='emergencyPhone' error={errors.emergencyPhone?.message}/>
                    </div>
                </div>

                <ActionButton buttonText={"Register"}/>
            </form>
        </div>
    )
}

export default Register