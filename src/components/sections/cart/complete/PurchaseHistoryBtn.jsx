import { Link } from "react-router-dom";
import { ACCOUNT_MENU_ITEMS } from "@constants";

const PurchaseHistoryBtn = () => (
    <Link
        to="/account"
        state={{ activeTab: ACCOUNT_MENU_ITEMS.ORDERS }}
        className="
        w-full 2xl:w-auto px-10 py-3
        text-white btn-s text-center
        bg-n7100 border border-transparent rounded-[80px]
        hover:text-n7100 hover:bg-transparent hover:border-n7100
        transition-all duration-150 ease-linear
        "
    >
        Purchase history
    </Link>
);

export default PurchaseHistoryBtn;