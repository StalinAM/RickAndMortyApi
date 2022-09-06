import { useContext } from "react";
import { ApiContext } from "../context/LoadData";
function Navigation() {
  const data = useContext(ApiContext);

  return (
    <div className="button-container">
      {data.info.prev ? (
        <button className="buttons-navigation" onClick={data.prevPage}>
          Prev
        </button>
      ) : null}
      {data.info.next ? (
        <button className="buttons-navigation" onClick={data.nextPage}>
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Navigation;
