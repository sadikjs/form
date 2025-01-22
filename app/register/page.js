"use client";
import { useForm } from "react-hook-form";
import FieldSet from "@/components/FieldSet";
import Field from "@/components/Field";
import { studentsRegister } from "../actions";
import { useState } from "react";
const RegisterForm = () => {
  const [stutus, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const registerHandle = async (data) => {
    const response = await studentsRegister(data);
    setStatus(response.message);
    if (response.success) reset();
  };
  return (
    <form
      className="w-9/12 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(registerHandle)}
    >
      <FieldSet
        className="w-10/12 flex flex-col justify-center items-center border border-box border-slate-500"
        label="Student Register form"
      >
        <Field label="Name" error={errors.picture}>
          <input
            {...register("name", { required: "name is required" })}
            className={` border border-box rounded-sm ${
              !!errors.name ? "border-red-600" : "border-green-600"
            } `}
            type="text"
            id="name"
            name="name"
            placeholder="enter name here"
          />
        </Field>
        <Field label="age" error={errors.age}>
          <input
            {...register("age", { required: "minimum age 20" })}
            className={` border border-box rounded-sm ${
              !!errors.age ? "border-red-600" : "border-green-600"
            } `}
            type="number"
            id="age"
            name="age"
            placeholder="enter age"
          />
        </Field>
        <Field label="email" errors={errors.email}>
          <input
            {...register("email", { required: "email is required" })}
            className={` border border-box rounded-sm ${
              !!errors.email ? "border-red-600" : "border-green-600"
            } `}
            type="text"
            id="email"
            name="email"
            placeholder="enter email here"
          />
        </Field>
        <Field label="password" errors={errors.password}>
          <input
            {...register("password", { required: "password is required" })}
            className={` border border-box rounded-sm ${
              !!errors.password ? "border-red-600" : "border-green-600"
            } `}
            type="text"
            id="password"
            name="password"
            placeholder="enter password here"
          />
        </Field>
        <Field label="address" error={errors.address}>
          <textarea
            {...register("address", { required: "addres is required" })}
            className={` border border-box rounded-sm ${
              !!errors.address ? "border-red-600" : "border-green-600"
            } `}
            id="address"
            name="address"
            rows="4"
            cols="30"
          />
        </Field>
        <button type="submit">submit</button>
        {stutus && <div>{stutus}</div>}
      </FieldSet>
    </form>
  );
};
export default RegisterForm;
