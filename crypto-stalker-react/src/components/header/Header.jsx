import "./header.css";
import NetworkStatus from "../networkStatus/NetworkStatus";
import VsCurrencySelector from "../vsCurrencySelector/VsCurrencySelector";
import SearchBox from "../searchBox/SearchBox";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
      <VsCurrencySelector />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NetworkStatus />
    </div>
  );
};

export default Header;
