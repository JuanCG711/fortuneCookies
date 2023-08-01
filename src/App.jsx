import { useState } from "react";
import "./App.css";
import phrase from "./db/phrases.json";
import { getRandom } from "./utils/random";
import Phrases from "./components/PhrasesBox";

const listImg = ["img1", "img2", "img3", "img4"];

function App() {
  const [phrases, setPhrases] = useState(getRandom(phrase));
  const [changeImg, setChangeImg] = useState(getRandom(listImg));

  const handleChangePhrase = () => {
    setPhrases(getRandom(phrase));
    setChangeImg(getRandom(listImg));
  };

  return (
    <main className={`App ${changeImg}`}>
      <Phrases handleChangePhrase={handleChangePhrase} phrases={phrases} />
    </main>
  );
}

export default App;
