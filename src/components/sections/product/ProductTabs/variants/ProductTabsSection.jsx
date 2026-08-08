import { ProductTabBtn } from '@ui';

const ProductTabsSection = ({ tabs, activeTab, onTabClick }) => {
    return (
        <>
            <div className="flex flex-row gap-20 border-b border-b-n3100">
                {tabs.map((tab) => (
                    <ProductTabBtn
                        key={tab.id}
                        tab={tab}
                        isOpen={activeTab === tab.id}
                        onClick={onTabClick}
                    />
                ))}
            </div>
            <div>
                {tabs.map((tab) =>
                    activeTab === tab.id ? <tab.component key={tab.id} /> : null
                )}
            </div>
        </>
    );
};

export default ProductTabsSection;
