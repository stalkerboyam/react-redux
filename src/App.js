import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"
import Button from 'react-bootstrap/Button';

function App() {

  const state = useSelector((state) => state.bank);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  

  return (
    <div className="App">
      <h1>{state}</h1>
      <Button variant="primary" onClick={() => depositMoney(1000)}>Deposit</Button>{' '}
      <Button variant="danger" onClick={() => withdrawMoney(1000)}>Withdraw</Button>{' '}
     </div>
  );
}

export default App;
