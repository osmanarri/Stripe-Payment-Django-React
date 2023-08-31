// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  

  
);

export default App;

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

  

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }