import { Icon, MoreActionBtn } from '@ui';

const NotificationBar = ({ onClose, className = '' }) => {
    return (
        <header
            className={`
            relative
            h-10
            flex items-center justify-center gap-5.5 2xl:gap-[508px] 2xl:justify-end 2xl:pr-6
            bg-n2100
            ${className}`}
        >
            {/* Notification Message & Shop Button */}
            <div
                data-id='notificationMessege'
                className="
                flex items-center gap-3"
            >
                {/* Message */}
                <div
                    className="
                    flex items-center gap-2 2xl:gap-3"
                >
                    <Icon name="TicketPercent" className="size-4 2xl:size-6" />
                    <p
                        className="
                        caption-2-semi 2xl:caption-1-semi text-n5100"
                    >
                        30% off storewide — Limited time!
                    </p>
                </div>

                {/* Shop */}
                <MoreActionBtn
                    label='Shop Now'
                    buttonClass='hidden 2xl:flex shadow-blue!'
                    labelClass='btn-xs text-blue'
                    iconSpanClass='size-[18px]'
                    iconClass='w-[10.5px] h-[9px] text-blue'
                    directTo='/shop'
                />
            </div>

            {/* Close Notification Button */}
            <button
                onClick={onClose}
                data-id='closeNotification'
                className="
                "
            >
                <Icon
                    name="Close"
                    className="size-4 2xl:size-5" />
            </button>

        </header>
    );
}

export default NotificationBar;