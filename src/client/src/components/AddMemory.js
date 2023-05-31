import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


//THIS WORKS 5/29
const AddMemory = ({createMemory}) => {
  const navigate = useNavigate();

  const [memory, setMemory] = useState({
    image_url: '',
    member: '',
    subject: '',
    text: '',
    comments: []
  })

  const handleChange = (e) => {
    setMemory({...memory, [e.target.member]: e.target.value });
  };

  const handleSubmit = (e) => {
    navigate('/memories')
    e.preventDefault()
    createMemory(memory)
    setMemory({ image_url: '', member: '', subject: '', text: '', comments: '' })
  }

  

  return (
    
     <>
        <div className="form-container" style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem", display: 'flex', justifyContent: 'center', alignItems: 'center', 
        }}>

            <form onSubmit={handleSubmit}>
               <div>
                 <h3>Add New Memory</h3>
               </div>

               <div>
               <input
                 type="img" width="50" height="10
                 " alt="memory image" 
                 className="form-control"
                 name="image"
                 placeholder="image_url "
                 defaultValue={memory.image_url}
                 onChange={handleChange} />
               </div> 

               <div>
               <input
                 type="text"
                 className="form-control"
                 name="member"
                 placeholder="name"
                 value={memory.member}
                 onChange={handleChange} />     
                </div>

                <div>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="subject"
                  value={memory.subject}
                  onChange={handleChange} />
                </div>

                <div>
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  placeholder="your memory here"
                  value={memory.text}
                  onChange={handleChange} />
                </div>

                <div>
                  <button>Submit</button>
                </div>
              </form>
            </div></>
  )
}

export default AddMemory;