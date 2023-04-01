import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useMemo, useReducer } from 'react';

import MyClassComponent from './MyClassComponent';


function compute(a,b){
 console.log(a*b)
   return a*b
}


function App() {

 
  const reducer = (state   , action)=>{
   switch(action.type){
    case  "INCREMENT":
      return {count : state.count+1 , a:state.a , b:state.b};

    case  "INC" :
      return {count:state.count , a : state.a+1 , b : state.b+1}
    default : 
      return state

   }
  }

  

  const [state , dispatch] = useReducer(reducer , {count : 0 , a:10 , b : 20})
  const MemoizedCompute = useMemo(()=>{compute(state.a,state.b)} ,[state.a , state.b])
  //const MemoizedCompute = compute(state.a,state.b);

  //console.log(MemoizedCompute)
 // const [count  , setCount] = useState(0);
  return (
    <div className="App">
          <button style={{width:60 , color: 'white' , margin: 20, height:30 , backgroundColor:'blue'}} onClick={() => dispatch({type : "INCREMENT"})}>Click</button>

          <button style={{width:60 , color: 'white' , margin: 20, height:30 , backgroundColor:'blue'}} onClick={() => dispatch({type : "INC"})}>State</button>

          {state.count}
          <h2>{MemoizedCompute}</h2>

           <MyClassComponent/>


    </div>
  );
}

export default App;
