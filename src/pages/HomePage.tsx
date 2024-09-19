import { useForm } from "react-hook-form";
import { adminLoginValidator } from "../lib/zodValidater";
import { axiosInstance } from "../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginData {
  email: string;
  password: string;
}

export interface ErrorResponse {
  message: string;
}

const HomePage = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginData>();

  const sentRequest = async (data: LoginData) => {
    try {
      const res = await axiosInstance.post("admin/auth/login", data);
      if (res.data.success) {
        toast.success(res.data.message || "Login successful");

        navigate("/dashboard");
      } else {
        toast.success(res.data.message || "Login failed");
      }
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  const onSubmitHandler = handleSubmit((data) => {
    const parse = adminLoginValidator.safeParse(data);
    if (!parse.success) {
      toast(parse.error.issues[0].message, {
        style: { background: "red", color: "white" },
      });
      return;
    }
    sentRequest(parse.data);
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-[450px] rounded-sm">
        <CardHeader className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Are you admin?</h1>
          <p>Please authenticate to continue</p>
        </CardHeader>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center gap-4 w-full"
        >
          <div className="w-10/12 flex flex-col gap-4 ">
            <Input
              {...register("email")}
              type="text"
              placeholder="jhondoe@example.com"
            />
            <Input
              {...register("password")}
              placeholder="Enter your password"
              type="password"
              // type={isVisible ? "text" : "password"}
            />
          </div>
          <Button type="submit" className="w-10/12 my-5" color="primary">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default HomePage;
