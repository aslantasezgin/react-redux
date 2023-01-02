import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const userState = useSelector(state => state.user)
  const countState = useSelector(state => state.count)
  const dispatch = useDispatch()

  const [userName, _setUserName] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => {
           _setUserName(e.target.value)
        }}></input>
        <p>NAME : {userState.userName} </p>
        <button onClick={() => {
          dispatch({
            type:"SET_USERNAME",
            payload:userName
          })
        }}>Change Name</button>

        

      <p>SAYI :{countState.count}</p>
      <button onClick={() => {
        dispatch({
          type:"INCREMENT",
          payload:5

        })
      }} >Arttır</button>

<button onClick={() => {
        dispatch({
          type:"DECREMENT",
          payload:5

        })
      }} >Azalt</button>
      </header>
    </div>
  );
}

export default App;
