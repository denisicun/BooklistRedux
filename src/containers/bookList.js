import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList(){

    // builds a list of  books in the props, which is the state of the app
    return this.props.books.map((book) => {
      return(
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
          {book.title}
        </li>
      );
    })
  }

  // when the component is called, all the books in the state of the app are rendered with the render books function
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever return from here will be in props inside books list
  return {
    books: state.books
  };
}

// anything returned from the function, will end up as props in the book list container
function mapDispatchToprops(dispatch){
  // whenever select book is called, the result should be passed top all of the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote book list from component to container, it needs to know about the dispatch method, select book,
// make it availibale as a prop
export default connect(mapStateToProps, mapDispatchToprops)(BookList);
