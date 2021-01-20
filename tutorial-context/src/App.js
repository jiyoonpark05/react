// import ColorBox from "./component/ColorBox";
// import ColorContext from "./context/color";

// const App = () => {
//   return (
//     <ColorContext.Provider value={{ color: "red" }}>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   );
// };

// export default App;

//동적 context

import ColorBox from "./component/ColorBox";
import { ColorProvider } from "./context/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
