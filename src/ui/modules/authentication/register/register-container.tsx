import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormType } from "@/types/form";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
  const {
    value: isLoading,
    setValue: setIsLoading,
    toggle,
  } = useToggle({
    initial: true,
  });
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormType) => {
    const { data, error } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    setIsLoading(false);
    toast.success("User created successfully");
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;

    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Password must be at least 6 characters",
      });
      return;
    }
    handleCreateUserAuthentication(formData);
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
