import React, { Component } from 'react';

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  async componentDidMount() {
    const res = await fetch('/api/students');

    const data = res.json();
    console.log(data);
    this.setState({
      students: data
    });
    {
    }
  }

  render() {
    return <div>{this.data.students}</div>;
  }
}
export default Students;
