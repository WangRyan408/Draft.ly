import express from 'express';
import 'dotenv/config';
import OpenAI from 'openai';
import * as fs from 'node:fs';
import HTML5ToPDF from 'html5-to-pdf';
import path from 'path';


const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* POST home page. */

router.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});



router.get('/test', async function(req, res, next) {

  const testCandidate= `NameFirst,Last,Middle(John,Adams,Monroe) Phone#(4088044488), Email(johndoe@gmail.com),
   Websites(google.com), School,StartDate,EndDate,Coursework(De anza college,2023,2025,Math Club Officer), 
   Experience,StartDate,EndDate,Description(Math Tutor,May 2022, Jun 2023,helped teach k-12 level mathematics), 
   Project,StartDate,EndDate,Description(Draftly, Feb 2025, Mar 2025, AI Driven Resume Builder for students),
   Skills( Javascript,Graphic Design), Job Description(Position: Frontend Engineering Intern (Part-Time, Unpaid)
Location: Remote
Role Overview:
We’re seeking a motivated Frontend Engineering Intern with basic experience in Python and React.js.
You’ll be trained and mentored by our team to develop these skills further and contribute to real-world projects. 
This is an unpaid internship, but it offers a unique opportunity to gain hands-on experience in a rapidly growing AI-driven 
healthcare startup.
Key Responsibilities:
• Assist in building and enhancing our web applications using React.js.
• Work with the team to develop user-friendly, responsive web interfaces.
• Collaborate on server-side logic with Python.
• Participate in code reviews, team meetings, and problem-solving discussions.
• Debug and troubleshoot issues as they arise.
• Continuously learn and adopt new technologies and best practices in frontend development.

What We’re Looking For:
• Basic understanding and experience with React.js and Python.
• Familiarity with frontend technologies like HTML, CSS, and JavaScript.
• Strong communication skills and a team-oriented attitude.
• Eagerness to learn and grow in a fast-paced startup environment.
• Availability to work part-time with flexibility in scheduling.
• A positive attitude and passion for building impactful technology.)`;



  let convoHistory = [];  

  const proomptEngineering = `Your current role is to take in information about a candidate and generate a resume for them. You will also be given a job description,
  and depending on the job you will pick the most relevant information from the user submitted data and create a resume tailored to the description/requirements of the job.
  Non-relevant work experience or projects should not be added to the resume. For example, a Game Development job position would not have web development projects listed on the Resume.
   This resume should be in the popular Jake's format, and the generated resume should be returned in HTML. Do not add any additional markdown formatting or non-resume content. `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: false,
    messages: [
      {"role": "developer", "content": proomptEngineering},
      {"role": "user", "content": testCandidate}
    ],
  });


  convoHistory.push({role: "assistant", content: completion.choices[0].message.content});
  
  let openai_response = convoHistory[convoHistory.length - 1].content;
  console.log(openai_response);
 
  fs.writeFileSync('resume.html', openai_response.content);

  const run = async () => {
    const HTML5ToPDF = new HTML5ToPDF({
      inputPath: path.join(__dirname, '../resume.html'),
      outputPath: path.join(__dirname, '../resume.pdf'),
    });

    await HTML5ToPDF.start();
    await HTML5ToPDF.build();
    await HTML5ToPDF.close();
  }

  (async () => {
    try {
      await run()
      console.log("DONE")
    } catch (error) {
      console.error(error)
      process.exitCode = 1
    } finally {
      process.exit();
    }
  })()

  const filePath = path.join(__dirname, '../resume.pdf');
  

  res.download(filePath, 'resume.pdf', function(err) {
    if (err) {
      console.log('Error during download', err);
      res.status(500).send('Download failed');
    } else {
      console.log('Download complete');
    }
  });
});

export default router;