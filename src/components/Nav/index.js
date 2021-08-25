/* eslint-disable */

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { 
IconButton, MenuItem, 
Input, Select, Button
} from '@material-ui/core';
import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

import "./nav.scss";

function Nav() {
  const { state, dispatch } = useContext(AppContext);
  const [active, setactive] = useState(false);
  const [tag, setTag] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  function handleToggle() {
    setactive(() => !active);
  }

  function tagHandler(e) {
    setTag(e.target.value);
  }

  function typeHandler(e) {
    setType(e.target.value);
  }

  function amountHandler(e) {
    setAmount(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();

    if (tag && type && amount) {
      dispatch({
        type: "ADD", 
        item: {
          id: uuidv4(),
          tag,
          type,
          amount: parseInt(amount)
        }
      });
    } else {
      alert("Fill in the blanks");
    }
  }

  return (
    <nav className="nav">
      <div className="nav__form" style={{ display: active ? 'block' : 'none' }}>
        <div className="close-icon">
          <IconButton onClick={() => handleToggle()}>
            <CloseIcon />
          </IconButton>
        </div>
        <form onSubmit={formHandler}>
          <div className="row">
            <label>Tag:</label>
            <Select 
              id="select"
              value={tag}
              onChange={tagHandler}>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Games">Games</MenuItem>
              <MenuItem value="Shopping">Shopping</MenuItem>
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </div>
          <div className="row">
            <label>Type:</label>
            <Select value={type} onChange={typeHandler}>
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </div>
          <div className="row">
            <label>Amount:</label>
            <Input required={true} onChange={amountHandler} type="number" placeholder="Amount" />
          </div>
          <Button type="submit" variant="contained" color="primary">Add</Button>
        </form>
      </div>
      <div className="nav__toggle">
        <IconButton onClick={handleToggle}>
          <MenuOutlinedIcon fontSize="large" />
        </IconButton>
      </div>
    </nav>
  )
}

export default Nav;