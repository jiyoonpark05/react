import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux";
import TrelloActionBtn from "./TrelloActionBtn";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {

   onDragEnd = (result) => {

       const  { destination, source, draggableId } = result;

  }
  render() {
    const { lists } = this.props;
    return (
        <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="App">
              <h2>Hello</h2>
                <div style={styles.listContainer}>
                    { lists.map(({title, cards}, id)=> (
                        <TrelloList listID ={id} key={id} title={title} cards={cards} />
                    ))}
                    <TrelloActionBtn list />
                </div>
            </div>
        </DragDropContext>
    );
  }
}

const styles = {
    listContainer : {
        display : "flex",
        flexDirection: " row"
    }
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);