import React, { Component } from 'react';
import Book from "./Book";
import Books from "./Bookdata";

export default class Booklist extends Component {
    constructor(props){
        super(props);
        this.state= {
            books:Books
        };
    }
    handleDelete =(id)=>{
        const sortedBook = this.state.books.filter((item)=> item.id !==id);
        this.setState ({
            books: sortedBook
        })
    }
    render() {
        return (
            <section>
            {this.state.books.map((item)=>(
                <Book key = {item.id} info ={item} handleDelete = {this.handleDelete}/>
            ))}
            </section>
        )
    }
}
