import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useLoginMutation } from "../redux/features/auth/authApi";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  type IForm = {
    email: String;
    password: String;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();
  const [login, { error }] = useLoginMutation();
  // console.log(error?.data?.error?.errors)

  if (error) {
    if ("data" in error) {
      const errorMessage = (error as FetchBaseQueryError).data as {
        error?: { errors?: string };
      };
      toast.error(errorMessage.error?.errors || "An unknown error occurred.");
    } else {
      toast.error("An unexpected error occurred.");
    }
  }

  const onsubmit = async (data: IForm) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();

    const toastId = toast.loading("Login.....");
    const token = res?.data;
    const user = verifyToken(token);

    dispatch(setUser({ user: user, token: token }));
    toast.success("Login in successfull", { id: toastId });

    if (user) {
      navigate("/");
    }
  };

  const handelDemoLogin = async (role: "user" | "admin") => {
    let payload = null;

    if (role === "user") {
      payload = {
        email: "abcd@gmail.com",
        password: "abcd123",
      };
    } else if (role === "admin") {
      //   toast.error("Admin role not implemented yet", {
      //     duration: 1500,
      //   });
      payload = {
        email: "admin@gmail.com",
        password: "admin123",
      };
    }

    try {
      const res = await login(payload).unwrap();
      const toastId = toast.loading("Login.....");

      const token = res?.data;
      const user = verifyToken(token);

      dispatch(setUser({ user: user, token: token }));
      toast.success("Login in successfull", { id: toastId });

      if (user) {
        navigate("/");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(/assets/login_bg.png)",
        borderRadius: "8px",
      }}
      className="bg-center bg-cover h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/50 bg-opa rounded-lg"></div>

      <div className="relative bg-linear-to-bl from-[#933372] to-[#6A97FF] bg-opacity-40 backdrop-blur-lg p-8 rounded-lg shadow-lg md:w-1/2 w-11/12 max-w-[500px]">
        <div className="text-white">
          <h2 className="text-xl font-semibold text-center border-b-2 w-fit mx-auto pb-2 px-4">
            Login your account
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4 text-start">
          <p className="text-lg text-[#4E5562] font-normal dark:text-gray-300">
            Demo Credentials:
          </p>
          <div className="text-sm flex text-[#4E5562] font-normal dark:text-gray-300 space-x-3">
            <button
              onClick={() => handelDemoLogin("user")}
              className="btn bg-black border-none rounded-full text-white/70 hover:text-[#F55266] hover:bg-white hover:shadow-md"
            >
              Login as user
            </button>
            <button
              onClick={() => handelDemoLogin("admin")}
              className="btn bg-black border-none rounded-full text-white/70 hover:text-[#F55266] hover:bg-white hover:shadow-md"
            >
              {" "}
              Login as Admin
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="fieldset space-y-4 mt-6"
        >
          <div className="space-y-1.5">
            <label className="fieldset-label font-medium text-white">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required***" })}
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              className="input w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black opacity-60 text-white"
              placeholder="Email"
            />
            <p className="text-[#BD1616] font-semibold text-[14px] ml-3 flex justify-start">
              {errors.email?.message}
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="fieldset-label font-medium text-white">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required***" })}
              aria-invalid={errors.password ? "true" : "false"}
              type="password"
              className="input w-full px-4 py-2 border-[1.5px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black opacity-60 text-white"
              placeholder="Password"
            />
            <p className="text-[#BD1616] font-semibold text-[14px] ml-3 flex justify-start">
              {errors.password?.message}
            </p>
          </div>

          <button className="btn btn-neutral mt-4 w-full py-2 rounded-md">
            Login
          </button>

          <p className="text-white flex justify-start font-normal text-[16px]">
            Don`t have and account?{" "}
            <Link to="/register" className="underline ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
