// useAuth.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, setCookie } from "cookies-next";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store";

const baseurl = "https://exam-prep-app-1.onrender.com/api/v1/auth";

const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);

  const login = async (data) => {
    setLoading(true);
    console.log(data);

    const formdata = new FormData();
    formdata.append("username", data.username);
    formdata.append("password", data.password);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    const res = await fetch(baseurl + "/login/", requestOptions);

    if (!res.ok) {
      const result = await res.json();
      if (res.status === 400) {
        toast.error(result.message);
        setLoading(false);
        return;
      }
      toast.error(result.message);
      setLoading(false);
      return console.error(res);
    } else {
      const result = await res.json();
      if (result) {
        console.log(result);
        setCookie("userToken", result.access);
        setAuthentication(true);
        toast.success("User successfully logged in!");
        setLoading(false);
        router.push("/");
        router.refresh();
      }
    }
  };

  const signup = async (data) => {
    setLoading(true);
    console.log(data);

    const formdata = new FormData();
    formdata.append("username", data.username);
    formdata.append("email", data.email);
    formdata.append("password1", data.password);
    formdata.append("password2", data.confirm_password);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    const res = await fetch(baseurl + "/signup/", requestOptions);

    if (!res.ok) {
      try {
        const errMsg = await res.json();
        toast.error(
          errMsg?.errors?.fields?.username?.[0]
            ? "Username already in use"
            : "An error occurred! Please try again!"
        );
      } catch (error) {
        console.log(error);
        toast.error("Email already in use");
      }
      setLoading(false);
    } else {
      const result = await res.json();
      if (result) {
        toast.success("You Successfully signed up.");
        router.push("/auth/login");
        router.refresh();
      }
    }
  };

  const logout = async () => {
    const requestOptions = {
      method: "POST",
    };
    const res = await fetch(baseurl + "/logout/", requestOptions);

    if (!res.ok) {
      toast.error("Unable to logout! Please try again");
    } else {
      deleteCookie("userToken");
      setAuthentication(false);
      // // deleteCookie('user')
      // setUser({})
      router.push("/");
      toast.success("Successfully logged out!");
      router.refresh();
    }
  };

  return { user, loading, login, signup, logout };
};

export default useAuth;
