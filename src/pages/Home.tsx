import { Col2Tabs } from "../components/design/Col2Tabs";
import { useRef, useMemo, useEffect } from "react";
import { HashTagQuotes } from "../components/fun/quotes";
import { Col1Tabs } from "../components/design/col1Tabs";
import portrait from "/ab1.jpg";
// import LazyLoad from "react-lazy-load"; /* 👈 Will be used soon 🔜 */
const HashtagHomePage = () => {
  const dataFetchedRef = useRef(false);
  const _box_item: any = useRef();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    LoadedPage();
  }, []);

  const quotes = HashTagQuotes();
  /**
   * Returns a random quote from the quotes array.
   * @returns {string} - A random quote from the quotes array.
   */
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const lodge = useMemo(() => randomQuote, [randomQuote]);
  const input: any = useRef();

  const LoadedPage = () => {
    if (dataFetchedRef) {
      let inputPlaceholder = input.current.placeholder;
      /**
       * Sets the placeholder text of the input element to a random quote from the quote array.
       * @returns None
       */
      input.current.placeholder = lodge;
    }
  };

  return (
    <>
      <div className="cols">
        <div className="col-1">
          <Col1Tabs />
        </div>
        <Col2Tabs
          portrait={portrait}
          input={input}
          _box_item={_box_item}
        />
      </div>
    </>
  );
};
export default HashtagHomePage;
