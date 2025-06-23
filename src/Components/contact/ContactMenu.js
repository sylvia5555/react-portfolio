import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify"; // for security purposes

export default function ContactMenu() {
  const intialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(intialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [issent, setIsSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    setIsLoading(true);
    const { name, email, message } = formData;
    const sanitizedData = {
      name: "Name: " + DOMPurify.sanitize(name),
      email: "Email: " + DOMPurify.sanitize(email),
      name: "Message: " + DOMPurify.sanitize(message),
    };

    // to send email using emailjs
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    // create in .env.local

    emailjs
      .send(serviceID, templateID, sanitizedData, userID)
      .then((response) => {
        console.log("Email is sent successfully!", response.text);
        setFormData(intialState);
        setErrors({});
        setIsSent(false);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};
    if (!formData[0].trim()) {
      errors.name = formData[0] + " is required";
    }
  };
}
