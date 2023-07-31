import useFetch  from './usefetch';
import { Link } from 'react-router-dom'

const List = () => {
    const listCont = {
        title : "My Friends' List"
    }
    const {data:personDetail, error} = useFetch('http://localhost:8000/personDetail');

    const handleDelete = () => {
        console.log('please delete')
    }
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
                    <button onClick={handleDelete}> Delete </button>
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