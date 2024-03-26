// AgeCalculator.js
import "./AgeCalculator.css";
import React, { useState } from "react";
const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const diffMilliseconds = today.getTime() - birthDate.getTime();
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

    const yearsDiff = Math.floor(diffDays / 365);
    const monthsDiff = Math.floor((diffDays % 365) / 30); // Approximate months
    const daysLeft = diffDays - yearsDiff * 365 - monthsDiff * 30;

    const ageObject = {
      years: yearsDiff,
      months: monthsDiff,
      days: daysLeft,
    };

    setAge(ageObject);
  };

  return (
    <div className="container">
      <h2 className="container-1">Age Calculator</h2>
      <label className="container-2">
        Enter your birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </label>
      {age.years > 0 && (
        <p className="container-4">
          Your age is: {age.years} years, {age.months} months, and {age.days}{" "}
          days old
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
