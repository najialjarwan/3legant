import { useState } from 'react';
import ProductTabsInline from './variants/ProductTabsInline';
import ProductTabsSection from './variants/ProductTabsSection';
import { tabsWithComponents } from '@utils';

const ProductTabs = ({ variant, layout }) => {
    const defaultOpenTab = layout.showRecommendations ? 'additionalInfo' : 'reviews';

    const [activeTab, setActiveTab] = useState(defaultOpenTab);
    const handleTabClick = (tabId) => {
        setActiveTab(activeTab === tabId ? null : tabId);
    }

    if (variant === 'inline')
        return <ProductTabsInline
            tabs={tabsWithComponents}
            activeTab={activeTab}
            onTabClick={handleTabClick}
        />

    return <ProductTabsSection
        tabs={tabsWithComponents}
        activeTab={activeTab}
        onTabClick={handleTabClick}
    />
}

export default ProductTabs;