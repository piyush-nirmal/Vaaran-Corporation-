import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
}

const DEFAULT_TITLE = 'Varan Corporation | Building Infrastructure, Enhancing Horizons';
const DEFAULT_DESCRIPTION = 'Trusted Civil Construction, Commercial Painting, and Specialized Structural Fabrication Services Across India. "Work is Worship" (कर्म ही पूजा है) - Founded 1997.';
const DEFAULT_KEYWORDS = 'Varan Corporation, civil construction, commercial painting, specialized structural fabrication, marine protective coating, anti-carbonation coating, Bandra Worli Sea Link, bridge painting Goa, Delhi toll infrastructure, Bangalore commercial painting, 29 flyovers coating, highway beautification, MSRDC, L&T, TATA, safety netting, India';
const BASE_URL = 'https://vaarancorporation.com';

export const SeoHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  ogType = 'website',
  ogImage = `${BASE_URL}/og-image.jpg`,
}: SeoProps) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const fullTitle = title 
    ? (title.includes('Varan Corporation') ? title : `${title} | Varan Corporation`)
    : DEFAULT_TITLE;
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (attributeName: 'name' | 'property', attributeValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'author', 'Varan Corporation');
    updateMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Open Graph Tags
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:site_name', 'Varan Corporation');
    updateMetaTag('property', 'og:locale', 'en_IN');
    updateMetaTag('property', 'og:image', ogImage);

    // 4. Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);
  }, [fullTitle, description, keywords, canonicalUrl, ogType, ogImage]);

  return null;
};
