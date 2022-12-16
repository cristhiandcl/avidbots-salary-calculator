import { useState } from "react";
import SummaryRender from "./components/SummaryRender";

function Calculator() {
  const [formData, setFormData] = useState([
    { name: "Night Surcharge", value: "0" },
    { name: "Day Surcharge (O)", value: "0" },
    { name: "Day Surcharge (R)", value: "0" },
    { name: "Night Holiday (O)", value: "0" },
    { name: "Night Holiday (R)", value: "0" },
  ]);
  const [salary, setSalary] = useState(0);
  const [summary, setSummary] = useState({});
  const [isCollapse, setIsCollapse] = useState(false);

  const handleStatecall = (event) => {
    setFormData(
      formData.map((elem) =>
        elem.name === event.target.name
          ? {
              ...elem,
              value: event.target.value,
            }
          : elem
      )
    );
  };

  const handleState = (event) => {
    event.target.name === "Night Surcharge" && handleStatecall(event);
    event.target.name === "Day Surcharge (O)" && handleStatecall(event);
    event.target.name === "Day Surcharge (R)" && handleStatecall(event);
    event.target.name === "Night Holiday (O)" && handleStatecall(event);
    event.target.name === "Night Holiday (R)" && handleStatecall(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nightSurcharge = 2734.38 * parseInt(formData[0].value);
    const daySurchargeO = 5859.38 * parseInt(formData[1].value);
    const daySurchargeR = 13671.88 * parseInt(formData[2].value);
    const nightHolidayO = 8593.75 * parseInt(formData[3].value);
    const nightHolidayR = 16406.25 * parseInt(formData[4].value);

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

    setSummary({
      baseSalary: 1875000,
      nightSurcharge,
      daySurchargeO,
      daySurchargeR,
      nightHolidayO,
      nightHolidayR,
      connectivity,
      healthPe,
      subtotal: salarySurcharges,
    });
  };
  const cellsRender = formData.map((elem, i) => (
    <div className="flex flex-col" key={i}>
      <label className="">{elem.name}</label>
      <input
        className="text-center border"
        type="text"
        placeholder="Value"
        value={elem.value}
        onChange={handleState}
        name={elem.name}
      />
    </div>
  ));

  const toggle = () => {
    setIsCollapse(!isCollapse);
  };

  // console.log(summary);

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="space-y-12">
        <p className="text-center text-3xl sm:text-5xl md:text-7xl xl:w-full w-2/3 mx-auto text-green-300 font-bold">
          Avibots Salary Calculator
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-bold items-center"
        >
          <div className="space-y-12 text-center">
            <div className="grid xl:grid-cols-5 xl:space-x-4 text-xl gap-y-6">
              {cellsRender}
            </div>
            {/* {Object.keys(summary).length > 0 && (
              <SummaryRender summary={summary} />
            )} */}
            {Object.keys(summary).length > 0 && (
              <div
                onClick={toggle}
                className="text-2xl flex justify-center space-x-4 cursor-pointer"
              >
                <p className="leading-none">Summary</p>
                {isCollapse ? (
                  <p className="rotate-90 text-green-300 leading-none text-3xl">
                    {"<"}
                  </p>
                ) : (
                  <p className="rotate-90 text-green-300 leading-none text-3xl">
                    {">"}
                  </p>
                )}
              </div>
            )}
            {Object.keys(summary).length > 0 && isCollapse && (
              <SummaryRender summary={summary} />
            )}
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
