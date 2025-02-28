import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";
import { useState } from "react";
import { ForgetPasswordFormType } from "@/types/form";

export const ForgetpasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormType>();

  const onSubmit: SubmitHandler<ForgetPasswordFormType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);
  };
  return (
    <ForgetPasswordView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  );
};
