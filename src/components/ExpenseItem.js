import React, { useContext } from 'react';
import { FaMinusCircle} from 'react-icons/fa';
import {IoAddCircleSharp} from 'react-icons/io5';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) =>{
        const expense = {
            name:name,
            cost:-10
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload:expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>R{props.cost}</td>
        <td><IoAddCircleSharp color='green' size='2.5em' onClick={event=> increaseAllocation(props.name)}></IoAddCircleSharp></td>
        <td><FaMinusCircle size='2.4em' color="red" onClick={event => decreaseAllocation(props.name)}></FaMinusCircle></td>
        <td><TiDelete onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
