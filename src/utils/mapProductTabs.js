import { productTabs } from '@config';
import { ProductAdditionalInfo, ProductReviews } from '@product';

const COMPONENT_MAP = {
  ProductAdditionalInfo,
  ProductReviews,
};

export const tabsWithComponents = productTabs.map(tab => ({
  ...tab,
  component: COMPONENT_MAP[tab.componentKey],
}));
