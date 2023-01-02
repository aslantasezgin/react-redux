import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setUserName, SET_USERNAME } from './store/actions/userActions';
import { DECREMENT, decrementNumber, INCREMENT, incrementNumber } from './store/actions/countActions';

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
          dispatch(setUserName(userName))
        }}>Change Name</button>

        

      <p>SAYI :{countState.count}</p>
      <button onClick={() => {
        dispatch(incrementNumber(5))
      }} >Arttır</button>

<button onClick={() => {
        dispatch(decrementNumber(5))
      }} >Azalt</button>
      </header>
    </div>
  );
}

export default App;
