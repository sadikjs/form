"use client"
import FieldSet from "@/components/FieldSet";
import Field from "@/components/Field";
import { useForm } from "react-hook-form";

const LoginPage =()=>{
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        setError
    } = useForm()

  const SubmitForm =(formData)=>{
    console.log(formData)
    const user ={email:"x@gmail.com", password: "123456"}
    const found = formData.email === user.email && formData.password === user.password
    if(!found){
        setError("root.random", {
            message: `user with email ${formData.email} not found`, 
            type: "random"
        })
    }
    } 

    return(
        <form onSubmit={handleSubmit(SubmitForm)}>
            <FieldSet label="login credentials">
                <Field label="E-mail" error={errors.email}>
                    <input 
                    {...register("email", {required: "Email is required!"})}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter email here"
                    />
                </Field>
                <Field label="Password" error={errors.password}>
                    <input 
                    {...register("password", {required: "password is requried!", 
                        minLength:{
                            value: 8, 
                            message: "password minimum at last 8 character"
                        }
                    })}
                    className={`p-2 border border-bx rounded-sm ${!!errors.password ? "border-red-500" : "border-gray-200"}`}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter password here"
                    />
                </Field>
                <div>{errors?.root?.random?.message}</div>
                <Field>
                    <button
                    className="bg-blue-800 rounded-sm p-3"
                    >
                        login
                    </button>
                </Field>
            </FieldSet>
        </form>
    );
}

export default LoginPage