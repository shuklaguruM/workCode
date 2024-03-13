import React from "react";
// import { TEInput, TERipple } from "tw-elements-react";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import "../index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      console.log("Response: ", response); // Assuming the response contains token or user data
      // Handle successful login, such as storing token in local storage or context
      if (response.status === 200) {
        navigate(`/user/${username}`);
      }
    } catch (error) {
      setError("Invalid username or password");
      console.error("Login error:", error);
    }
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-image  ">
      {/* <div class="text-center">
                <img
                    class="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo" />
                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Lotus
                </h4>
            </div> */}
      <div className="md:w-1/3 max-w-sm">
        <img
          className="mx-auto w-48"
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        />
        {/* <div className="flex items-center justify-center mx-auto mb-9 mt-1 text-xl font-semibold">
                    <h4>
                        Lotus
                    </h4>
                </div> */}
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt=""
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <FiGithub
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <SiGmail
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label htmlFor="username">Username:</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2 mt-2"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-2"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center md:text-center">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="/"
          >
            Forgot Password?
          </a>
        </div>
        {/* <div className="text-center md:text-left">
          <button
            // className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            className="inline-flex items-center mx-auto bg-gradient-to-r from-[#fa5252] to-[#dd2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-4 py-2 text-lg text-white rounded-[35px] mt-4"
            type="submit"
          >
            Login
          </button>
        </div> */}
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import { useState } from "react";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BiLogoFacebook } from "react-icons/bi";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// //mport endpoints from '../../services/apis'

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/login", {
//         username,
//         password,
//       });
//       console.log("Response: ", response); // Assuming the response contains token or user data
//       // Handle successful login, such as storing token in local storage or context
//       if (response.status === 200) {
//         navigate("/user/", { state: { username } });
//       }
//     } catch (error) {
//       setError("Invalid username or password");
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
//       <div className="md:w-1/3 max-w-sm">
//         <img
//           src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//           alt=""
//         />
//       </div>
//       <div className="md:w-1/3 max-w-sm">
//         <div className="text-center md:text-left">
//           <label className="mr-1">Sign in with</label>
//           <button
//             type="button"
//             className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3B71CA]"
//           >
//             <BiLogoFacebook
//               size={20}
//               className="flex justify-center items-center w-full"
//             />
//           </button>
//           <button
//             type="button"
//             className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3B71CA]"
//           >
//             <AiOutlineTwitter
//               size={20}
//               className="flex justify-center items-center w-full"
//             />
//           </button>
//         </div>
//         <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//           <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
//             Or
//           </p>
//         </div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleLogin();
//           }}
//         >
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2 mt-2"
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-2"
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="text-center md:text-center">
//             <button
//               className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
//               type="submit"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="mt-4 flex justify-between font-semibold text-sm">
//           <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
//             <input className="mr-1" type="checkbox" />
//             <span>Remember Me</span>
//           </label>
//           <a
//             className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//         <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
//           Don&apos;t have an account?{" "}
//           <a
//             className="text-red-600 hover:underline hover:underline-offset-4"
//             href="#"
//           >
//             Register
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
