import { News } from "./news";
import { useEffect, useState } from "react";

export function Content() {
  const [article, setArticle] = useState([]);
  const [newArticle, setNewArticle] = useState("");
  const [webSocket, setWebSocket] = useState();

  useEffect(() => {
    new WebSocket("ws://" + window.location.origin);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    webSocket.send(newMessage);
    setArticle((current) => [...current, newArticle]);
    setNewArticle("");
  }

  return (
    <>
      <div id={"container"}>
        <div className={"news"}>
          <News />
        </div>

        <div id={"publish"}>
          <form onSubmit={handleSubmit}>
            <input
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
            />
            <button>Gikk tom for tid, fungerer ikke</button>
          </form>
        </div>
        <ul id={"newNews"}>
          {article.map((article) => (
            <li>{article}</li>
          ))}
        </ul>

        <footer></footer>
      </div>
    </>
  );
}
