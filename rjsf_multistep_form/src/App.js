import React, { useState } from "react";
import Form from "react-jsonschema-form";
import { BrowserRouter as Router, Route, Routes,useNavigate,Navigate} from "react-router-dom";
import {Schema, UISchema } from "./schema";


const Step1 = ({ formData, onChange }) => {
  const [stepData, setStepData] = useState(formData);
  const navigate = useNavigate();

  const handleNext = () => { 
    navigate("/step2");
  };

  const handleChange = ({ formData }) => {
    setStepData(formData);
  };

  return (
    <div>
      <h2>ステップ1</h2>
      <Form schema={Schema} uiSchema={UISchema} formData={stepData} onChange={handleChange} />
      <button onClick={handleNext}>次へ</button>
    </div>
  );
};

const Step2 = ({ formData, onChange }) => {
  const [stepData, setStepData] = useState(formData);
  const navigate = useNavigate();

  const handleBefore = () => {
    navigate("/step1");
  };

  const handleChange = ({ formData }) => {
    setStepData(formData);
  };

  return (
    <div>
      <h2>ステップ2</h2>
      <Form schema={Schema} uiSchema={UISchema} formData={stepData} onChange={handleChange} />
      <button onClick={handleBefore}>前へ</button>
    </div>
  );
};

const RedirectTop = () => {
  return (
    <div>
      <Navigate replace to="step1" />
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        {/*<Route exact path="/" element={<RedirectTop />} /> */}
        <Route exact path="/" element={<RedirectTop />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
      </Routes>
    </Router>
  );
};

export default App;
