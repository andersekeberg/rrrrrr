import { News } from "./news";

export function Content() {
  return (
    <>
      <div id={"container"}>
        <div className={"news"}>
          <News />
        </div>

        <footer>Dette var min avis</footer>
      </div>
    </>
  );
}
