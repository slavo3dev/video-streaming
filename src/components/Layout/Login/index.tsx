import { FC } from "react";
import { useState } from "react";
import { magic } from "lib/magic-client";
import { useRouter } from "next/router";
import Image from "next/image";
export const Login: FC = () => {

  const router = useRouter();
  const [authData, setAuthData] = useState({ email: "", userMsg: "" })
  const handleOnChangeEmail = (e: { target: { value: string }, preventDefault: () => void }) => {
    e.preventDefault();
    setAuthData({ email: e.target.value, userMsg: "" })
  };
  const handleLoginWithEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let emailInput = authData.email;
    if (emailInput) {
      // log in a user by their email
      try {
        console.log(emailInput)
        await magic.auth.loginWithMagicLink({
          email: emailInput
        })
        router.reload()
      }
      catch (error) {
        // Handle errors if required!
        console.error("Something went wrong logging in", error);
      }
    } else {
      setAuthData({ email: "", userMsg: "Please enter valid email" });
    }
  };
  return (
    <div className="flex flex-col min-h-screen">

      <Image className="center m-0 absolute top-1/4 left-2/4" width={400} height={300}src={"/../public/FClogo.jpg"} alt={"FC Logo"}></Image>
      <div className="center m-0 absolute top-3/4 left-2/4">

        <form className=" w-80 items-start h-64 p-8 justify-start rounded-md text-left flex flex-col  showcase-content relative">
          <h1 className="text-white mb-5 text-2xl font-bold">Sign In</h1>
          <div className="w-64 h-48 flex flex-col ">
            <input
              className="email rounded-md p-2 h-12 mb-7 w-full form-info-email"
              type="email"
              placeholder="Email"
              onChange={handleOnChangeEmail}
            />
          </div>
          <div className="btn">
            <button
              className="bg-red-600 w-64 text-white cursor-pointer font-bold rounded-md btn-primary p-2"
              type="submit"
              onClick={handleLoginWithEmail}
            >
              Sign in
            </button>
            <p className="text-white">{authData.userMsg}</p>
          </div>
          <div className="text-white">
            <div>
              <input value="true" type="checkbox" />
              <label>Remember me</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};