import React, { Component } from 'react';



class DataLoader extends Component {
  state = {
    users: null,
    isLoading: false,
    error: null,
  };

  componentDidMount = () => {
    this.load();
  };

  load = () => {
    const { loadData } = this.props;

    this.setState({
      isLoading: true,
    });

    loadData()
      .then((data) => this.setState({ users: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const jsxLayout = this.props.render(this.state);

    return jsxLayout;
  }
}

export default DataLoader;
