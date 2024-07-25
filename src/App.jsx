import React from "react";

import { Routes, Route } from "react-router-dom";

import "@assets/css/App.css";

const Home = React.lazy(() => import("@pages/Home"));
const Quiz = React.lazy(() => import("@pages/Quiz"));
const Error = React.lazy(() => import("@pages/Error"));
const Contact = React.lazy(() => import("@pages/Contact"));

function App() {
  return (
    <div className="App">
      {/* <Routes> is a React Router component that allows you to define multiple routes. */}
      <Routes>
        {/* <Route> is a React Router component that allows you to define a single route. */}
        {/* <React.Suspense> is a React component
        that allows you to define a fallback component while the component is loading. */}
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="quiz"
          element={
            <React.Suspense fallback={<>...</>}>
              <Quiz />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Error />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
