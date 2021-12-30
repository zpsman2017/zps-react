import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import School from './pages/School';
import NoPage from './pages/NoPage';
import Current from './pages/Current';
import About from './pages/About';
import Bitcoin from './pages/Bitcoin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="school" element={<School />} />
          <Route path="current" element={<Current />} />
          <Route path="about" element={<About />} />
          <Route path="bitcoin" element={<Bitcoin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
