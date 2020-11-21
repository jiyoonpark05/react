import React from "react";
import TrelloCards from "./TrelloCards";
import TrelloActionBtn from "./TrelloActionBtn";
import {Droppable} from "react-beautiful-dnd";

const TrelloList =({title, cards, listID})=> {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
            <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={styles.container}
            >
                <h4>{title}</h4>
                {cards.map ((card, index) => (
                    <TrelloCards key={card.id} index={index} text={card.text} id={card.id}/>
                ))}
                <TrelloActionBtn listID = {listID} />
                {provided.placeholder}
            </div>
            )}
        </Droppable>
    );
};
const styles = {
    container : {
        backgroundColor : "#dfe3e6",
        borderRadius : 3,
        width  :300,
        height :"100%",
        padding: 9,
        marginRight : 8
    }
};

export default TrelloList;