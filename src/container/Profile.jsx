import React, { useState } from "react";
import profileImage from "../assets/profile.jpg";
import Input from "../components/Input";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("userInfo");

  return (
    <>
      <div>
        <div className="grid sm:grid-cols-12 gap-x-2 sm:mx-10 sm:mt-10">
          {/* left side bar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 border-r-2 border-[#2C7B63]">
            <div className="flex flex-col justify-center items-center gap-y-4">
              <h2 className="text-xl font-bold">My Profile</h2>
              <img
                src={profileImage}
                alt=""
                className="w-[200px] h-[200px] rounded-full object-cover"
              />

              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-xl font-semibold">Developer</p>



            </div>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 mx-10">
            <div>
              <div className="border-b-2 border-[#2C7B63]">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                  <li className="me-2">
                    <button
                      onClick={() => setActiveTab("userInfo")}


                      className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                        activeTab === "userInfo"
                          ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 me-2 ${
                          activeTab === "userInfo"
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                        }`}
                        aria-hidden="true"

                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      User Information
                    </button>
                  </li>

                  <li className="me-2">
                    <button
                      onClick={() => setActiveTab("expert")}
                      className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                        activeTab === "expert"
                          ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 me-2 ${
                          activeTab === "expert"
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                      Expert
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      onClick={() => setActiveTab("availability")}
                      className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                        activeTab === "availability"
                          ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                          : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 me-2 ${
                          activeTab === "availability"
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                      </svg>
                      Availability
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conditional Rendering of Forms */}
            {activeTab === "userInfo" && (
              <div>
                <h2 className="text-xl font-bold mt-5">User Information</h2>
                <form className="max-w-sm mt-5">
                  <Input
                    type="text"
                    name="name"
                    autoComplete="name"
                    title="Name"
                  />
                  <Input
                    type="email"
                    name="email"
                    autoComplete="email"
                    title="Email"
                  />
                  <Input
                    type="text"
                    name="number"
                    autoComplete="number"
                    title="Phone Number"
                  />
                  <Input
                    type="text"
                    name="address"
                    autoComplete="address"
                    title="Address"
                  />
                </form>
              </div>
            )}

            {activeTab === "expert" && (
              <div>
                <h2 className="text-xl font-bold mt-5">Expert Information</h2>
                <form className="max-w-sm mt-5">
                  <Input
                    type="text"
                    name="qualification"
                    autoComplete="qualification"
                    title="Qualification"
                  />
                  <Input
                    type="text"
                    name="expertise"
                    autoComplete="expertise"
                    title="Expertise"
                  />
                  <Input
                    type="text"
                    name="experience"
                    autoComplete="experience"
                    title="Experience"
                  />
                  <Input
                    type="text"
                    name="interest"
                    autoComplete="interest"
                    title="Interest"
                  />
                </form>
              </div>
            )}

            {activeTab === "availability" && (
              <div className="mt-5">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Availability Status
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
