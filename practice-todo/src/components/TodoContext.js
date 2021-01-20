import { createContext, useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "프로젝트 생성하기2",
    done: true,
  },
  {
    id: 3,
    text: "프로젝트 생성하기3",
    done: false,
  },
  {
    id: 4,
    text: "프로젝트 생성하기4",
    done: true,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

//우리는 하나의 Context 를 만들어서 state 와 dispatch 를 함께 넣어주는 대신에,
//두개의 Context 를 만들어서 따로 따로 넣어줄 것입니다.
//이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지 할 수 있습니다.
//추가적으로, 사용하게 되는 과정에서 더욱 편리하기도 합니다.

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
