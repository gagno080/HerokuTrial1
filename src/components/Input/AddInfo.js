import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddInfo.module.css'; //import here bc this css is acting on Card
import Button from '../UI/Button';

const AddInfo = (props) => {
    const [enteredCat, setEnteredCat] = useState('');
    const [enteredComm, setEnteredComm] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredPlan, setEnteredPlan] = useState('');
    const [enteredRetry, setEnteredRetry] = useState('');

    const addInfoHandler = (event) => {
        event.preventDefault();
        props.onAddInfo(enteredCat,enteredComm, enteredTime, enteredPlan, enteredRetry);
        //console.log(enteredCat,enteredComm, enteredTime, enteredPlan, enteredRetry)
        setEnteredCat('');
        setEnteredComm('');
        setEnteredTime('');
        setEnteredPlan('');
        setEnteredRetry('');
    };

    //Handler for Category
    const catChangeHandler = (event) => {
        setEnteredCat(event.target.value);
    };

    //Handler for Command
    const commChangeHandler = (event) => {
        setEnteredComm(event.target.value);
    };

    //Handler for Timeout
    const timeChangeHandler = (event) => {
        setEnteredTime(event.target.value);
    };

    //Handler for Command Plan
    const planChangeHandler = (event) => {
        setEnteredPlan(event.target.value);
    };

    //Handler for Retries
    const retryChangeHandler = (event) => {
        setEnteredRetry(event.target.value);
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addInfoHandler}>
                <label htmlFor="category">Category</label>
                <input id ="category" type="text" value={enteredCat} onChange={catChangeHandler}></input>
                <label htmlFor="command">Command</label>
                <input id="command" type="text" value={enteredComm} onChange={commChangeHandler}></input>
                <label htmlFor="timeout">Timeout</label>
                <input id="timeout" type="text" value={enteredTime} onChange={timeChangeHandler}></input>
                <label htmlFor="commandplan">Command Plan</label>
                <input id="commandplan" type="text" value={enteredPlan} onChange={planChangeHandler}></input>
                <label htmlFor="retries">Numer of Retries</label>
                <input id="retires" type="text" value={enteredRetry} onChange={retryChangeHandler}></input>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );
};

export default AddInfo;