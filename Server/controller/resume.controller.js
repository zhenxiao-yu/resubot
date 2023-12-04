const { generateID, generateText } = require("../util/ai-util"); // Import utility functions

const resumeController = {
  // Create a resume entry logic
  createResumeEntry: async (req, res) => {
    try {
      (fullName = req.body.fullName),
        (newPosition = req.body.newPosition),
        (industry = req.body.industry),
        (role1 = req.body.role1),
        (company1 = req.body.company1),
        (date1 = req.body.date1),
        (location1 = req.body.location1),
        (description1 = req.body.description1),
        (role2 = req.body.role2),
        (company2 = req.body.company2),
        (date2 = req.body.date2),
        (location2 = req.body.location2),
        (description2 = req.body.descriotion2),
        (degree = req.body.degree),
        (location = req.body.location),
        (schoolName = req.body.schoolName),
        (graduation = req.body.graduation),
        (skills = req.body.skilss),
        (projectTitle = req.body.projectTitle),
        (projectDescription = req.body.projectDescription);

      const newEntry = {
        id: generateID(),
        fullName,
        newPosition,
        industry,
        role1,
        company1,
        date1,
        location1,
        description1,
        role2,
        company2,
        date2,
        location2,
        description2,
        degree,
        location,
        schoolName,
        graduation,
        skills,
        projectTitle,
        projectDescription,
      };

      const testPrompt = `My full name is Madeline. Can you write a 20-word description about my name?`;

      // const educationInfo = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume(first person writing)?`;

      // const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write 10 points for a resume on what I am good at?`;

      // const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years I worked at ${
      //   workArray.length
      // } companies. ${remainderText()} \n Can you write me 50 words for each company seperated in numbers of my succession in the company (in first person)?`;

      // const objective = await generateText(prompt1);
      // const keypoints = await generateText(prompt2);
      // const jobResponsibilities = await generateText(prompt3);

      const test = await generateText(testPrompt);

      const chatgptData = { test };
      const responseData = { ...newEntry, ...chatgptData };

      console.log(responseData);
      res.json({
        message: "Resume entry created successfully",
        data: responseData,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};

module.exports = resumeController;
