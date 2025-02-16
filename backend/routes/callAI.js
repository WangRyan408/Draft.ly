import express from 'express';
import 'dotenv/config';
import OpenAI from 'openai';
import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import htmlPdfNode from 'html-pdf-node';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const router = express.Router();

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

/* POST home page. */

router.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});



router.post('/test', async function(req, res, next) {

  console.log('Received data:', req.body);
  
  let convoHistory = [];  

  const proomptEngineering = `Your current role is to take in information about a candidate and generate a resume for them. You must only output the final HTML code for the resume and nothing else—no extra commentary, greetings, or explanations. You will only respond with a resume. You will be given a job description,
  and depending on the job you will pick the most relevant information from the user data and create a resume fitting the description/requirements of the job.
  Non-relevant work experience or projects should not be added to the resume. For example, a Web Development job would not have projects in unrelated languages like C++. Build a skills section based off of the tools used in projects. This resume MUST be in the popular Jake's Resume format, and should be 
  returned in HTML. Do not generate any markdown.`;  
  
  const testCandidate= `NameFirst,Last,Middle(Jesus,Danger,Monroe) Phone#(4088044488), Email(yourmom@gmail.com),
   Websites(linkedin.com), School,StartDate,EndDate,Coursework(Foothill College,2023,2025,Math Club Officer), 
   Experience,StartDate,EndDate,Description(Physics Tutor,May 2022, Jun 2023,helped teach k-12 level mathematics), 
   Project,StartDate,EndDate,Description({Draftly, Feb 2025, Mar 2025, AI Driven Resume Builder for students},
   {Igar.io, Jan 2023, Present, Game written in C++ and Unreal}, {Flight Computer, Jan 2016, Apri 2022, Embedded C++ Project to track flight data}),
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

 const userData = JSON.stringify(req.body);


  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    store: false,
    messages: [
      {"role": "developer", "content": proomptEngineering},
      //{"role": "user", "content": testCandidate},
      {"role": "user", "content": userData}
    ],
    //reasoning_effort: "medium"
  });


  
  convoHistory.push({role: "assistant", content: completion.choices[0].message.content});
  
  let openai_response = convoHistory[convoHistory.length - 1].content;
  console.log(openai_response);
 
  fs.writeFileSync('./assets/resume.html', openai_response);


  //console.log(path.join(__dirname, '../resume.html'));

 

  const convertFile = async () => {
    try {
      const htmlString = await fsPromises.readFile('./assets/resume.html', {encoding: 'utf-8'});

      let options = { format: 'A4' };
      let file = { content: htmlString };

      const pdfBuffer = await htmlPdfNode.generatePdf(file, options);
      
      await fsPromises.writeFile('./assets/resume.pdf', pdfBuffer);
      console.log('PDF generated successfully');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  await convertFile();



  res.json({ downloadUrl: 'http://localhost:3000/api/genCV/test?download=true' });
  
});

router.get('/test', async function(req, res, next) {
  const { download } = req.query;
  if (download === 'true') {
    const filePath = path.join(__dirname, '../assets', 'resume.pdf');
    res.download(filePath, 'resume.pdf', function(err) {
      if (err) {
        console.log('Error during download', err);
        res.status(500).send('Download failed');
      } else {
        console.log('Download complete');
      }
    });
  } else {
    res.send('GET request received; no download requested');
  }
});

export default router;