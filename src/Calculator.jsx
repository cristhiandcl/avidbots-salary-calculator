import { useState } from "react";

function Calculator() {
  const [formData, setFormData] = useState({
    nightSurcharge: "0",
    daySurchargeO: "0",
    daySurchargeR: "0",
    nightHolidayO: "0",
    nightHolidayR: "0",
  });
  const [salary, setSalary] = useState(0);

  const handleState = (event) => {
    event.target.name === "nightSurcharge" &&
      setFormData({ ...formData, nightSurcharge: event.target.value });
    event.target.name === "daySurchargeO" &&
      setFormData({ ...formData, daySurchargeO: event.target.value });
    event.target.name === "daySurchargeR" &&
      setFormData({ ...formData, daySurchargeR: event.target.value });
    event.target.name === "nightHolidayO" &&
      setFormData({ ...formData, nightHolidayO: event.target.value });
    event.target.name === "nightHolidayR" &&
      setFormData({ ...formData, nightHolidayR: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nightSurcharge = 2734.38 * parseInt(formData.nightSurcharge);
    const daySurchargeO = 5859.38 * parseInt(formData.daySurchargeO);
    const daySurchargeR = 13671.88 * parseInt(formData.daySurchargeR);
    const nightHolidayO = 8593.75 * parseInt(formData.nightHolidayO);
    const nightHolidayR = 16406.25 * parseInt(formData.nightHolidayR);

    const connectivity = 117172;

    const salarySurcharges =
      1875000 +
      nightSurcharge +
      daySurchargeO +
      daySurchargeR +
      nightHolidayO +
      nightHolidayR;

    const healthPe = salarySurcharges * 0.08;

    setSalary(
      new Intl.NumberFormat("es-CO").format(
        parseInt(salarySurcharges + connectivity - healthPe)
      )
    );
    // console.log(salary);
  };

  return (
    <div className="h-screen border-4 flex items-center justify-center px-6">
      <div className="space-y-12">
        <p className="text-center  text-5xl md:text-8xl sm:text-6xl text-green-300 font-bold">
          Avibots Salary Calculator
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-bold items-center"
        >
          <div className="space-y-12 text-center">
            <div className="grid xl:grid-cols-5 xl:space-x-4 text-xl gap-y-6">
              <div className="flex flex-col">
                <label className="">Night surcharge</label>
                <input
                  className="text-center border"
                  type="text"
                  placeholder="Value"
                  value={formData.nightSurcharge}
                  onChange={handleState}
                  name="nightSurcharge"
                />
              </div>
              <div className="flex flex-col">
                <label>Day surcharge (O)</label>
                <input
                  className="text-center border"
                  type="text"
                  placeholder="Value"
                  value={formData.daySurchargeO}
                  onChange={handleState}
                  name="daySurchargeO"
                />
              </div>
              <div className="flex flex-col">
                <label>Day surcharge (R)</label>
                <input
                  className="text-center border"
                  type="text"
                  placeholder="Value"
                  value={formData.daySurchargeR}
                  onChange={handleState}
                  name="daySurchargeR"
                />
              </div>
              <div className="flex flex-col">
                <label>Night holiday (O)</label>
                <input
                  className="text-center border"
                  type="text"
                  placeholder="Value"
                  value={formData.nightHolidayO}
                  onChange={handleState}
                  name="nightHolidayO"
                />
              </div>
              <div className="flex flex-col">
                <label>Night holiday (R)</label>
                <input
                  className="text-center border"
                  type="text"
                  placeholder="Value"
                  value={formData.nightHolidayR}
                  onChange={handleState}
                  name="nightHolidayR"
                />
              </div>
            </div>
            {salary !== 0 && (
              <p className="text-green-300 font-bold text-4xl">
                $ {salary} COP
              </p>
            )}
            <button
              type="submit"
              className="border py-2 px-4 rounded-full bg-green-300 hover:scale-105 text-2xl"
            >
              Check this month's salary
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
