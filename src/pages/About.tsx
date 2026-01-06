import React, { useState, useEffect } from 'react';
import { Award, Users, Globe, Zap, Heart, Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "8+" },
    { icon: Users, label: "Global Community", value: "2M+" },
    { icon: Globe, label: "Countries Served", value: "45+" },
    { icon: Zap, label: "Events Organized", value: "1000+" }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Former pro gamer turned entrepreneur, passionate about revolutionizing eSports."
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Tech innovator with 10+ years in gaming industry development."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Events",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Event management expert who's organized some of the biggest gaming tournaments."
    },
    {
      name: "Luna Kim",
      role: "Community Manager",
      image: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
      bio: "Gaming community advocate dedicated to creating inclusive spaces for all gamers."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We live and breathe gaming culture, understanding what drives our community."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Every event we create sets new standards for quality and innovation."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "We see the future of eSports and work tirelessly to make it reality."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and experiences."
    }
  ];

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'story', label: 'Our Story' },
    { id: 'vision', label: 'Our Vision' }
  ];

  const tabContent = {
    mission: "To democratize access to premium eSports experiences and connect gaming communities worldwide through unforgettable tournaments and events.",
    story: "Founded in 2016 by a group of passionate gamers, eSportsTix began as a small platform for local tournaments. Through dedication and innovation, we've grown into the world's leading eSports ticketing platform.",
    vision: "We envision a future where eSports transcends boundaries, bringing together millions of fans in celebration of skill, strategy, and the pure joy of gaming competition."
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About eSportsTix
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of competitive gaming through innovative technology and passionate community building
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-full border border-gray-700 group-hover:border-cyan-400 transition-all duration-500">
                    <stat.icon className="h-8 w-8 text-cyan-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Story/Vision Tabs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm border border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-full border border-gray-700 group-hover:border-cyan-400 transition-all duration-500">
                    <value.icon className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
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
        <div className="container mx-auto px-6">
          <div className="text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the eSports revolution. Whether you're a player, fan, or industry professional, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                Join Our Community
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;