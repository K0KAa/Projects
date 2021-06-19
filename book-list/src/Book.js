import React, { Component } from 'react'
import Button from './Button';

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: 1
        };
    }
    render() {
        const subCount = () =>{
            this.setState({
                count:this.state.count-1
            });
        };

        const addCount = () =>{
            this.setState({
                count:this.state.count+1
            });
        };

        const { id, img, title, author } = this.props.info;
        const { handleDelete } = this.props;
        return (
            <div>
                <p>Book : {id}</p>
                <h3>{title}</h3>
                <img src={img} width = "200" alt="book"/>
                <section>
                    <b>{author}</b>
                    <button onClick = {subCount}>-</button>
                    <button>{this.state.count}</button>
                    <button onClick = {addCount}>+</button>
                </section>
                <button type ="button" onClick={()=> handleDelete(id)}>delete me </button>
            </div>
        )
    }
}
