import React from 'react';
import Styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = Styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    }
    .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    }
    .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    }
`;


function TodoHead(){
    const today = new Date();
    const convertToday = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();
    const day = today.getDay();
    let dayStr = ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'];
    let str;
    for(let i=0;i<dayStr.length;i++){
        if(i === day){
            str = dayStr[i-1];
            break;
        }
    }

    const todos = useTodoState();
    console.log(todos);
    const undoneTasks = todos.filter(todo => !todo.done);

    return (
        <TodoHeadBlock>
            <h1>{convertToday}</h1>
            <div class="day">{str}</div>
            <div class="tasks-left">할 일 {undoneTasks.length} 개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;