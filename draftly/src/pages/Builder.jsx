import '../css/Builder.css';
import arrow from '../assets/dashed_arrow.png';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Builder() {

    const [informationSection, setInformationSection] = useState(
        { firstName: '', lastName: '', city: '', state: '' },
      );

      const [educationSections, setEducationSections] = useState([
        { school: '', startDate: '', endDate: '' },
      ]);
    
      const [projectSections, setProjectSections] = useState([
        { title: '', projectStart: '', projectEnd: '', description: '' },
      ]);

      const [workDescription, setWorkDescription] = useState('');
    
      const addEducationSection = () => {
        setEducationSections([
          ...educationSections,
          { school: '', startDate: '', endDate: '' },
        ]);
      };

      const addProjectSection = () => {
        setProjectSections([
          ...projectSections,
          { title: '', projectStart: '', projectEnd: '', description: '' },
        ]);
      };

    
      const updateEducationField = (index, field, value) => {
        const newEducation = [...educationSections];
        newEducation[index][field] = value;
        setEducationSections(newEducation);
      };

      const updateProjectField = (index, field, value) => {
        const newProject = [...projectSections];
        newProject[index][field] = value;
        setProjectSections(newProject);
      };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            information: informationSection,
            education: educationSections,
            projects: projectSections,
            workDescription: workDescription,
        }
        try {
            const response = await axios.post('http://localhost:3000/api/genCV/test', postData);
            console.log(response);
            //window.location.href = 'http://localhost:3000/api/genCV/test?download=true';
    } catch (error) {
        console.log("Error Sending Post Request: ",error);
    }
};


    return (
        <div className='fade-in'>
            <title>Builder | Draftly</title>
            <div id='builder-section-1'>
                <div className='title'>
                    Let&apos;s get started
                </div>
                <div className='description'>
                    Before perfecting your resume, Draftly needs to know a bit about you.
                </div>
                <div id='arrow'>
                    <img src={arrow}></img>
                </div>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div id='builder-section-2'>
                <div className='build-label' id='info'>
                    Your Information
                </div>
            <div className='builder-input-wrapper-2'>
            <input type='text' onChange={(e) => setInformationSection({...informationSection, firstName: e.target.value})} placeholder='First name'/>
            <input type='text' onChange={(e) => setInformationSection({...informationSection, lastName: e.target.value})}placeholder='Last name'/>
            <input type='text' onChange={(e) => setInformationSection({...informationSection, city: e.target.value})}placeholder='City'/>
            <input type='text' onChange={(e) => setInformationSection({...informationSection, state: e.target.value})}placeholder='State (ex: CA)'/>
        </div>
                <br></br>

                <div className='build-label' id='education'>
                    Your Education
                </div>
                {educationSections.map((info, index) => (
            <div key={`info-${index}`}>
                <div className='builder-input-wrapper-1'>
                    <input
                    type="text"
                    placeholder="School, college, or university name"
                    value={info.school}
                    onChange={(e) =>
                    updateEducationField(index, 'school', e.target.value)
                    }
                />
                </div>
                <div className='builder-input-wrapper-2'>
              <input
                type="text"
                placeholder="Start Date"
                value={info.startDate}
                onChange={(e) =>
                  updateEducationField(index, 'startDate', e.target.value)
                }
              />
              </div>
              <div className='builder-input-wrapper-2'>
              <input type="text"
              placeholder="End Date" 
              value={info.endDate}
              onChange={(e) =>
                updateEducationField(index, 'endDate', e.target.value)
              }
              />
              </div>
            </div>
          ))}
          <FontAwesomeIcon 
          className='fa-2xl'
          onClick={addEducationSection}
          icon={faPlus} />
                <br></br>

                <div className='build-label' id='projects'>
                    Your Projects
                </div>
                
                {projectSections.map((info, index) => (
            <div key={`info-${index}`}>
                <div className='builder-input-wrapper-1'>
              <input
                type="text"
                placeholder="Project Title"
                value={info.title}
                onChange={(e) =>
                  updateProjectField(index, 'title', e.target.value)
                }
              />
              </div>
              <div className='builder-input-wrapper-2'>
              <input
                type="text"
                placeholder="Start month, year (ex: Jun. 2024)"
                value={info.projectStart}
                onChange={(e) =>
                  updateProjectField(index, 'projectStart', e.target.value)
                }
              />
               <input type="text"
              placeholder="End month, year (ex: Aug. 2024)"
              value={info.projectEnd}
              onChange={(e) =>
                updateProjectField(index, 'projectEnd', e.target.value)
              }
              />
              </div>
             <div className='builder-input-wrapper-1'>
              <input type="text" 
              placeholder="Describe what you did..."
              value={info.description}
              onChange={(e) =>
                updateProjectField(index, 'description', e.target.value)
              }
              />
              </div>
            </div>
          ))}
           <FontAwesomeIcon 
          className='fa-2xl'
          onClick={addProjectSection}
          icon={faPlus} />
                <br></br>

                <div className='build-label' id='jobs'>
                    Job Description
                </div>
                <div className='builder-input-wrapper-1'>
                    <input onChange={(e) => setWorkDescription(e.target.value)} className='job-desc' type='text' placeholder="Copy and paste the description of the job you're applying to!"/>
                </div>

                <br></br>
                <br></br>

                <div id='submit'>
                    <input type='submit' />
                </div>
            </div>
            </form>
        </div>
    );
}

export default Builder;