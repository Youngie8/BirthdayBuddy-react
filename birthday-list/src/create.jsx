import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');
  const history = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  const person = { name, birthday, age}
  fetch('http://localhost:8000/personDetail/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(person)
    })
    .then(() => {
      history(-1);
    })
}
  return (
    <div className='create'>
      <h3>Add A Friend's Birthday!</h3>
      <form onSubmit={ handleSubmit }>
        <label>Friend's Name : </label>
        <input 
        type="text"
        value={ name }
        onChange={(e) => setName(e.target.value)}/>
        <label>Friend's Birthday : </label>
        <input 
        type="date"
        value={ birthday }
        onChange={(e) => setBirthday(e.target.value)}/>
        <label>Friend's Age : </label>
        <input 
        type="number"
        value={ age }
        onChange={(e) => setAge(e.target.value)}/>
        <button>Add friend!</button>
      </form>
    </div>
  )
}

export default Create