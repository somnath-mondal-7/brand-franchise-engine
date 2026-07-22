import { locationData } from '@/data/locations';
import { hasCuratedInsight } from '@/utils/locationContent';
import { highValueKeywordPages } from '@/utils/programmaticSeo';
import { brands } from '@/data/brands';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const DOMAIN = 'https://www.franchiseleadspro.com';

// Get today's date in YYYY-MM-DD format
export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Generate core static pages
export const generateCorePages = (): SitemapUrl[] => {
  const currentDate = getTodayDate();
  return [
    { loc: `${DOMAIN}/`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/about`, lastmod: currentDate, changefreq: 'monthly', priority: '0.9' },
    { loc: `${DOMAIN}/services`, lastmod: currentDate, changefreq: 'weekly', priority: '0.95' },
    { loc: `${DOMAIN}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/blog`, lastmod: currentDate, changefreq: 'daily', priority: '0.85' },
    { loc: `${DOMAIN}/testimonials`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
    // USA-first strategy: India/Australia/Dubai country pages removed from
    // sitemap — they attracted the wrong audience and diluted topical focus.
    { loc: `${DOMAIN}/franchise-leads-usa`, lastmod: currentDate, changefreq: 'weekly', priority: '0.95' },
    { loc: `${DOMAIN}/franchise-leads-uk`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-leads-canada`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    
    
    { loc: `${DOMAIN}/buy-franchise-leads`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/digital-marketing`, lastmod: currentDate, changefreq: 'weekly', priority: '0.85' },
    { loc: `${DOMAIN}/franchise-broker-lead-generation`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/franchise-marketing-agency`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/real-estate-broker-marketing`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/mortgage-broker-lead-generation`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/linkedin-lead-generation-brokers`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/franchise-broker-lead-generation-usa`, lastmod: currentDate, changefreq: 'weekly', priority: '0.95' },
    { loc: `${DOMAIN}/franchise-broker-leads-northeast`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-broker-leads-southeast`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-broker-leads-midwest`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-broker-leads-west`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
  ];
};

// Brand pages removed from sitemap (June 2026): they were thin, templated
// snapshots that triggered "Crawled – currently not indexed" at scale and
// attracted the wrong audience (franchise buyers, not broker clients).
export const generateBrandUrls = (): SitemapUrl[] => {
  return [];
};


// PRUNED SITEMAP (July 2026): Concentrating authority on ~50 highest-intent URLs.
// Previously emitted 900+ programmatic pages that Google flagged as "Crawled — not
// indexed" or "Discovered — not indexed". Cutting the surface area forces crawl
// budget onto pages that can actually rank and generate inbound leads.

// Top 10 US states by franchise market size + broker demand.
const TOP_STATES: string[] = [
  'california', 'texas', 'florida', 'new-york', 'illinois',
  'georgia', 'north-carolina', 'pennsylvania', 'ohio', 'arizona',
];

// Top 10 US metros where broker + franchisor decision-makers concentrate.
const TOP_CITIES: Array<{ state: string; city: string }> = [
  { state: 'california', city: 'los-angeles' },
  { state: 'california', city: 'san-diego' },
  { state: 'texas', city: 'houston' },
  { state: 'texas', city: 'dallas' },
  { state: 'texas', city: 'austin' },
  { state: 'florida', city: 'miami' },
  { state: 'florida', city: 'orlando' },
  { state: 'new-york', city: 'new-york-city' },
  { state: 'illinois', city: 'chicago' },
  { state: 'georgia', city: 'atlanta' },
];

// Highest-intent keyword/service pages we actually want ranked.
const TOP_KEYWORDS: string[] = [
  'franchise-lead-generation',
  'franchise-marketing-agency',
  'franchise-development',
  'franchise-consulting',
  'best-franchise-lead-generation-agency',
];

export const generateLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = getTodayDate();

  urls.push({ loc: `${DOMAIN}/locations/usa`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' });

  TOP_STATES.forEach(state => {
    if (!hasCuratedInsight('USA', state)) return;
    urls.push({ loc: `${DOMAIN}/locations/usa/${state}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });
  });

  TOP_CITIES.forEach(({ state, city }) => {
    urls.push({
      loc: `${DOMAIN}/locations/usa/${state}/${city}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  return urls;
};

export const generateKeywordUrls = (): SitemapUrl[] => {
  const currentDate = getTodayDate();
  return TOP_KEYWORDS.map(slug => ({
    loc: `${DOMAIN}/services/${slug}`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.75',
  }));
};

export const generateServiceLocationUrls = (): SitemapUrl[] => {
  const currentDate = getTodayDate();
  const primary = 'franchise-lead-generation';
  return TOP_STATES.filter(s => hasCuratedInsight('USA', s)).map(state => ({
    loc: `${DOMAIN}/${primary}/usa/${state}`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7',
  }));
};

export const getAllUrls = (): SitemapUrl[] => {
  return [
    ...generateCorePages(),
    ...generateBrandUrls(),
    ...generateLocationUrls(),
    ...generateKeywordUrls(),
    ...generateServiceLocationUrls(),
  ];
};

// Split array into chunks
export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// Build single sitemap XML
export const buildSitemapXml = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(u => 
    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
};

// Build sitemap index XML
export const buildSitemapIndexXml = (sitemapCount: number): string => {
  const currentDate = getTodayDate();
  const entries: string[] = [];
  
  for (let i = 1; i <= sitemapCount; i++) {
    entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemaps/sitemap-${i}.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  }
  
  // Add blog sitemap
  entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemap-blog.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</sitemapindex>`;
};

// Calculate sitemap stats
export const getSitemapStats = () => {
  const allUrls = getAllUrls();
  const chunkSize = 10000;
  const chunks = chunkArray(allUrls, chunkSize);
  
  return {
    totalUrls: allUrls.length,
    sitemapCount: chunks.length,
    chunkSize,
    corePages: generateCorePages().length,
    brandPages: generateBrandUrls().length,
    locationPages: generateLocationUrls().length,
    keywordPages: generateKeywordUrls().length,
    serviceLocationPages: generateServiceLocationUrls().length,
  };
};
