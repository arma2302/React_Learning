import React, { Suspense, useEffect } from "react";
import Loader from "./Loader";
import ButtonComp from "./ButtonComp";
import Header from "./MyComponents/Header";

export default function App() {
  const Product = React.lazy(() => import("./Products"));
  const Validate = React.lazy(() => import("./Validate"));

  return (
    <div>
      <Header />
      {/* <Suspense fallback={<Loader />}>
        <Product />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Validate />
      </Suspense>
      <ButtonComp color="Red" bg="Black">
        new
      </ButtonComp> */}
    </div>
  );
}
