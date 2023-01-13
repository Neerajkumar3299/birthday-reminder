import "./List.css"
function List(props){
    const {people}=props
    return(
        <>
        <article className="list">
            {people.map((person)=>{
                return <div className="person" key={person.id}>
                    <img src={person.image} alt="" />
                    <div className="detail">
                        <h4>{person.name}</h4>
                        <h5>{person.age}</h5>
                    </div>
                </div>
            })}
        </article>
        </>
    )
}
export default List