import { useState } from "react";

export default function UserInput({info, onInputChange}) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e, "initialInvestment")}
            value={info.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e, "annualInvestment")}
            value={info.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e, "expectedReturn")}
            value={info.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(e) => onInputChange(e, "duration")}
            value={info.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
