// // Services/getTechFeed.ts
// import Parser from "rss-parser";

// // Define TypeScript interfaces for RSS items
// interface CustomItem {
//   creator?: string;
//   author?: string;
//   'content:encoded'?: string;
//   description?: string;
//   category?: string | string[];
//   contentSnippet?: string;
//   pubDate?: string;
//   guid?: string;
// }

// export interface BlogPost {
//   title: string;
//   link: string;
//   date: string;
//   source: string;
//   category: string;
//   description: string;
//   content: string;
//   categories: string[];
//   author: string;
//   guid: string;
//   readingTime?: number;
//   image?: string;
//   isPersonal?: boolean;
//   featured?: boolean;
// }

// interface FeedConfig {
//   url: string;
//   name: string;
//   category: string;
//   enabled?: boolean;
// }

// // Your personal blog posts
// const personalBlogPosts: BlogPost[] = [
//   {
//     title: "Building Scalable React Applications with TypeScript",
//     link: "/blog/building-scalable-react-apps-with-typescript",
//     date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
//     source: "Joy Amamah",
//     category: "React",
//     description: "Learn how to build maintainable and scalable React applications using TypeScript, proper folder structure, and best practices for large-scale projects.",
//     content: "In this article, I share my experience building production-ready React applications with TypeScript, covering topics like project structure, type safety, and performance optimization.",
//     categories: ["React", "TypeScript", "Frontend"],
//     author: "Joy Amamah",
//     guid: "personal-1",
//     readingTime: 8,
//     image: "/images/blog/react-typescript.png",
//     isPersonal: true,
//     featured: true
//   },
//   {
//     title: "Mastering Tailwind CSS: Beyond the Basics",
//     link: "/blog/mastering-tailwind-css-beyond-basics",
//     date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
//     source: "Joy Amamah",
//     category: "CSS",
//     description: "Advanced Tailwind CSS techniques including custom configurations, plugin development, and performance optimization strategies.",
//     content: "Tailwind CSS has revolutionized how we write CSS, but there's so much more beyond utility classes. Learn how to extend Tailwind with custom plugins and configurations.",
//     categories: ["Tailwind CSS", "CSS", "Frontend"],
//     author: "Joy Amamah",
//     guid: "personal-2",
//     readingTime: 6,
//     image: "/images/blog/tailwind-css.png",
//     isPersonal: true,
//     featured: true
//   },
//   {
//     title: "State Management in Modern React: Context API vs Redux Toolkit",
//     link: "/blog/state-management-react-context-vs-redux",
//     date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
//     source: "Joy Amamah",
//     category: "React",
//     description: "A comprehensive comparison between React Context API and Redux Toolkit for state management in modern React applications.",
//     content: "Choosing the right state management solution is crucial for React applications. This guide compares Context API and Redux Toolkit to help you make informed decisions.",
//     categories: ["React", "Redux", "State Management"],
//     author: "Joy Amamah",
//     guid: "personal-3",
//     readingTime: 10,
//     image: "/images/blog/state-management.png",
//     isPersonal: true,
//     featured: false
//   },
//   {
//     title: "The Complete Guide to React Performance Optimization",
//     link: "/blog/react-performance-optimization-guide",
//     date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), // 3 weeks ago
//     source: "Joy Amamah",
//     category: "React",
//     description: "Practical techniques and tools to optimize React application performance, from code splitting to memoization.",
//     content: "Performance is a critical aspect of modern web applications. In this guide, we'll explore various optimization techniques including code splitting, lazy loading, and memoization.",
//     categories: ["React", "Performance", "Optimization"],
//     author: "Joy Amamah",
//     guid: "personal-4",
//     readingTime: 12,
//     image: "/images/blog/react-performance.png",
//     isPersonal: true,
//     featured: true
//   },
//   {
//     title: "Building Accessible Web Applications: A Developer's Responsibility",
//     link: "/blog/accessible-web-applications-guide",
//     date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month ago
//     source: "Joy Amamah",
//     category: "Accessibility",
//     description: "Why accessibility matters and how to build web applications that are inclusive and accessible to all users.",
//     content: "Accessibility isn't just a feature—it's a fundamental requirement for modern web development. Learn how to implement proper ARIA labels, keyboard navigation, and screen reader compatibility.",
//     categories: ["Accessibility", "Web Development", "Best Practices"],
//     author: "Joy Amamah",
//     guid: "personal-5",
//     readingTime: 7,
//     image: "/images/blog/accessibility.png",
//     isPersonal: true,
//     featured: false
//   }
// ];

// // Create parser with proper typing
// const parser = new Parser<CustomItem>({
//   timeout: 15000, // Increased timeout
//   maxRedirects: 5,
//   customFields: {
//     item: [
//       ['content:encoded', 'content'],
//       ['description', 'description'],
//       ['category', 'categories'],
//       ['dc:creator', 'creator'],
//       ['author', 'author'],
//       ['media:thumbnail', 'thumbnail'],
//       ['media:content', 'mediaContent'],
//       ['enclosure', 'enclosure']
//     ]
//   }
// });

// // Cache configuration
// const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes
// let cache: {
//   data: BlogPost[] | null;
//   timestamp: number | null;
// } = {
//   data: null,
//   timestamp: null
// };

// // Calculate reading time (approx 200 words per minute)
// function calculateReadingTime(text: string): number {
//   const words = text.split(/\s+/).length;
//   return Math.ceil(words / 200);
// }

// // Extract image from content
// function extractImageFromContent(content: string): string | undefined {
//   const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
//   return imgMatch ? imgMatch[1] : undefined;
// }

// // Clean HTML tags from description
// function cleanDescription(description: string): string {
//   return description
//     .replace(/<[^>]*>/g, '') // Remove HTML tags
//     .replace(/&\w+;/g, '')   // Remove HTML entities
//     .replace(/\s+/g, ' ')    // Normalize whitespace
//     .trim()
//     .substring(0, 200);      // Limit length
// }

// export async function getTechFeeds(): Promise<BlogPost[]> {
//   // Return cached data if it's still valid
//   if (cache.data && cache.timestamp && (Date.now() - cache.timestamp) < CACHE_DURATION) {
//     console.log('Returning cached RSS data');
//     return cache.data;
//   }

//   const feeds: FeedConfig[] = [
//     {
//       url: "https://dev.to/feed/tag/react",
//       name: "Dev.to React",
//       category: "React",
//       enabled: true
//     },
//     {
//       url: "https://hnrss.org/frontpage",
//       name: "Hacker News",
//       category: "General",
//       enabled: true
//     },
//     {
//       url: "https://css-tricks.com/feed/",
//       name: "CSS-Tricks",
//       category: "CSS",
//       enabled: true
//     },
//     {
//       url: "https://www.smashingmagazine.com/feed/",
//       name: "Smashing Magazine",
//       category: "Web Design",
//       enabled: true
//     },
//     {
//       url: "https://overreacted.io/rss.xml",
//       name: "Overreacted",
//       category: "React",
//       enabled: true
//     },
//     {
//       url: "https://blog.logrocket.com/feed/",
//       name: "LogRocket",
//       category: "Web Development",
//       enabled: true
//     }
//   ];

//   try {
//     // Start with personal blog posts
//     let allPosts: BlogPost[] = [...personalBlogPosts];

//     const enabledFeeds = feeds.filter(feed => feed.enabled !== false);
    
//     const promises = enabledFeeds.map(async (feedConfig): Promise<BlogPost[]> => {
//       try {
//         console.log(`Fetching feed: ${feedConfig.name}`);
//         const feed = await parser.parseURL(feedConfig.url);
        
//         return feed.items.slice(0, 5).map(item => {
//           // Safely extract author information
//           const author = (item as any).creator || (item as any).author || item.author || feedConfig.name;
          
//           // Handle categories - could be string, array, or undefined
//           let categories: string[] = [];
//           if (Array.isArray(item.categories)) {
//             categories = item.categories;
//           } else if (typeof item.categories === 'string') {
//             categories = [item.categories];
//           }
          
//           const description = cleanDescription(item.contentSnippet || item.description || '');
//           const content = item['content:encoded'] || item.content || '';
//           const readingTime = calculateReadingTime(description + ' ' + content);
//           const image = extractImageFromContent(content);

//           return {
//             title: item.title?.trim() || 'No title available',
//             link: item.link || '#',
//             date: item.pubDate || new Date().toISOString(),
//             source: feedConfig.name,
//             category: feedConfig.category,
//             description: description,
//             content: content,
//             categories: categories,
//             author: author,
//             guid: item.guid || item.link || Math.random().toString(36).substring(2, 9),
//             readingTime: readingTime,
//             image: image,
//             isPersonal: false,
//             featured: false
//           };
//         }).filter(post => post.title !== 'No title available');
//       } catch (error) {
//         console.warn(`Failed to fetch ${feedConfig.name}:`, error);
//         return [];
//       }
//     });

//     const results = await Promise.allSettled(promises);
    
//     const externalPosts = results
//       .filter(result => result.status === 'fulfilled')
//       .flatMap(result => (result as PromiseFulfilledResult<BlogPost[]>).value)
//       .filter(post => post && post.title && post.link)
//       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//       .slice(0, 25); // Limit external posts

//     // Combine personal posts with external feeds (personal posts come first)
//     allPosts = [...allPosts, ...externalPosts];

//     console.log(`Successfully fetched ${allPosts.length} articles (${personalBlogPosts.length} personal + ${externalPosts.length} external)`);

//     // Update cache
//     cache = {
//       data: allPosts,
//       timestamp: Date.now()
//     };

//     return allPosts;

//   } catch (error) {
//     console.error('Critical error fetching RSS feeds:', error);
    
//     if (cache.data) {
//       console.log('Returning stale cached data due to error');
//       return cache.data;
//     }
    
//     // Return only personal posts if external feeds fail
//     console.log('External feeds failed, returning personal posts only');
//     return personalBlogPosts;
//   }
// }

// // Get only personal blog posts
// export async function getPersonalBlogPosts(): Promise<BlogPost[]> {
//   return personalBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// }

// // Get featured personal posts
// export async function getFeaturedPersonalPosts(): Promise<BlogPost[]> {
//   return personalBlogPosts
//     .filter(post => post.featured)
//     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// }

// // Get posts by category (personal + external)
// export async function getFeedsByCategory(category: string): Promise<BlogPost[]> {
//   const allFeeds = await getTechFeeds();
//   return allFeeds.filter(feed => 
//     feed.category.toLowerCase() === category.toLowerCase() ||
//     feed.categories.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
//   );
// }

// // Get only personal posts by category
// export async function getPersonalPostsByCategory(category: string): Promise<BlogPost[]> {
//   return personalBlogPosts.filter(post => 
//     post.category.toLowerCase() === category.toLowerCase() ||
//     post.categories.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
//   );
// }

// // Search feeds (personal + external)
// export async function searchFeeds(query: string): Promise<BlogPost[]> {
//   const allFeeds = await getTechFeeds();
//   const lowercaseQuery = query.toLowerCase().trim();
  
//   if (!lowercaseQuery) return allFeeds;
  
//   return allFeeds.filter(feed =>
//     feed.title.toLowerCase().includes(lowercaseQuery) ||
//     feed.description.toLowerCase().includes(lowercaseQuery) ||
//     feed.source.toLowerCase().includes(lowercaseQuery) ||
//     feed.author.toLowerCase().includes(lowercaseQuery) ||
//     feed.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
//   );
// }

// // Get unique categories from all feeds
// export async function getAvailableCategories(): Promise<string[]> {
//   const allFeeds = await getTechFeeds();
//   const categories = [...new Set(allFeeds.map(feed => feed.category))];
//   return categories.sort();
// }

// // Get feeds by source
// export async function getFeedsBySource(source: string): Promise<BlogPost[]> {
//   const allFeeds = await getTechFeeds();
//   return allFeeds.filter(feed => 
//     feed.source.toLowerCase().includes(source.toLowerCase())
//   );
// }

// // Clear cache manually
// export function clearCache(): void {
//   cache = {
//     data: null,
//     timestamp: null
//   };
//   console.log('RSS cache cleared');
// }

// // Get cache status
// export function getCacheStatus(): { hasCache: boolean; age: number | null } {
//   if (!cache.data || !cache.timestamp) {
//     return { hasCache: false, age: null };
//   }
  
//   return {
//     hasCache: true,
//     age: Date.now() - cache.timestamp
//   };
// }