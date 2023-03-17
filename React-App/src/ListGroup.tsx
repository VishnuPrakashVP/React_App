import { Fragment } from "react";

function ListGroup() {

    const items = [
        "Apple",
        "Mango",
        "Strawberry",
        "Plum",
        "Guava"
    ]
    return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
            {
                items.map(items=> <li key={items} className="list-group-item">{items}</li>)
            }
        </ul>
    </Fragment>
    )
}

export default ListGroup;