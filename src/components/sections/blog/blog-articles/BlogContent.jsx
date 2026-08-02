import { useState } from 'react';
import { GRID_MODES, BLOG_MENU_ITEMS } from '@constants';
import { BlogToolbar, BlogArticles } from '@blog';

const BlogContent = () => {
    const [activeItem, setActiveItem] = useState(BLOG_MENU_ITEMS.ALL);
    const [gridMode, setGridMode] = useState(GRID_MODES.GRID_3X3);
    const showFeaturedOnly = activeItem === BLOG_MENU_ITEMS.FEATURED;

    return (
        <>
            <BlogToolbar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                gridMode={gridMode}
                onClick={(selector) => setGridMode(selector)}
            />

            <BlogArticles
                gridMode={gridMode}
                showFeaturedOnly={showFeaturedOnly}
            />
        </>
    );
}

export default BlogContent;