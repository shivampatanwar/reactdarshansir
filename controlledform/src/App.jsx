import { useRef, useState } from 'react'

function App() {

  let view = useRef();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    gender: '',
    password: '',
    courses: [],
  })

  let { name, username, phone, email, gender, password, courses } = formData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log(e.target.name, e.target.value)

    // setFormData({
    //   ...formData,
    //   [name]: value

    // })


    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

  };


  let handleChangeBox = (e) => {
    let { name, value } = e.target;
    console.log(e.target.name, e.target.value);

    if (e.target.checked) {
      setFormData(prev => {
        return {
          ...prev,
          courses: [...prev.courses, value]
        }
      });
    } else {
      setFormData(prev => {
        return {
          ...prev,
          courses: prev.courses.filter(course => course !== value)
        }
      });
    }
  };


  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    view.current.innerHTML = `
      <h3>Form Data OnSubmit</h3>
      <p>Name : ${name}</p>
      <p>Username : ${username}</p>
      <p>Phone : ${phone}</p>
      <p>Email : ${email}</p>
      <p>Gender : ${gender}</p>
      <p>Password : ${password}</p>
      <p>Courses : ${courses.join(', ')}</p>
    `;

    // Reset form checkboxes and radio buttons
    // e.target.reset();

    // set form default data
    setFormData({
      name: '',
      username: '',
      phone: '',
      email: '',
      gender: '',
      password: '',
      courses: [],
    })


    // Uncheck radio buttons
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });

    // Uncheck checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });




  };


  return (
    <div id='div'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" placeholder="Name" value={name} id='name' name='name' onChange={handleChange} />

        <label htmlFor="username">UserName : </label>
        <input type="text" placeholder="Username" value={username} id='username' name='username' onChange={handleChange} />

        <label htmlFor="phone">Phone : </label>
        <input type="text" placeholder="Phone" value={phone} id='phone' name='phone' onChange={handleChange} />

        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="Email" value={email} id='email' name='email' onChange={handleChange} />

        <label htmlFor="password">Password : </label>
        <input type="password" placeholder="Password" value={password} id='password' name='password' onChange={handleChange} />

        <label htmlFor="gender">Gender : </label>
        <div id='radiodiv'>
          <input type="radio" name='gender' value="male" id='ip1' onChange={handleChange} /> <label className='label' htmlFor="ip1">MALE</label> &nbsp; &nbsp;
          <input type="radio" name='gender' value="female" id='ip2' onChange={handleChange} /> <label className='label' htmlFor="ip2">FEMALE</label>
        </div>

        <label htmlFor="courses">Courses : </label>
        <div id='cbdiv'>
          <div>
            <input type="checkbox" placeholder="Courses" id='cb1' value='web development' name='courses' onChange={handleChangeBox} />
            <label htmlFor="cb1"> WEB DEVELOPMENT</label>
          </div>
          <div>
            <input type="checkbox" placeholder="Courses" id='cb2' value='mern' name='courses' onChange={handleChangeBox} />
            <label htmlFor="cb2"> MERN</label>
          </div>
          <div>
            <input type="checkbox" placeholder="Courses" id='cb3' value='java fullstack' name='courses' onChange={handleChangeBox} />
            <label htmlFor="cb3"> JAVA FULLSTACK</label>
          </div>
        </div>




        <button>Submit</button>

      </form>

      <div id='output'>
        <div>
          <h3>Form Data Onchange</h3>
          <p>Name : {name}</p>
          <p>Username : {username}</p>
          <p>Phone : {phone}</p>
          <p>Email : {email}</p>
          <p>Gender : {gender}</p>
          <p>Password : {password}</p>
          <p>Courses : {courses.join(', ')}</p>
        </div>

        <div ref={view}> 
        <h3>Form Data OnSubmit</h3>
        </div>
      </div>
    </div>
  )
}

export default App;
