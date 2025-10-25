import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FeedList } from '../FeedList/FeedList';

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

export default function MyFeeds() {
    const navigate = useNavigate();

    const handleNavigate = (href: string | undefined) => {
        if (href) {
            navigate(href);
        }
    };

    return (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">My Feeds</h2>
                <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FeedList.map((feed, index) => (
                        <motion.button
                            key={feed.id}
                            onClick={() => handleNavigate(feed.href)}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400/30 transition-shadow duration-300 text-left w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={feed.image}
                                    alt={feed.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-white hover:text-cyan-400 transition-colors duration-300">
                                    {feed.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {feed.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-700 text-cyan-400 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {formatDate(feed.createdAt)}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
