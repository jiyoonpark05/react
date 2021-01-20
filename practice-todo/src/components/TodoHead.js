import styled from "styled-components";

const TodoHeadBlock = styled.div`
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

const TodoHead = () => {
  let Today = new Date();
  let year = Today.getFullYear();
  let month = Today.getMonth() + 1;
  let day = Today.getDay();
  let options = { weekday: "long" };
  let day_f = new Intl.DateTimeFormat("ko-KR", options).format(Today);

  return (
    <TodoHeadBlock>
      <h1>
        {year}년 {month}월 {day}일
      </h1>
      <div className="day">{day_f}</div>
      <div className="task">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
