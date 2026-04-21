import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";



const Bag = () => {
  const homeItem = useSelector((store) => store.items);
  const cartItem = useSelector((store) => store.bag);
  const finalItems = homeItem.filter((item) => {
    const itemIndex = cartItem.indexOf(item.id);
    return itemIndex>=0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item)=><BagItem item={item} />) }
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};

export default Bag;
