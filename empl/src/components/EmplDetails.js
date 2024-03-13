import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";

const EmplDetails = ({ data }) => {
  console.log("Logged inside empl details id is ", data);
  const [name, setName] = useState(data.data.name);
  const [designation, setDesignation] = useState(data.data.designation);
  const [dob, setDob] = useState(data.data.dob);
  const [office_photo_url, setOfficePhotoUrl] = useState(
    data.data.officePhotoLink
  );
  const [personal_photo_url, setPersonalPhotoUrl] = useState(
    data.data.personalPhotoLink
  );
  const [email, setEmail] = useState(data.data.email);
  const [phone, setPhone] = useState(data.data.phoneNumber);
  const [manager, setManager] = useState(data.data.managerDto.managerName);
  const [img, setImg] = useState(data.data.officePhotoLink);
  const [isAlternate, setIsAlternate] = useState(false);
  const handleImageClick = () => {
    setIsAlternate(!isAlternate);
  };

  return (
    <>
      <div className="">
        <div className=" bg-indigo-500 rounded-3xl  ">
          <div className=" absolute left-[11.5rem] top-[3rem] w-45 h-45 rounded-2xl mx-auto z-[99999] bg-[pink] )] bg-cover w-48 h-48">
            <img
              src={isAlternate ? office_photo_url : personal_photo_url}
              onClick={handleImageClick}
            ></img>
          </div>
        </div>
        <div className="absolute top-[9rem] left-14 pt-[6rem] w-1/4 mx-auto my-3 bg-white rounded-2xl shadow-md p-5 z-1">
          <h2 className="text-center text-2xl font-semibold mt-3">{name}</h2>
          <div className="text-center text-gray-600 mt-1">{designation}</div>
          <div className="flex justify-center mt-5">
            <a href="/" className="text-blue-500 hover:text-blue-700 mx-3">
              <span className="socialbtn text-[#1773EA]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </span>
            </a>
            <a href="/" className="text-blue-500 hover:text-blue-700 mx-3">
              <span className="socialbtn text-[#1C9CEA]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </span>
            </a>
            <a
              href="https://moneyview.slack.com/team/U06L0TF17HV"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 mx-3"
            >
              <span className="socialbtn text-[#1C9CEA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.94em"
                  height="1em"
                  viewBox="0 0 512 130"
                >
                  <path d="m163.593 101.885l6.387-14.835c6.902 5.151 16.07 7.83 25.136 7.83c6.696 0 10.92-2.576 10.92-6.49c-.103-10.92-40.074-2.37-40.383-29.773c-.103-13.907 12.26-24.621 29.772-24.621c10.405 0 20.81 2.575 28.227 8.447l-5.975 15.144c-6.799-4.327-15.246-7.417-23.282-7.417c-5.46 0-9.065 2.575-9.065 5.872c.103 10.714 40.383 4.842 40.795 31.008c0 14.217-12.053 24.21-29.36 24.21c-12.672 0-24.313-2.988-33.172-9.375m245.08-20.192l17.616 9.787c-6.593 11.847-19.161 19.78-33.687 19.78c-21.325 0-38.632-17.307-38.632-38.632s17.307-38.632 38.632-38.632c14.423 0 27.094 8.035 33.687 19.78l-17.616 9.786c-3.194-5.563-9.169-9.374-16.071-9.374c-10.199 0-18.44 8.241-18.44 18.44c0 10.199 8.241 18.44 18.44 18.44c6.902 0 12.877-3.812 16.07-9.375M234.984 1.957h22.046v107.86h-22.046zm199.958 0h22.046v63.356l24.93-29.772h26.991l-30.802 35.85l33.275 38.426h-28.227L456.988 77.47v32.347h-22.046zM322.55 81.9V63.665c-3.194-5.357-9.787-9.477-17.204-9.477c-10.2 0-18.44 8.241-18.44 18.44c0 10.199 8.24 18.44 18.44 18.44c7.417 0 14.01-3.915 17.204-9.169m0-46.358h22.046v74.173H322.55v-8.756c-3.606 6.078-12.569 10.302-21.943 10.302c-19.368 0-34.614-17.307-34.614-38.735s15.246-38.529 34.614-38.529c9.374 0 18.337 4.224 21.943 10.302z"></path>
                  <path
                    fill="#e01e5a"
                    d="M27.3 81.796c0 7.52-6.078 13.599-13.599 13.599A13.585 13.585 0 0 1 .103 81.796c0-7.52 6.078-13.598 13.598-13.598H27.3zm6.799 0c0-7.52 6.078-13.598 13.598-13.598c7.52 0 13.599 6.078 13.599 13.598v33.996c0 7.52-6.078 13.599-13.599 13.599A13.585 13.585 0 0 1 34.1 115.792z"
                  ></path>
                  <path
                    fill="#36c5f0"
                    d="M47.697 27.197A13.585 13.585 0 0 1 34.1 13.598C34.099 6.078 40.177 0 47.697 0s13.599 6.078 13.599 13.598v13.599zm0 6.902c7.52 0 13.599 6.078 13.599 13.598c0 7.52-6.078 13.599-13.599 13.599H13.598A13.585 13.585 0 0 1 0 47.697C0 40.177 6.078 34.1 13.598 34.1z"
                  ></path>
                  <path
                    fill="#2eb67d"
                    d="M102.194 47.697c0-7.52 6.078-13.598 13.598-13.598c7.52 0 13.599 6.078 13.599 13.598c0 7.52-6.078 13.599-13.599 13.599h-13.598zm-6.8 0c0 7.52-6.077 13.599-13.598 13.599a13.585 13.585 0 0 1-13.598-13.599V13.598C68.198 6.078 74.276 0 81.796 0c7.52 0 13.599 6.078 13.599 13.598z"
                  ></path>
                  <path
                    fill="#ecb22e"
                    d="M81.796 102.194c7.52 0 13.599 6.078 13.599 13.598c0 7.52-6.078 13.599-13.599 13.599a13.585 13.585 0 0 1-13.598-13.599v-13.598zm0-6.8a13.585 13.585 0 0 1-13.598-13.598c0-7.52 6.078-13.598 13.598-13.598h34.1c7.52 0 13.598 6.078 13.598 13.598c0 7.52-6.078 13.599-13.599 13.599z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="p-7 rounded-3xl mt-7 bg-[#F3F6F6] ">
            <div className="flex py-2.5 border-b border-[#E3E3E3] ">
              <span className="p-2 rounded-md bg-white text-[#E93B81] shadow-md hover:bg-[#E93B81] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smartphone"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C]">Phone</div>
                <div className="">
                  <a
                    className="hover:text-[#FA5252] duration-300 transition"
                    href="tel:+91 7033755056"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] ">
              <span className="p-2 rounded-md bg-white text-[#FD7590] shadow-md hover:bg-[#E93B81] hover:text-white">
                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z">
                                    </path>
                                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mails"
                >
                  <rect width="16" height="13" x="6" y="4" rx="2" />
                  <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
                  <path d="M2 8v11c0 1.1.9 2 2 2h14" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] ">EMAIL</div>
                <div className="">
                  <a
                    className="hover:text-[#FA5252] duration-300 transition"
                    href="mailto:ibthemes21@gmail.com"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3]">
              <span className="p-2 rounded-md bg-white text-[#C17CEB] shadow-md hover:bg-[#E93B81] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar-days"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] ">Birthday</div>
                <div className="">{dob}</div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3]  ">
              <span className="p-2 rounded-md bg-white text-[#E93B81] shadow-md hover:bg-[#E93B81] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-person-standing"
                >
                  <circle cx="12" cy="5" r="1" />
                  <path d="m9 20 3-6 3 6" />
                  <path d="m6 8 6 2 6-2" />
                  <path d="M12 10v4" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C]">Manager</div>
                <div className="">
                  <div className="">{manager}</div>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] ">
              <span className="p-2 rounded-md bg-white text-[#FD7590] shadow-md hover:bg-[#E93B81] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users-round"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] ">Communities</div>
                <div className="">
                  <div className="">XYZ</div>
                </div>
              </div>
            </div>

            <div className="flex py-2.5 undefined">
              <span className="p-2 rounded-md bg-white text-[#c0ef74] shadow-md hover:bg-[#E93B81] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tags"
                >
                  <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
                  <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
                  <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] ">Tags</div>
                <div className="">xyz</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <a
              href="/images/cv.pdf"
              download=""
              className="inline-flex items-center mx-auto bg-gradient-to-r from-[#fa5252] to-[#dd2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
            >
              <Download className="mr-2" />
              Download Offer Letter
            </a>
            {/* <a href="/" download="" className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
                            <img src="src/components/download.png" alt="icon" className="mr-2"/>Download CV</a> */}
          </div>
          <div className="flex items-center justify-center mx-auto">
            <label className="inline-flex items-center mx-auto bg-gradient-to-r from-[#fa5252] to-[#dd2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
              <svg
                className="w-8 h-8 pr-1 pt-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mr-2">Upload Your Image</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmplDetails;
