import "./coinRow.css";
import CoinLogo from "../coinLogo/CoinLogo";
import CoinName from "../coinName/CoinName";
import CoinSymbol from "../coinSymbol/CoinSymbol";
import CoinPrice from "../coinPrice/CoinPrice";
import CoinRank from "../coinRank/CoinRank";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const CoinRow = ({ coin, vsCurrency }) => {
  const navigate = useNavigate();
  // list of favorites coins IDs
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isFavorite, setIsFavorite] = useState(false);

  // check if the coin is in fav list or not
  useEffect(() => {
    setIsFavorite(favorites.includes(coin.id));
  }, [favorites, coin.id]);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav !== coin.id);
    } else {
      updatedFavorites = [...favorites, coin.id];
    }
    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  const handleClick = ({ target }) => {
    navigate(`/${coin.id}`);
  };

  return (
    <div key={coin.id} className="coin-row">
      <div className="fav-img-wrapper">
        <img
          className="favorite-icon"
          src={
            isFavorite
              ? "/assets/images/favorite-filled.svg"
              : "/assets/images/favorite-regular.svg"
          }
          alt="favorite"
          onClick={toggleFavorite}
        />
      </div>
      <span className="coin-info" onClick={handleClick}>
        <div className="logo-wrapper">
          <CoinLogo src={coin.image} name={coin.name} />
          <CoinRank coinRank={coin.market_cap_rank} />
        </div>
        <div className="name-wrapper">
          <CoinName name={coin.name} />
          <CoinSymbol coinSymbol={coin.symbol} />
        </div>
        <CoinPrice coinPrice={coin.current_price} vsCurrency={vsCurrency} />
      </span>
    </div>
  );
};

export default CoinRow;
