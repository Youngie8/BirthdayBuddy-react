import useFetch  from './usefetch';
import { Link } from 'react-router-dom'

const List = () => {
    const listCont = {
        title : "My Friends' Birthdays"
    }
    const {data:personDetail, error} = useFetch('http://localhost:8000/personDetail');
  return (
    <div>
        {error && <div>{ error }</div>}
        {personDetail && ( <div className="Main">
        <div className="List">
            <h3 className="list-title"> { listCont.title } </h3>
            { personDetail.map((person) => (
                <div className="person" key={person.id}>
                    <h5>{person.name}</h5>
                    <p>Age : { person.age }</p>
                </div>
            ))}
            <Link to="/create">
                <button className="Add-button">Add</button>
            </Link>
        </div>
    </div>)}
    </div>
  )
}

export default List