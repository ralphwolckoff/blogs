import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormType } from "@/types/form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config";

export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormType>();

  const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
    setIsLoading(true);
    console.log("formData", formData);
    const { email, password } = formData;

    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       setIsLoading(false);
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setIsLoading(false);
    //       console.log(errorCode, errorMessage);

    //     });
  };

  return (
    <>
      <RegisterView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
