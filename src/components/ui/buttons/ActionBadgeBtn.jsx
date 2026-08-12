import { Link } from "react-router-dom";
import { Icon } from "@ui";

const ActionBadgeBtn = ({ onClick, to, state, iconName, count = 0 }) => {
    const Wrapper = to ? Link : "button";

    const wrapperProps = to
        ? { to, state, onClick }
        : { onClick };

    return (
        <div
            className="
            flex items-center gap-[5px]"
        >
            <Wrapper {...wrapperProps}>
                <Icon name={iconName} spanClassName="size-6" iconClassName="size-5 text-n7100" />
            </Wrapper>

            <span
                className="
                size-5 rounded-full
                flex items-center justify-center shrink-0
                text-white text-xs leading-2.5 tracking-normal font-inter font-bold
                bg-n7100"
            >
                {count}
            </span>
        </div>
    );
};

export default ActionBadgeBtn;
