import React from 'react';
import './App.css';
import { AllStudentsContainer, AddStudentForm } from "../components/containers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <AllStudentsContainer />
        <AddStudentForm />
      </header>
    </div>
  );
}

export default App;
