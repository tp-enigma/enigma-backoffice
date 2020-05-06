pagination: 5,
currentPagination: 0,
currentIndex: 0,

updatePagination(prmPagination) {
    this.setState({
      currentPagination: prmPagination,
      currentIndex: this.state.pagination * (prmPagination)
    });
  }

  {totalPage.slice(currentPagination <=3 ? 0 : currentPagination-2 , currentPagination + 3 ).map((value, index) => {
    return <li key={index}><button onClick={() => {this.updatePagination(value)}}>{value+1}</button></li>
  })}