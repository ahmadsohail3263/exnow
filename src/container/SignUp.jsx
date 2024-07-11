import React, { useState, useMemo } from "react";
import Input from "../components/Input";
import Select from "../components/Select";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    credentials: "",
    certifications: "",
    education: "",
    other: "",
  });
  console.log("input value is " + inputValue.certifications);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    currentStudent: "false",
    phoneNumber: "",
    bio: "",
    interests: "",
    expertise: {
      workExperience: [],
      education: [],
      certifications: [],
      credentials: [],
      other: [],
    },
    scheduling: {
      availabilityOptions: [
        {
          day: "Monday",
          duration: 60,
          end: "17:00",
          start: "09:00",
        },
      ],
    },
    payment: {
      hourlyRate: 0,
    },
    agreementToTerms: true,
    isActive: true,
  });

  const taskStatus = useMemo(
    () => [
      {
        id: 0,
        value: "No",
      },
      {
        id: 1,
        value: "Yes",
      },
    ],
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addItem = (field, value) => {
    if (value.trim() !== "") {
      setForm((prevState) => ({
        ...prevState,
        expertise: {
          ...prevState.expertise,
          [field]: [...prevState.expertise[field], value],
        },
      }));
      setInputValue((prevState) => ({
        ...prevState,
        [field]: "",
      }));
    }
  };

  const deleteItem = (field, index) => {
    setForm((prevState) => ({
      ...prevState,
      expertise: {
        ...prevState.expertise,
        [field]: prevState.expertise[field].filter((_, i) => i !== index),
      },
    }));
  };

  const handleBlur = (field, value) => {
    addItem(field, value);
  };

  const handleKeyPress = (e, field, value) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(field, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInterestsChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createInputField = (label, field, items) => {
    return (
      <>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type="text"
          value={inputValue[field]}
          name={field}
          onChange={handleArrayChange}
          onBlur={() => handleBlur(field, inputValue[field])}
          onKeyDown={(e) => handleKeyPress(e, field, inputValue[field])}
          placeholder={`Type ${label.toLowerCase()} and press Enter`}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
        />
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
          {items.map((item, index) => (
            <li
              key={`${field}-${index}`}
              className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
            >
              <span>{item}</span>
              {/* <button
                onClick={() => deleteItem(field, index)}
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded block"
              >
                &#x274C;
              </button> */}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="container max-w-4xl mx-auto p-10 bg-white my-10 rounded-lg">
        <div className="">
          <h2 className="text-[30px] sm:text-[35px] font-semibold leading-[52.5px] tracking-tight text-black my-5">
            Create an Account
          </h2>
          <p>Complete the form below to sign up for our membership service.</p>
          <form onSubmit={handleSubmit} className="">
            <div className="sm:grid sm:grid-cols-2 gap-x-3 my-5">
              <Input
                type="text"
                name="firstName"
                title="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                title="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
              <Input
                type="mail"
                name="email"
                title="Email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phoneNumber"
                title="Phone Number"
                value={form.phoneNumber}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                title="Password"
                value={form.password}
                onChange={handleChange}
              />
              <Select
                label={"Current Student"}
                data={taskStatus}
                name="currentStudent"
                value={form.currentStudent}
                onChange={handleChange}
              />
              <Input
                type="datetime-local"
                name="availabilityOptions"
                title="Availability Options"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="payment"
                title="Payment Per Hour"
                value={form.payment.hourlyRate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                About Us
              </label>
              <textarea
                rows={4}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm"
                value={form.bio}
                name="bio"
              />
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-x-3 my-5">
              <div>
                {createInputField(
                  "Education",
                  "education",
                  form.expertise.education
                )}
              </div>
              <Input
                type="text"
                name="interests"
                title="Interests"
                value={form.interests}
                onChange={handleInterestsChange}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">Expertise</h3>
            <div className="sm:grid grid-cols-3 md:grid-cols-3 gap-4 my-5">
              <div>
                {createInputField(
                  "Certifications",
                  "certifications",
                  form.expertise.certifications
                )}
              </div>
              <div>
                {createInputField(
                  "Work Experience",
                  "workExperience",
                  form.expertise.workExperience
                )}
              </div>
              <div>
                {createInputField("Other", "other", form.expertise.other)}
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-[#2C7B63] text-white rounded-md "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
