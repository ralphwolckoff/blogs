import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { useState } from "react";
import { LoginFormType } from "@/types/form";

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);
  };
  return (
    <LoginView
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
