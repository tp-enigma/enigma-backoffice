import React, { useState }  from "react";

// totalPage: Array.from(Array(Math.round(result['Countries'].length / this.state.pagination)).keys()) calcul de totalPage, faire passer le tableau à la place de "result[countries]"

  class Pagination extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        totalPage: 0,
        pagination: 5,
        currentPagination: 0,
        currentIndex: 0,
      };
    }  

    updatePagination(prmPagination) {
      this.setState({
        currentPagination: prmPagination,
        currentIndex: this.state.pagination * (prmPagination)
      });
    }

    render(){
      {totalPage.slice(currentPagination <=3 ? 0 : currentPagination-2 , currentPagination + 3 ).map((value, index) => {
        return <li key={index}><button onClick={() => {this.updatePagination(value)}}>{value+1}</button></li>
      })}
    }
  }
    export default Pagination; 