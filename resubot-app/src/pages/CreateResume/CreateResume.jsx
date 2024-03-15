import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import resume3 from "../../assets/resume_template3.PNG";
import resume2 from "../../assets/resume_template2.PNG";
import resume4 from "../../assets/resume_template4.PNG";
import "./CreateResume.scss";
import Loading from "../Loading/Loading.jsx";

const CreateResume = () => {
  //To Select a Resume Template 
  const [selectedTemplate, setSelectedTemplate] = useState("");

  //To Cutomize Resume for new position
  const [jobDetails, setjobDetails] = useState("");
  const [industry, setIndustry] = useState("");

  //Basic Info about user
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [personalLink, setPersonalLink] = useState("");

  //Experince information 
  const [companyInfo, setCompanyInfo] = useState([{role: "", company:"", date:"", location:"", description:""}]);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");


  //Education information
  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [graduation, setGraduation] = useState("");
  const [grades, setGrades] = useState("");

  //Skills Information
  const [skills, setSkills] = useState("");

  //Projects Information
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [activeSection, setActiveSection] = useState("templates"); // State to manage active section


  const [loading, setLoading] = useState(false);
  
  //const pdfExportComponent = React.useRef(null);
  const navigate = useNavigate();

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault(); // Prevents the default anchor link behavior
    setActiveSection(sectionId);
  };  

  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
  };

  const handleAddCompany = () =>
    setCompanyInfo([...companyInfo, { name: "", position: "" }]);

//👇🏻 removes a selected item from the list
const handleRemoveCompany = (index) => {
    const list = [...companyInfo];
    list.splice(index, 1);
    setCompanyInfo(list);
};
//👇🏻 updates an item within the list
const handleUpdateCompany = (e, index) => {
    const { name, value } = e.target;
    const list = [...companyInfo];
    list[index][name] = value;
    setCompanyInfo(list);
};

  // Define a function to fill out the form with predefined data
  const fillFormWithData = () => {
    const predefinedData = {
      jobDetails: `Role: Python Developer (Banking Projects)
      Structure: 6 Months + Extension
      Pay: $85.00 per hour inc.
      Location: Toronto (hybrid)
      
      We currently have an opportunity for a contract role - Hybrid- Python Developer working on Banking projects.
      
      Candidate Requirements/Must-Have Skills:
      
      Strong Python Development: 10+ years of design and development experience using Python (Version 2.7 and above) and hands-on experience and in dept knowledge of standard python libraries.
      Experience processing large volumes of data using PySpark, Pandas, and/or NumPy.
      2+ years experience with Python frameworks such as Django, Flask, requests. etc.
      Experience in Object-oriented programming and Agile Development Methodology.
      Experience with TDD writing unit tests, test coverage using PyTest, PyUnit, pytest-cov libraries.
      Open-Source contribution experience
      Financial industry experience
      --
      
      Please apply with an updated resume and ensure the required skills you can speak to for this position are included.
      
      For more roles like this please go to www.corgta.com/find-a-job/
      
      Job Types: Full-time, Fixed term contract
      Contract length: 6 months
      
      Salary: Up to $85.00 per hour
      
      Schedule:
      
      8 hour shift
      Work Location: In person`,
      industry: "Technology",
      fullName: "John Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
      linkedIn: "https://www.linkedin.com/in/johndoe",
      personalLink: "https://www.johndoe.com",
      role: "Software Developer",
      company: "ABC Tech",
      date: "January 2020",
      location: "New York, NY",
      description:
        "Worked as a full stack developer and DBA in a small team of 5, managed projects using Jira...",
     
      degree: "Bachelor of Science",
      schoolName: "University of XYZ",
      schoolLocation: "Los Angeles, CA",
      graduation: "May 2019",
      grades:
        "data structures and algorithms: 85%, advanced java programming: 99%, python programming: 90%, intro to django: 90%, Advanced unit testing: 100%, Intro to pyUnit: 90%, Advanced databases: 75%, Leadership in Business: 50%, Accounting: 80%, Intro to Psychology: 88%, Physical Living 2000: 80%",
      skills: "React, JavaScript, Node.js, HTML, CSS",
      projectTitle: "Portfolio Website",
      projectDescription:
        "Created a personal portfolio website using latest fullstack technologies....",
    };

    setjobDetails(predefinedData.jobDetails);
    setIndustry(predefinedData.industry);
    setFullName(predefinedData.fullName);
    setPhoneNumber(predefinedData.phoneNumber);
    setEmail(predefinedData.email);
    setLinkedIn(predefinedData.linkedIn);
    setPersonalLink(predefinedData.personalLink);
    setRole(predefinedData.role);
    setDate(predefinedData.date);
    setCompany(predefinedData.company);
    setLocation(predefinedData.location);
    setDescription(predefinedData.description);
    // setCompanyInfo(predefinedData.companyInfo);
    setDegree(predefinedData.degree);
    setSchoolName(predefinedData.schoolName);
    setSchoolLocation(predefinedData.schoolLocation);
    setGraduation(predefinedData.graduation);
    setGrades(predefinedData.setGrades);
    setSkills(predefinedData.skills);
    setProjectTitle(predefinedData.projectTitle);
    setProjectDescription(predefinedData.projectDescription);
  };

  

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      graduation,
      skills,
      projectDescription,
    });
   

    const formData = new FormData();

    formData.append("jobDetails", jobDetails);
    formData.append("industry", industry);

    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("linkedIn", linkedIn);
    formData.append("personalLink", personalLink);

    formData.append("skills", skills);

    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);

    console.log({
      jobDetails: jobDetails,
      industry: industry,
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      linkedIn: linkedIn,
      personalLink: personalLink,
      role: role,
      location: location,
      date: date,
      company: company,
      description: description,
      degree: degree,
      schoolName: schoolName,
      schoolLocation: schoolLocation,
      graduation: graduation,
      grades: grades,
      skills: skills,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
    });

    axios
      .post("http://localhost:4000/api/resume/create", {
        jobDetails: jobDetails,
        industry: industry,
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        linkedIn: linkedIn,
        personalLink: personalLink,
        role: role,
        company: company,
        location: location,
        description: description,
        date: date,
        degree: degree,
        schoolName: schoolName,
        schoolLocation: schoolLocation,
        graduation: graduation,
        grades: grades,
        skills: skills,
        projectTitle: projectTitle,
        projectDescription: projectDescription,
      })
      .then((res) => {
        if (res.data.message) {
          const experienceData = res.data.data.experienceGenerated;
          const educationGenerated = res.data.data.educationGenerated;
          console.log("education");
          console.log(educationGenerated);
          const skillsGenerated = res.data.data.skillsGenerated;
          const projectGenerated = res.data.data.projectGenerated;

          // state object
          const resumeData = {
            fullName,
            phoneNumber,
            email,
            linkedIn,
            personalLink,
            role,
            company,
            date,
            location,
            degree,
            schoolLocation,
            schoolName,
            graduation,
            projectTitle,
            grades,
            experienceData,
            educationGenerated,
            skillsGenerated,
            projectGenerated,
          };

          console.log(resumeData);
          navigate("/resume1", { state: { resumeData } });
        }
      })
      .catch((err) => console.error(err));
    setLoading(true);
  };

  if (loading) {
    return <Loading />;
  } 

  return (
    <div className="wrapper">
		<div className="wrapper_inner">
			<div className="vertical_wrap">
			<div className="backdrop"></div>
			<div className="vertical_bar">
				
      <ul className="menu">
  <li>
    <a href="#templates" 
       onClick={(e) => handleSectionClick(e, "templates")}
       className={activeSection === "templates" ? "active" : ""}>
      <span className="text">Resume Templates</span>
    </a>
  </li>
  <li>
    <a href="#customize" 
       onClick={(e) => handleSectionClick(e, "customize")}
       className={activeSection === "customize" ? "active" : ""}>
      <span className="text">Customize Resume</span>
    </a>
  </li>
  <li>
    <a href="#contact" 
       onClick={(e) => handleSectionClick(e, "contact")}
       className={activeSection === "contact" ? "active" : ""}>
      <span className="text">Contact Info</span>
    </a>
  </li>
  <li>
    <a href="#experience" 
       onClick={(e) => handleSectionClick(e, "experience")}
       className={activeSection === "experience" ? "active" : ""}>
      <span className="text">Experience</span>
    </a>
  </li>
  <li>
    <a href="#education" 
       onClick={(e) => handleSectionClick(e, "education")}
       className={activeSection === "education" ? "active" : ""}>
      <span className="text">Education</span>
    </a>
  </li>
  <li>
    <a href="#skills" 
       onClick={(e) => handleSectionClick(e, "skills")}
       className={activeSection === "skills" ? "active" : ""}>
      <span className="text">Skills</span>
    </a>
  </li>
  <li>
    <a href="#projects" 
       onClick={(e) => handleSectionClick(e, "projects")}
       className={activeSection === "projects" ? "active" : ""}>
      <span className="text">Projects</span>
    </a>
  </li>
</ul>


				
			</div>
		</div>
    <div className="container">
        
      <form
        onSubmit={handleFormSubmit}
        method="POST"
        encType="multipart/form-data"
      >

      <div id="templates" className={activeSection === "templates" ? "active" : "hidden"}>
              <img src={resume3} alt="Resume3"/>
              <img src={resume2} alt="Resume2" />
              <img src={resume4} alt="Resume4"/>
          </div>
        
        
        
        <div id="customize" className={activeSection === "customize" ? "active" : "hidden"}>
        <div>
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              name="industry"
              className="currentInput"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
        <label htmlFor="jobDetails">Job Details</label>
          <textarea
            type="text"
            name="jobDetails"
            id="jobDetails"
            value={jobDetails}
            onChange={(e) => setjobDetails(e.target.value)}
          />
          
        </div>
        <div id="contact" className={activeSection === "contact" ? "active" : "hidden"}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            required
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            required
            name="email"
            className="currentInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            required
            name="phoneNumber"
            className="currentInput"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="linkedIn">
            <strong>LinkedIn </strong>URL
          </label>
          <input
            type="text"
            required
            name="linkedIn"
            className="currentInput"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <label htmlFor="personalLink">
            <strong>Personal Website </strong>OR Relevant Links
          </label>
          <input
            type="text"
            name="personalLink"
            className="currentInput"
            value={personalLink}
            onChange={(e) => setPersonalLink(e.target.value)}
          />
        </div>
        <section id="experience" className={activeSection === "experience" ? "active" : "hidden"}>
        {companyInfo.map((company, index) => (
          <div className="nestedContainer" key={index}>
            <div className="companies">
            <label htmlFor="role">Position Held</label>
            <input
              type="text"
              name="role"
              required
              onChange={(e) => handleUpdateCompany(e, index)}
            />
          </div>
          <div className="companies">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              required
              onChange={(e) => handleUpdateCompany(e, index)}
            />
          </div>
          <div className="verticalcontainer">
            <div className="companies">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                placeholder="May 23 - Present"
                className="subInput"
                required
                onChange={(e) => handleUpdateCompany(e, index)}
              />
            </div>
            <div className="companies">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                className="subInput"
                required
                onChange={(e) => handleUpdateCompany(e, index)}
              />
            </div>
          </div>
          <div className="companies">
            <label htmlFor="description">Description of Your Position</label>
            <textarea
              type="text"
              name="description"
              required
              onChange={(e) => handleUpdateCompany(e, index)}
            />
          </div>
          <div className='btn__group'>
              {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                <button id='addBtn' onClick={handleAddCompany}>
                  Add
                </button>
              )}
              {companyInfo.length > 1 && (
                <button id='deleteBtn' onClick={() => handleRemoveCompany(index)}>
                  Del
                </button>
              )}
            </div>
          </div>
        ))}
        
        </section>
        
        <section id="education" className={activeSection === "education" ? "active" : "hidden"}>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            required
            name="degree"
            className="currentInput"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="schoolName">University Name</label>
          <input
            type="text"
            required
            name="schoolName"
            className="currentInput"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="schoolLocation">University Location</label>
          <input
            type="text"
            required
            name="schoolLocation"
            className="currentInput"
            value={schoolLocation}
            onChange={(e) => setSchoolLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="graduation">Graduation Date</label>
          <input
            type="text"
            required
            name="graduation"
            placeholder="May 23 - Present"
            className="currentInput"
            value={graduation}
            onChange={(e) => setGraduation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="grades">Grades</label>
          <input
            type="text"
            placeholder="Game Programming: 90%, Information Security: 99%"
            name="grades"
            className="currentInput"
            value={grades}
            onChange={(e) => setGrades(e.target.value)}
          />
        </div>
        </section>
       
        <section id="skills" className={activeSection === "skills" ? "active" : "hidden"}>
          <div>
            <label htmlFor="skills">Enter the Skills You Possess</label>
            <textarea
              type="text"
              required
              name="skills"
              className="currentInput"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </section>


        <section id="projects" className={activeSection === "projects" ? "active" : "hidden"}>
          <div>
            <label htmlFor="projectTitle">Give Your Project a Title</label>
            <input
              type="text"
              required
              name="projectTitle"
              className="currentInput"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="projectDescription">
              Description of Your Project
            </label>
            <textarea
              type="text"
              required
              name="projectDescription"
              className="currentInput"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <button>CREATE MY RESUME</button>
          </div>
        </section>

        
      </form>
    </div>
    </div>
	</div> 
  );
};

export default CreateResume;
