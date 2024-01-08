import { useState } from "react";
import { IconCaretDownFilled } from "@tabler/icons-react";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("logged in");
  };

  return (
    <>
      {/* gif background */}
      <div
        className={`w-full flex flex-col bg-sky-500 h-screen bg-[url('/public/tokyo.gif')] bg-no-repeat bg-cover`}
      >
        {/* hold profile top left */}
        <div className="flex items-center p-5 h-fit">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <IconCaretDownFilled style={{ color: "white" }} />
        </div>
        {/* holds title and right sign in */}
        <div className="flex items-center justify-evenly h-screen p-5 w-full ">
          <div className="flex flex-col items-start w-[600px] [&>*]:m-2">
            <p className="text-white text-7xl font-medium">🌎 Go nomad</p>
            <p className="text-white text-3xl font-normal">
              Join a global community of remote workers living and travelling
              around the world
            </p>
            <div className="flex">
              <img
                className="w-10 h-10 rounded-full object-cover outline outline-white z-30"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
              <img
                className="w-10 h-10 rounded-full object-cover outline outline-white z-20"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
              <img
                className="w-10 h-10 rounded-full object-cover outline outline-white z-10"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </div>
          </div>

          {/* card */}
          <div className="bg-white p-6 shadow-lg rounded-xl w-80 m-2">
            <img
              className="w-full h-[150px] object-cover rounded-xl hover:opacity-80 hover:cursor-pointer"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                required
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg shadow-sm px-3 py-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600"
              ></input>
              <button
                type="submit"
                className="bg-red-600 w-full rounded-lg py-2 text-white font-bold text-lg"
              >
                Go nomad
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* companies logos */}

      <div className="flex justify-center m-7 [&>*]:w-16 [&>*]:mx-5 ">
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
      </div>

      {/* filters and search bar */}
      
    </>
  );
}

export default App;
