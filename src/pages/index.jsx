import { HeroSlider, BannerGrid, NewArrivals, Values, Banner } from '@home';
import { ArticlesRec } from '@ui';
import { ARTICLES_LIST } from '@data';

const HomePage = () => {
    return (
        <>
            <HeroSlider />

            <BannerGrid />

            <NewArrivals />

            <Values />

            <Banner />

            <ArticlesRec
                titleVariant="default"
                title="articles"
                btnLabel="more articles"
                labelClass="text-n7100"
                iconClass="text-n7100"
                ARTICLES_LIST={ARTICLES_LIST.slice(1, 4)}
                withReadMore={true}
            />
        </>
    );
};

export default HomePage;