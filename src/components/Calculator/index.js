/* eslint-disable */

import "./calculator.scss";
import { AppContext } from "../../context/AppContext";
import { useContext, useState, useEffect } from "react";
import ItemList from "../ItemList";
import { ListItem, List, ListItemText } from "@material-ui/core";

const Calculator = () => {
  const { state } = useContext(AppContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let income = 0, expense = 0;

    if (state.item.length) {
      state.item.forEach(i => {
        if (i.type === "income") {
          var money =  i.amount;
          income += money
        } else if (i.type === "expense") {
          var money = i.amount;
          expense -= money
        };
      })
    }
    setBalance(income + expense);
  });

  const StateList = () => {
    return state.item.length > 0 ? state.item.map(i => (
      <ItemList 
        amount={i.amount}
        id={i.id}
        tag={i.tag}
        type={i.type}
        key={i.id} />
    )) : <Empty />
  }

  function Empty() {
    return (
      <List>
        <ListItem alignItems="center" className="calculator__lists__item">
          <ListItemText primary="Empty" />
        </ListItem>
      </List>
    )
  }

  return (
    <div className="calculator">
      <div className="calculator__balance">
        <div className="calculator__balance__title">
          <h4>Current Balance</h4>
        </div>
        <div className="calculator__balance__price">
          <h3>
            <span className="calculator__balance__price__currency">$</span>
            {balance}
          </h3>
        </div>
      </div>

      <div className="calculator__lists">
        <StateList />
      </div>
    </div>
  )
};

export default Calculator;