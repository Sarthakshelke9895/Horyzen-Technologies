import React from 'react'
import { useState } from "react";
import Navbar2 from '../Navbar2/Navbar2';

import axios from "axios";

import './Apply.css'
import Footer from '../Footer/Footer';

const Apply = () => {


  const [resumeName, setResumeName] = useState("No file selected");
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  college: "",
  course: "",
  internship: "",
  message: "",
  github: ""
});

const [errors, setErrors] = useState({});

const [loading, setLoading] = useState(false);

const [resume, setResume] = useState(null);
 
const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));

    const error = validateField(name, value);

    setErrors(prev => ({
        ...prev,
        [name]: error
    }));

};
const validate = () => {

    const temp = {};

   if (!formData.name || formData.name.trim() === "") {
    temp.name = "Full Name is required";
}

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        temp.phone = "Enter a valid phone number";
    }

   if (!formData.email.trim()) {

    temp.email = "Email is required";

    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

        temp.email = "Please enter a valid email address.";

    }

    if (!formData.college.trim()) {
        temp.college = "College is required";
    }

    if (!formData.course.trim()) {
        temp.course = "Course is required";
    }

    if (!formData.internship) {
        temp.internship = "Select an internship";
    }

    if (!formData.message.trim()) {
        temp.message = "This field is required";
    }

    if (
        formData.github &&
        !/^https:\/\/(www\.)?github\.com\/.+/.test(formData.github)
    ) {
        temp.github = "Enter a valid GitHub URL";
    }

    if (!resume) {
        temp.resume = "Please upload your resume";
    }

    console.log("Validation:", temp);
    setErrors(temp);

// Scroll to first error
if (Object.keys(temp).length > 0) {

    const firstError = Object.keys(temp)[0];

    const element = document.getElementById(firstError);

    if (element) {

        element.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {
            element.focus();
        }, 500);

    }

}

return Object.keys(temp).length === 0;

};

const validateField = (name, value) => {

    switch (name) {

        case "name":

            if (!value.trim())
                return "Full Name is required.";

            if (value.trim().length < 3)
                return "Name should contain at least 3 characters.";

            return "";

        case "phone":

            if (!value.trim())
                return "Phone Number is required.";

            if (!/^[6-9]\d{9}$/.test(value))
                return "Please enter a valid 10-digit phone number.";

            return "";

        case "email":

            if (!value.trim())
                return "Email Address is required.";

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                return "Please enter a valid email address.";

            return "";

        case "college":

            if (!value.trim())
                return "College Name is required.";

            return "";

        case "course":

            if (!value.trim())
                return "Course is required.";

            return "";

        case "internship":

            if (!value)
                return "Please select an internship.";

            return "";

        case "message":

            if (!value.trim())
                return "Please tell us how you heard about Horyzen.";

            return "";

        case "github":

            if (
                value &&
                !/^https:\/\/(www\.)?github\.com\/.+/.test(value)
            )
                return "Please enter a valid GitHub URL.";

            return "";

        default:

            return "";

    }

};
const validateResume = (file) => {

    if (!file)
        return "Please upload your resume.";

    const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowed.includes(file.type))
        return "Only PDF, DOC and DOCX files are allowed.";

    if (file.size > 5 * 1024 * 1024)
        return "Maximum file size is 5 MB.";

    return "";

};

const handleResume = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    // Validate the file
    const resumeError = validateResume(file);

    // Update the error state
    setErrors(prev => ({
        ...prev,
        resume: resumeError
    }));

    // Stop here if invalid
    if (resumeError) return;

    // Save the file
    setResume(file);

    // Display file name
    setResumeName(file.name);

    // Reset upload animation
    setUploaded(false);
    setProgress(0);
    setIsUploading(true);

    let value = 0;

    const interval = setInterval(() => {

        value += 5;

        setProgress(value);

        if (value >= 100) {

            clearInterval(interval);

            setUploaded(true);
            setIsUploading(false);

        }

    }, 40);

};
const handleSubmit = async (e) => {

  console.log(formData);
  console.log(resume);
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
        return;
    }

    console.log("Validation Passed");

    setLoading(true);

    try {

        const data = new FormData();

        Object.keys(formData).forEach(key => {

            data.append(key, formData[key]);

        });

        data.append("resume", resume);

        const response = await axios.post(

            "https://horyzen-technologies.onrender.com/api/apply",

            data

        );

        console.log(response.data);

        setSubmitted(true);

        // Reset Form

        setFormData({
            name: "",
            phone: "",
            email: "",
            college: "",
            course: "",
            internship: "",
            github: "",
            message: ""
        });

        setErrors({});
      

        setResume(null);

        setResumeName("");

        setUploaded(false);

        setProgress(0);

        setIsUploading(false);

        // Reset File Input

        document.getElementById("resume").value = "";

        setTimeout(() => {

            setSubmitted(false);

        }, 2500);

    }

    catch (err) {

        console.log(err);

        alert("Something went wrong");

    }

    finally {

        setLoading(false);

    }

};

  return (
    <div className="m">
      <Navbar2/>

     <section className="apply-page">

     

      <div className="apply-container">

        <div className="apply-left">

          <span className="section-tag">
            HORYZEN INTERNSHIPS
          </span>

          <h1>
            Build Your Future With
            <span> HORYZEN</span>
          </h1>

          <p>
            Join our internship program
            and gain real-world experience
            through live projects,
            mentorship, and industry exposure.
          </p>

          <div className="benefits">

            <div className="benefit">
              Live Industry Projects
            </div>

            <div className="benefit">
              Mentorship Support
            </div>

            <div className="benefit">
              Certificate & Experience
            </div>

            <div className="benefit">
              Career Growth
            </div>

          </div>

        </div>
<div className="apply-right">
  <form onSubmit={handleSubmit} noValidate> 

    <div className="input-group">
      <input
        type="text"
        id="name"
        name="name"
        placeholder=" "
          value={formData.name}
          onChange={handleChange}
      />
      <label htmlFor="name">Full Name</label>
    </div>
    {errors.name && (
    <small className='error'>
        {errors.name}
    </small>
)}

    <div className="input-group">
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder=" "
          value={formData.phone}
    onChange={handleChange}
      />
      <label htmlFor="phone">Phone Number</label>
    </div>
    {errors.phone && (
    <small className='error'>
        {errors.phone}
    </small>
)}

    <div className="input-group">
      <input
        type="email"
        id="email"
        name="email"
        placeholder=" "
          value={formData.email}
    onChange={handleChange}
      />
      <label htmlFor="email">Email Address</label>
    </div>
    {errors.email && (
    <small className='error'>
        {errors.email}
    </small>
)}

    <div className="input-group">
      <input
        type="text"
        id="college"
        name="college"
        placeholder=" "
          value={formData.college}
    onChange={handleChange}
      />
      <label htmlFor="college">College Name</label>
    </div>
    {errors.college && (
    <small className='error'>
        {errors.college}
    </small>
)}

    <div className="input-group">
      <input
        type="text"
        id="course"
        name="course"
        placeholder=" "
          value={formData.course}
    onChange={handleChange}
      />
      <label htmlFor="course">Course</label>
    </div>
    {errors.course && (
    <small className='error'>
        {errors.course}
    </small>
)}

    <div className="input-group">
      <select
        id="internship"
        name="internship"
        value={formData.internship}
        onChange={handleChange}
      >
        <option value="" disabled hidden></option>

        <option>Frontend Development</option>
        <option>Backend Development</option>
        <option>Full Stack Development</option>
        <option>Graphics Designing</option>
        <option>Data Science and Analytics</option>
        <option>AI & Machine Learning</option>
        <option>UI/UX Design</option>
        <option>Digital Marketing</option>
      </select>

      <label htmlFor="internship"  className={formData.internship ? "active" : ""}>
        Select Internship
      </label>
    </div>
      {errors.internship && (
    <small className="error">
        {errors.internship}
    </small>
)}

    <div className="input-group">
      <input
        id="message"
        name="message"
        placeholder=''
        value={formData.message}
        onChange={handleChange}
      ></input>
      <label htmlFor="message">
        From Where You Know About Horyzen?
      </label>
      {errors.message && (
    <small className="error">
        {errors.message}
    </small>
)}

    </div>
    <div className="input-group">
    <input
        type="url"
        id="github"
        name="github"
        placeholder=" "
        value={formData.github}
        onChange={handleChange}
    />
    <label htmlFor="github">
        Linkedin Profile URL
    </label>
  {errors.github && (
    <small className="error">
        {errors.github}
    </small>
)}
</div>
<div className="upload-group">

    <label htmlFor="resume" className="upload-box">

        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResume}
        />
        {errors.resume &&  (
    <small  className="error">
        {errors.resume}
    </small>
)}

        {/* Header */}

        <div className="upload-header">

            <div className="upload-icon">
                {uploaded ? "✅" : "📄"}
            </div>

            <div className="upload-text">

                <h4>
                    {uploaded ? "Resume Uploaded" : "Upload Resume"}
                </h4>

                {!resumeName ? (
                    <p>PDF or DOCX (Max 5 MB)</p>
                ) : (
                    <p className="file-name">
                        {resumeName}
                    </p>
                )}

            </div>

        </div>

        {/* Progress Bar */}

{isUploading && (
    <div className="progress-wrapper">

        <div className="progress-info">
            <span>{progress}%</span>
        </div>

        <div className="progress">
            <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
            />
        </div>

    </div>
)}

    </label>

</div>

   <button
    className={`apply-submit ${submitted ? "success" : ""}`}
    type="submit"
    disabled={loading || submitted}
>

    {loading ? (

        <>
            <div className="spinner"></div>
            Submitting...
        </>

    ) : submitted ? (

        <>
            ✓ Application Submitted
        </>

    ) : (

        "Apply For Internship"

    )}

</button>

{submitted && (
    <div className="success-toast">

        <div className="toast-icon">
            ✓
        </div>

        <div>

            <h4>Application Submitted</h4>

            <p>
               Thank you for applying at,<br /><span>HORYZEN TECHNOLOGIES</span>
            </p>

        </div>

    </div>
)}
  </form>
</div>

      </div>

    </section>
    <Footer/>

    </div>

  )
}

export default Apply