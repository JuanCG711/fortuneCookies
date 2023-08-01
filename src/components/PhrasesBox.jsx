import "./styles/PhrasesBox.css";

const PhrasesBox = ({ handleChangePhrase, phrases }) => {
  return (
    <section className="phrasesBox">
      <h1 className="phrases-h1">FORTUNE COOKIES</h1>
      <section>
        <button className="phrases-section-button" onClick={handleChangePhrase}>
          Try luck
        </button>
        <article className="phrases-section-article">
          <p className="phrases-article-p">{phrases.phrase}</p>
        </article>
      </section>
      <footer className="phrases-footer">
        <h4 className="phrases-footer-h4"> Source: {phrases.author}</h4>
      </footer>
    </section>
  );
};
export default PhrasesBox;
