import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { useEffect, useState } from "react";
import { LoginFormType } from "@/types/form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user", user);
      } else {
        console.log("Tu n'es pas connecté");
      }
    });
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormType>();

  const handleSignInUser = async ({ email, password }: LoginFormType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue a toi !");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au moins 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
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
