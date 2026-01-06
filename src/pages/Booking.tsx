import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, CreditCard, Check, MapPin, Trophy, Star } from 'lucide-react';

const Booking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      id: 'worlds-2024',
      name: 'World Championship 2024',
      game: 'League of Legends',
      price: 299,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      location: 'Seoul, South Korea',
      dates: ['2024-12-15', '2024-12-16', '2024-12-17', '2024-12-18', '2024-12-19', '2024-12-20'],
      times: ['14:00', '18:00', '20:00'],
      description: 'The ultimate League of Legends championship featuring the best teams worldwide.'
    },
    {
      id: 'masters-berlin',
      name: 'Masters Berlin',
      game: 'Valorant',
      price: 199,
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      location: 'Berlin, Germany',
      dates: ['2025-01-10', '2025-01-11', '2025-01-12', '2025-01-13', '2025-01-14', '2025-01-15'],
      times: ['15:00', '19:00'],
      description: 'Witness the most skilled Valorant teams compete for glory.'
    },
    {
      id: 'cs2-finals',
      name: 'Pro League Finals',
      game: 'CS2',
      price: 149,
      image: 'https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg',
      location: 'Copenhagen, Denmark',
      dates: ['2025-02-05', '2025-02-06', '2025-02-07', '2025-02-08'],
      times: ['16:00', '20:00'],
      description: 'The most intense CS2 competition of the year.'
    }
  ];

  const steps = [
    { number: 1, title: 'Select Event', icon: Trophy },
    { number: 2, title: 'Choose Date & Time', icon: Calendar },
    { number: 3, title: 'Select Tickets', icon: Users },
    { number: 4, title: 'Payment', icon: CreditCard }
  ];

  const selectedEventData = events.find(event => event.id === selectedEvent);
  const totalPrice = selectedEventData ? selectedEventData.price * ticketQuantity : 0;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Book Your Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Secure your spot at the most exciting eSports events in the world
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className={`flex items-center ${
                  currentStep >= step.number ? 'text-cyan-400' : 'text-gray-500'
                }`}>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number 
                      ? 'border-cyan-400 bg-cyan-400/20' 
                      : 'border-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  <span className="ml-3 font-medium hidden sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Select Event */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Select Your Event</h2>
              <div className="grid gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 ${
                      selectedEvent === event.id
                        ? 'ring-2 ring-cyan-400 shadow-2xl shadow-cyan-500/20'
                        : 'hover:shadow-xl hover:shadow-cyan-500/10'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                      <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="md:w-2/3 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span className="text-yellow-400 font-medium">Premium Event</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {event.name}
                          </h3>
                          <p className="text-cyan-400 font-medium mb-2">{event.game}</p>
                          <div className="flex items-center gap-2 text-gray-300 mb-4">
                            <MapPin className="h-4 w-4 text-purple-400" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-gray-400 mb-4">{event.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-cyan-400">${event.price}</span>
                          <div className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            selectedEvent === event.id
                              ? 'bg-cyan-400 text-gray-900'
                              : 'bg-gray-700 text-gray-300'
                          }`}>
                            {selectedEvent === event.id ? 'Selected' : 'Select'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Choose Date & Time */}
          {currentStep === 2 && selectedEventData && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Date & Time</h2>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Available Dates</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {selectedEventData.dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 rounded-xl text-center transition-all duration-300 ${
                        selectedDate === date
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                      }`}
                    >
                      <div className="text-sm font-medium">{formatDate(date)}</div>
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Available Times</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                      {selectedEventData.times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-xl text-center transition-all duration-300 ${
                            selectedTime === time
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
                          }`}
                        >
                          <Clock className="h-5 w-5 mx-auto mb-2" />
                          <div className="text-sm font-medium">{time}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Select Tickets */}
          {currentStep === 3 && selectedEventData && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Select Tickets</h2>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">General Admission</h3>
                    <p className="text-gray-400">Access to all public areas and viewing sections</p>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">${selectedEventData.price}</span>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-medium text-white">Number of Tickets</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                      className="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold text-white w-8 text-center">{ticketQuantity}</span>
                    <button
                      onClick={() => setTicketQuantity(Math.min(10, ticketQuantity + 1))}
                      className="w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <div className="flex items-center justify-between text-xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-cyan-400">${totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Details</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-6">Booking Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Event</span>
                      <span className="text-white">{selectedEventData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date</span>
                      <span className="text-white">{selectedDate && formatDate(selectedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time</span>
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tickets</span>
                      <span className="text-white">{ticketQuantity}</span>
                    </div>
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-cyan-400">${totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-6">Payment Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={currentStep === 4 ? () => alert('Booking completed!') : nextStep}
              disabled={
                (currentStep === 1 && !selectedEvent) ||
                (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                (currentStep === 3 && ticketQuantity === 0)
              }
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {currentStep === 4 ? 'Complete Booking' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;