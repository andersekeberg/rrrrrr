import erna from "../img/erna.jpg";
import haaland from "../img/haaland.jpg";
import { Link } from "react-router-dom";

export function News() {
  return (
    <>
      <Link to={"/ernanews"}>
        <div className={"news"}>
          <h5>
            Erna Solberg spiller <br />
            tennis!
          </h5>
          <img src={erna} className={"erna"} />
        </div>
      </Link>
      <br />

      <Link to={"/haalandnews"}>
        <div className={"news"}>
          <h5>
            Haaland scorte <br />
            22 mål!!
          </h5>
          <img src={haaland} className={"erna"} />
        </div>
      </Link>
    </>
  );
}
