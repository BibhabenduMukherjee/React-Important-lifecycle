import React from "react";

// learn about different type of life cycle methods invlove in react
// 1. Mounting phase -- constructor , static getDerivedStateFromProps ,  render(), componentDidMount()
// 2. Updating phase -- shouldComponentUpdate() , componentDidUpdate() , getSnapshotBeforeUpdate()
// 3. Unmounting phase --- componentWillUnmount()
// 4. error handling phase --- static getDerivedStateFromError() , componentDidCatch()













// componentWillUnmount()

class ComponentWillUnmount extends React.Component{
    constructor(props){
        super(props);
        // React.createRef() is used to create a reference to an element in a React component.
        this.myRef = React.createRef()
    }


    componentDidMount(){
        this.myRef.current.addEventListener('click',this.handleClick)
    }


   componentWillUnmount() {
    this.myRef.current.removeEventListener('click', this.handleClick);
  }

   handleClick(){
    alert("Clicked!")
   }


   render(){
    return (
        <div ref = {this.myRef} style={{marginTop : 40 ,cursor : 'pointer'}}>
            Click me 
        </div>
    )
   }

}






// demonstarte the componentDidMount()
// this similar as useEffet() functional hooks
// used to perform some sideEffets in react component
// 

class ComponetDidMount extends React.Component{
    constructor(props){
        // called parent constructor
        super(props);
        this.state = {
            data : null
        }
    }

    componentDidMount(){
        const rand = Math.floor(Math.random()*80)
        fetch(`https://jsonplaceholder.typicode.com/posts/${rand}`).then((res)=>{
           
           return res.json()
        }).then(data => this.setState({data}))
    }

    render(){
       
       console.log(this.state.data?.id)
        return (
            <div>
             {this.state.data?.title}
            </div>
        )
    }
}



//shouldComponentUpdate()
class ShouldComponentUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.count !== nextState.count) {
        return true;
      }
      return false;
    }
  
    handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      console.log("Component is rendering");
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleClick}>Increment Count</button>
        </div>
      );
    }
  }
  





class MyClassComponent extends React.Component{
constructor (props){
    super(props);
    this.state =  {
        count : 0
    }

    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
    this.setState(prevState => ({
        count: prevState.count + 1
      }));
}

render(){
    return (
        <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>update</button>
            <div style={{marginTop : 20}}>
                <h4>The componentDidMount output</h4>
                <ComponetDidMount/>
                <ComponentWillUnmount/>
            </div>
        </div>
    )
}



}

export default MyClassComponent