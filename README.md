
# React lifecycle method



## Authors

- [@Bibhabendu Mukherjee](https://github.com/BibhabenduMukherjee)


## Introduction 



React has several lifecycle methods that are invoked at different stages of a component's existence. These methods can be used to perform certain actions or operations on a component when it is being created, mounted, updated, or unmounted. Here are the different categories of lifecycle methods in React:

Mounting Methods: These methods are called when an instance of a component is created and inserted into the DOM. The mounting methods are: like 
constructor(),
static getDerivedStateFromProps()

Updating Methods: These methods are called when a component is re-rendered due to a change in its props or state. The updating methods are:
shouldComponentUpdate(), componentDidUpdate()

 

## Class-based Component

Start with. a class Based React Compoent 

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, world!"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default MyComponent;
```
    
## Constructor 

```javascript

import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>You clicked the button {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

```
## Documentation

[Documentation](https://linktodocumentation)

