import { useState } from "react";

function Calculator() {
  const [formData, setFormData] = useState({
    ordinaryDay: "",
    dayHoliday: "",
    nightHoliday: "",
  });

  const handleState = (event) => {
    event.target.name === "ordinaryDay" &&
      setFormData({ ...formData, ordinaryDay: event.target.value });
    event.target.name === "dayHoliday" &&
      setFormData({ ...formData, dayHoliday: event.target.value });
    event.target.name === "nightHoliday" &&
      setFormData({ ...formData, nightHoliday: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen border-4 flex items-center justify-center">
      <div className="space-y-12">
        <p className="text-center text-8xl text-green-300">
          Avibots Salary Calculator
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-bold items-center"
        >
          <div className="space-y-12 text-center">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label>Day ordinary</label>
                <input
                  className="text-center"
                  type="text"
                  placeholder="Value"
                  value={formData.ordinaryDay}
                  onChange={handleState}
                  name="ordinaryDay"
                />
              </div>
              <div className="flex flex-col">
                <label>Day holiday</label>
                <input
                  className="text-center"
                  type="text"
                  placeholder="Value"
                  value={formData.dayHoliday}
                  onChange={handleState}
                  name="dayHoliday"
                />
              </div>
              <div className="flex flex-col">
                <label>Night holiday</label>
                <input
                  className="text-center"
                  type="text"
                  placeholder="Value"
                  value={formData.nightHoliday}
                  onChange={handleState}
                  name="nightHoliday"
                />
              </div>
            </div>
            <button type="submit">Check this month salary</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
