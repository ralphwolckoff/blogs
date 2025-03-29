import { firebaseLogoutUser } from "@/api/authentication";
import { Button } from "@/ui/design-sytem/button/button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
  const router = useRouter();

  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot");
    router.push("/connexion");
  };

  return (
    <div className="flex justify-center py-20">
      <Button action={handleLogoutUser} variant="danger">
        Deconnexion
      </Button>
    </div>
  );
};
