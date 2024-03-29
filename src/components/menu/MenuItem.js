import React from "react";

const MenuItem = () => {
  return (
    <div className="flex flex-wrap justify-center mt-2">
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
          <div className="text-center">
          <img src="/pizza.png" alt="pizza" className="max-h-24 block mx-auto" />
          </div>
          <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, conscetur adipiasion elit
          </p>
          <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-white hover:text-primary">
            Add to cart $12
          </button>
        </div> 
      </div>
  );
};

export default MenuItem;
