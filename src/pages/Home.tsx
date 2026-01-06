import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Trophy, Users, Calendar, ArrowRight, Zap } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredTournaments = [
    {
      id: 1,
      name: "World Championship 2024",
      game: "League of Legends",
      date: "Dec 15-20, 2024",
      price: "$299",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
      id: 2,
      name: "Masters Berlin",
      game: "Valorant",
      date: "Jan 10-15, 2025",
      price: "$199",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
    },
    {
      id: 3,
      name: "Pro League Finals",
      game: "CS2",
      date: "Feb 5-8, 2025",
      price: "$149",
      image: "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg"
    }
  ];

  const stats = [
    { icon: Trophy, label: "Tournaments", value: "500+" },
    { icon: Users, label: "Players", value: "2M+" },
    { icon: Calendar, label: "Events/Year", value: "1000+" },
    { icon: Zap, label: "Prize Pool", value: "$50M+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            eSports
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Unleashed
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the ultimate gaming tournaments. Get your tickets to the most epic eSports events worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/shop"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Tickets <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Trailer
            </button>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="relative mb-4 inline-block">
                  <stat.icon className="h-12 w-12 text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Tournaments
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTournaments.map((tournament, index) => (
              <div
                key={tournament.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${index * 300}ms`
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {tournament.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{tournament.game}</p>
                  <p className="text-gray-300 mb-4">{tournament.date}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{tournament.price}</span>
                    <Link
                      to="/shop"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Get Tickets
                    </Link>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Gaming Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't miss out on the most exciting eSports events. Get exclusive access to tournaments, meet your favorite players, and be part of gaming history.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Book Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;