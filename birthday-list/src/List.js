
const List = () => {
    const listCont = {
        title : "My List"
    }
  return (
    <div className="Main">
        <div className="List">
            <h3> { listCont.title } </h3>
            <button className="Add-button">Add</button>
        </div>
    </div>
  )
}

export default List