import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/http";
import type { User } from "../types/user.type";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";

interface RegisterPayload extends Pick<User, "email" | "username"> {
  password: string;
}

interface LoginPayload extends Pick<User, "email"> {
  password: string;
}

const useRegister = () => {
  return useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const { data } = await axiosInstance.post("/auth/register", payload);

      return data;
    },
    onSuccess: () => {
      toast.success("Register successfully");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.log(error);

        toast.error(error.response?.data.message);
      }
    },
  });
};

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);

      return data;
    },
    onSuccess: () => {
      toast.success("Login successfully");
      navigate("/");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.log(error);

        toast.error(error.response?.data.message);
      }
    },
  });
};

export { useRegister, useLogin };
