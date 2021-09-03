import { useState } from "react";
import Lodge from "./Lodge";

export default function Payment() {
  const [lodge, setLodge] = useState();

  return <Lodge lodge={lodge} setLodge={setLodge} />;
}
