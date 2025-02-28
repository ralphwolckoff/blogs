import { FormsType } from "@/types/form";
import { Button } from "@/ui/design-sytem/button/button";
import { Input } from "@/ui/design-sytem/forms/input";
interface Props {
  form: FormsType;
}
export const ForgetPasswordForm = ({ form }: Props) => {
  const { onSubmit, register, errors, isLoading, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        type="email"
        placeholder="johndoe@gmail.com"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="email"
      />
      <Button isLoading={isLoading} type="submit" fullWith>
        Envoyer
      </Button>
    </form>
  );
};
