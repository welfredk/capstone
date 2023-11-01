import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.route";
import Navigation from "./routes/navigation/navigation.route";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<div>hello</div>} />
      </Route>
    </Routes>
  );
}

export default App;
