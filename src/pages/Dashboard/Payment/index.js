import { useState } from "react";
import Lodge from "./Lodge";
import Resume from "./Resume";

export default function Payment() {
  const [lodge, setLodge] = useState();
  const [prices, setPrices] = useState();

  return (
    <>
      <Lodge lodge={lodge} setLodge={setLodge} prices={prices} />
      <Resume />
    </>
  );
}
