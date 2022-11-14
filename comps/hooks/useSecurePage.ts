import useDidMountEffect from "./useDidMountEffect";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const useSecurePage = () => {
  const { status } = useSession();
  const router = useRouter();
  useDidMountEffect(() => {
    if (status !== "authenticated" && status !== "loading")
      router.push("/login");
  }, [status]);
};

export default useSecurePage;
