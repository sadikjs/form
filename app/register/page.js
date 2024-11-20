"use client"
import { useFieldArray, Controller, useForm } from "react-hook-form";
import Field from "@/components/Field";
import FieldSet from "@/components/FieldSet";
import Number from "@/components/Number";
const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        control
    } = useForm()
    const { fields, append, remove } = useFieldArray({
        name: "socials",
        control
    })
    const registerHandle = (formData) => {
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit(registerHandle)}>
            <FieldSet label="Registration Form">
                <Field label="picture insert" error={errors.picture}>
                    <input
                    {...register("picture", {required: "picture is required"})}
                    type="file"
                    name="picture"
                    id="picture"
                    />
                </Field>
                <Field label="Full Name" error={errors.fname}>
                    <input
                        {...register("fname", { required: "fname is required" })}
                        className={`p-2 border border-box rounded-lg ${!!errors.fname ? "border-red-600" : "border-gray-300"}`}
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="enter fullname here"
                    />
                </Field>
                <Field label="E-mail" error={errors.email}>
                    <input
                        {...register("email", { required: "Email is required!" })}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter email here"
                    />
                </Field>
                <Field label="Password" error={errors.password}>
                    <input
                        {...register("password", {
                            required: "password is requried!",
                            minLength: {
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
                <Field label="Age" error={errors.age}>
                    <Controller 
                        name="age"
                        control={control}
                        defaultValue={1}
                        render={({field: {ref, ...field}})=>(
                            <Number 
                            id="age"
                            className={`p-2 border box-border w-full rounded-md ${
                                !!errors.age
                                    ? "border-red-500"
                                    : "border-gray-200"
                            }`}
                            {...field}
                            />
                        )}
                    rules={{
                        max:{
                            value: 100, 
                            message: "number in input minimum 0 and maximum 100"
                        }
                    }}
                    />
                </Field>
            </FieldSet>
            <FieldSet label="Social Link Add">
                {
                    fields.map((social, index) => {
                        return(
                        <div key={social.id}>
                            <Field label="Social Name">
                                <input
                                    {...register(`socials[${index}].name`)}
                                    type="text"
                                    id={`socials[${index}].name`}
                                    name={`socials[${index}].name`}
                                />
                            </Field>
                            <Field label="Social url">
                                <input
                                    {...register(`socials[${index}].url`)}
                                    type="url"
                                    id={`socials[${index}].url`}
                                    name={`socials[${index}].url`}
                                />
                            </Field>
                            <button onClick={()=>remove(index)}>
                                &#8722;
                            </button>
                        </div>
                        )
                    })
                }
                <button
                    onClick={() => append({ name: "", url: "" })}
                >Add</button>
            </FieldSet>
            <Field>
                <button
                    className="bg-blue-800 rounded-sm p-3"
                >
                    login
                </button>
            </Field>
        </form>
    );
}

export default Registration