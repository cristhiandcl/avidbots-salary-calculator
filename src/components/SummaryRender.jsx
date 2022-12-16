function SummaryRender({ summary }) {
  return (
    <div className="text-gray-400">
      <p className="pb-4">
        Base Salary: ${" "}
        {new Intl.NumberFormat("es-CO").format(parseInt(summary.baseSalary))}{" "}
        COP
      </p>
      <div className="flex justify-between xl:w-2/4 mx-auto text-green-300">
        <p>+</p>
        <p>
          Night Surcharge: ${" "}
          {new Intl.NumberFormat("es-CO").format(
            parseInt(summary.nightSurcharge)
          )}{" "}
          COP
        </p>
      </div>
      <div className="flex justify-between xl:w-2/4 mx-auto text-green-300">
        <p>+</p>
        <p>
          Day Surcharge: ${" "}
          {summary.daySurchargeO !== 0
            ? new Intl.NumberFormat("es-CO").format(
                parseInt(summary.daySurchargeO)
              )
            : new Intl.NumberFormat("es-CO").format(
                parseInt(summary.daySurchargeR)
              )}{" "}
          COP
        </p>
      </div>
      <div className="flex justify-between xl:w-2/4 mx-auto text-green-300">
        <p>+</p>
        <p>
          Night Holiday: $
          {summary.nightHolidayO !== 0
            ? new Intl.NumberFormat("es-CO").format(
                parseInt(summary.nightHolidayO)
              )
            : new Intl.NumberFormat("es-CO").format(
                parseInt(summary.nightHolidayR)
              )}{" "}
          COP
        </p>
      </div>
      <div className="flex justify-between xl:w-2/4 mx-auto text-green-300">
        <p>+</p>
        <p>
          Connectivity: ${" "}
          {new Intl.NumberFormat("es-CO").format(
            parseInt(summary.connectivity)
          )}{" "}
          COP
        </p>
      </div>
      <div className="flex justify-between xl:w-2/4 mx-auto text-red-600">
        <p>-</p>
        <p>
          Health and Pension: ${" "}
          {new Intl.NumberFormat("es-CO").format(parseInt(summary.healthPe))}{" "}
          COP
        </p>
      </div>
      <p className="pt-4">
        SubTotal: $
        {new Intl.NumberFormat("es-CO").format(parseInt(summary.subtotal))} COP
      </p>
    </div>
  );
}

export default SummaryRender;
