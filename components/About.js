import React from "react";

function About() {
  return (
    <>
      <div>
        <div className="shipping flex flex-col text-center bg-black text-white h-screen">
          <div className="shipping__title p-10 text-lg font-bold">About US</div>
          <div className="shipping__details  text-center justify-start flex flex-col  ">
            <div className="shipping__info  flex pb-3 ">
              <p className="p-10 w-auto">
                At Oracle Diffuser we believe the key to our success is making
                an impact on the health and happiness of our customers!
              </p>
            </div>
            <div className="shipping__info flex pb-3">
              <p className="p-10 w-auto">
                We make change simple. Customers have told us that our products
                have not only improved their quality of sleep, but also their
                well-being and satisfaction. Our customer reviews and feedback
                fuel our desire to make a difference and push us to constantly
                innovate and improve our products.
              </p>
            </div>
            <div className="shipping__info flex pb-3">
              <p className="p-10 w-auto">
                WE BELIEVE IN MEANINGFUL CHANGE Our objective has always been to
                provide a simple solution to help people unwind and relax at the
                end of the day. From product design, testing, to opening your
                first order with us - we strive to make your journey memorable
                and worthwhile by providing you with the proper tools to help
                you become the best version of yourself!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
