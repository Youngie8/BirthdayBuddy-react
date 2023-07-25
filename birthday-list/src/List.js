import { useFetch } from './usefetch';
const List = () => {
    const listCont = {
        title : "My List"
    }
    const {data: personDetail, error} = useFetch('http://localhost:8000/personDetail');
  return (
    <div>
        {error && <div>{ error }</div>}
        {personDetail && ( <div className="Main">
        <div className="List">
            <h3> { listCont.title } </h3>
            { personDetail.map((person) => (
                <div className="peron-preview" key={person.id}>
                    <h2>{person.name}</h2>
                    <p>Written by {person.age}</p>
                </div>
            ))}
            <button className="Add-button">Add</button>
        </div>
    </div>)}
    </div>
  )
}

export default List