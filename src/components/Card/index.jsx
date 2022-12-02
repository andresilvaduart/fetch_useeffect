import "./style.css";

export function Card({ element }) {
    console.log(element);
    return (
        <div className="containerCard">
            <img src={element.image} />
            <p>Name: {element.name}</p>
            <p>Gender: {element.gender}</p>
            <p>Origin: {element.origin.name}</p>
            <p>Status: {element.status}</p>
        </div>
    );
}