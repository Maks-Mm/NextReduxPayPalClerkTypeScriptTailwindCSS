import React from "react";

function Footer() {
  return (
    <div className="pt-20 pb-12">
      {/*define grid system */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/*ist part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            Online Store
          </h1>
          <p className="text-sm text-balck opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            soluta ipsam veniam! Voluptatibus ullam itaque labore minus vero ex
            laborum voluptates, rerum neque doloribus, dicta cumque saepe, natus
            dolorum nobis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
