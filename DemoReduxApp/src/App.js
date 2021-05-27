import React from 'react'
import "./App.css";
import { increment, decrement } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";


const App = () => {
    const mystate = useSelector((state) => state.newNumber);
    const dispatch = useDispatch();

    return (
        <>
            <div className="main-div">
                <div className="container">
                    <h1>Increment/Decrement counter</h1>
                    <h4>using React and Redux</h4>
                    <div className="quantity">
                        <button className="quantity__minus" title="Decrement" onClick={() => dispatch(decrement())}>
                            <span>-</span></button>
                        <input name="quantity" type="text" className="quantity__input" value={mystate.value} />
                        <button className="quantity__plus" title="Increment" onClick={() => dispatch(increment())}>
                            <span>+</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;