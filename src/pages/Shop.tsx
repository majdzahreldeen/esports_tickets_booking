import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Calendar, MapPin, ShoppingCart } from 'lucide-react';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'lol', name: 'League of Legends' },
    { id: 'valorant', name: 'Valorant' },
    { id: 'cs2', name: 'CS2' },
    { id: 'dota2', name: 'Dota 2' },
    { id: 'overwatch', name: 'Overwatch 2' }
  ];

  const tournaments = [
    {
      id: 1,
      name: "World Championship 2024",
      game: "League of Legends",
      category: "lol",
      date: "2024-12-15",
      location: "Seoul, South Korea",
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      featured: true,
      soldOut: false
    },
    {
      id: 2,
      name: "Masters Berlin",
      game: "Valorant",
      category: "valorant",
      date: "2025-01-10",
      location: "Berlin, Germany",
      price: 199,
      originalPrice: 229,
      rating: 4.8,
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      featured: false,
      soldOut: false
    },
    {
      id: 3,
      name: "Pro League Finals",
      game: "CS2",
      category: "cs2",
      date: "2025-02-05",
      location: "Copenhagen, Denmark",
      price: 149,
      originalPrice: 179,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg",
      featured: false,
      soldOut: true
    },
    {
      id: 4,
      name: "The International 2025",
      game: "Dota 2",
      category: "dota2",
      date: "2025-03-20",
      location: "Stockholm, Sweden",
      price: 399,
      originalPrice: 449,
      rating: 5.0,
      image: "https://images.pexels.com/photos/2423399/pexels-photo-2423399.jpeg",
      featured: true,
      soldOut: false
    },
    {
      id: 5,
      name: "Overwatch League Grand Finals",
      game: "Overwatch 2",
      category: "overwatch",
      date: "2025-04-15",
      location: "Los Angeles, USA",
      price: 249,
      originalPrice: 279,
      rating: 4.6,
      image: "https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg",
      featured: false,
      soldOut: false
    },
    {
      id: 6,
      name: "Champions Tour",
      game: "Valorant",
      category: "valorant",
      date: "2025-05-10",
      location: "Tokyo, Japan",
      price: 179,
      originalPrice: 199,
      rating: 4.8,
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg",
      featured: false,
      soldOut: false
    }
  ];

  const filteredTournaments = tournaments
    .filter(tournament => 
      (selectedCategory === 'all' || tournament.category === selectedCategory) &&
      (tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       tournament.game.toLowerCase().includes(searchTerm.toLowerCase()) ||
       tournament.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tournament Shop
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and purchase tickets to the most exciting eSports tournaments worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tournaments, games, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 bg-gray-800/50 rounded-2xl p-2 border border-gray-700">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tournament Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTournaments.map((tournament, index) => (
            <div
              key={tournament.id}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                tournament.featured ? 'ring-2 ring-gold-400/50' : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Featured Badge */}
              {tournament.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              )}

              {/* Sold Out Badge */}
              {tournament.soldOut && (
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Sold Out
                </div>
              )}

              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-medium">{tournament.rating}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{tournament.game}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {tournament.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{formatDate(tournament.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">{tournament.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-cyan-400">${tournament.price}</span>
                    {tournament.originalPrice > tournament.price && (
                      <span className="text-gray-500 line-through">${tournament.originalPrice}</span>
                    )}
                  </div>
                  
                  <button
                    disabled={tournament.soldOut}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      tournament.soldOut
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {tournament.soldOut ? 'Sold Out' : 'Buy Now'}
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTournaments.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-2">No tournaments found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;