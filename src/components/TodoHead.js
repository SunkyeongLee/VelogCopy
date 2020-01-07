import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    
    .task-left{

    }


`;

function TodoHead() {
    return ( <TodoHeadBlock>
        <h1>2020/1/6</h1>
        <div className="day">월요일</div>
        <div className="day">월요일</div>
    </TodoHeadBlock>
    );
}

export default TodoHead;