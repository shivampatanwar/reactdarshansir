import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    gender: '',
    password: '',
  })

  let { name, username, phone, email, gender, password } = formData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((formData) => {
      ..name
    })

  };


  let handleSubmit = () => {

  };


  return (
    <div id='div'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" placeholder="Name" value={name} id='name' onChange={handleChange} />

        <label htmlFor="username">UserName : </label>
        <input type="text" placeholder="Username" value={username} id='username' onChange={handleChange} />

        <label htmlFor="phone">Phone : </label>
        <input type="text" placeholder="Phone" value={phone} id='phone' onChange={handleChange} />

        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="Email" value={email} id='email' onChange={handleChange} />

        <label htmlFor="gender">Gender : </label>
        <div>
       <input type="radio" name='gender' id='gender' value='male'/>  Male 
        <input type="radio" name='gender' id='gender' value='female'/> Female 
        </div>

        <label htmlFor="password"></label>
        <input type="password" placeholder="Password" value={password} id='password' onChange={handleChange} />


        <button>Submit</button>

      </form>
    </div>
  )
}

export default App;
