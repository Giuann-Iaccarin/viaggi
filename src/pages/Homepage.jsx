import React, { useState } from 'react';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Euro, 
  ChevronLeft, 
  Star, 
  Waves, 
  Car, 
  Moon,
  Sun,
  Filter,
  Search,
  Users,
  Clock,
  Navigation,
  ChevronRight,
  ChevronLeft as LeftIcon,
  X
} from 'lucide-react';
import travelData from '../data/travelData';

export default function TravelHomepage() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [sortBy, setSortBy] = useState('price');
  // eslint-disable-next-line no-unused-vars
  const [dateRange, setDateRange] = useState('5-12 agosto');
  const [selectedImage, setSelectedImage] = useState(null);

  const getMinPrice = (flights) => {
    const validPrices = flights.filter(f => f.price !== null).map(f => f.price);
    return validPrices.length > 0 ? Math.min(...validPrices) : null;
  };

  const hasValidFlights = (flights) => {
    return flights.some(f => f.price !== null);
  };

  const getCountryCitiesWithFlights = (country) => {
    return country.cities.filter(city => hasValidFlights(city.flights));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Premium Header */}
      <header className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Plane className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">SkyWanderer</h1>
                <p className="text-blue-200 mt-1">Discover Your Summer Escape</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{dateRange}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span>2 Adults</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Search Flights
                <Search className="inline ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      {!selectedCountry && (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mediterranean</span> Getaway
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Explore the most beautiful destinations along the Mediterranean coast. 
                From Greek islands to Spanish beaches, find your dream vacation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Best Price Guarantee</span>
                </div>
                <div className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">Instant Confirmation</span>
                </div>
                <div className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">Flexible Changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Countries Grid - Premium Cards */}
        {!selectedCountry && (
          <>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
              <p className="text-gray-600">Choose your next adventure from our curated selection</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {travelData.countries.map((country, idx) => {
                const citiesWithFlights = getCountryCitiesWithFlights(country);
                const availableCities = citiesWithFlights.length;
                
                return (
                  <div
                    key={idx}
                    onClick={() => availableCities > 0 && setSelectedCountry(country)}
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${availableCities > 0 ? 'cursor-pointer hover:scale-[1.02]' : 'opacity-70'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 z-0">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-300 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                    
                    <div className="relative z-30 p-8 h-64 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <MapPin className="w-8 h-8 text-white/80" />
                          {availableCities > 0 && (
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                              {availableCities} cities
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                        <p className="text-white/80">
                          {availableCities > 0 
                            ? `${availableCities} destinations available` 
                            : 'Coming soon'}
                        </p>
                      </div>
                      
                      {availableCities > 0 && (
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-white/80 text-sm">From</span>
                          <div className="flex items-center gap-2">
                            <Euro className="w-5 h-5 text-white" />
                            <span className="text-2xl font-bold text-white">
                              {Math.min(...citiesWithFlights.map(city => getMinPrice(city.flights) || Infinity))}€
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {availableCities > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Cities View - Premium Layout */}
        {selectedCountry && !selectedCity && (
          <div className="space-y-8">
            {/* Breadcrumb and Header */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedCountry(null)}
                className="group flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold text-gray-700">Back to Countries</span>
              </button>
              
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-white rounded-xl shadow-lg">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select 
                    className="ml-2 bg-transparent font-semibold text-gray-800 focus:outline-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="price">Price (Low to High)</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center py-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{selectedCountry.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the most beautiful destinations in {selectedCountry.name}. 
                Each city offers unique experiences, from stunning beaches to vibrant nightlife.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {selectedCountry.cities
                .filter(city => hasValidFlights(city.flights))
                .sort((a, b) => {
                  if (sortBy === 'price') {
                    return (getMinPrice(a.flights) || Infinity) - (getMinPrice(b.flights) || Infinity);
                  }
                  return a.name.localeCompare(b.name);
                })
                .map((city, idx) => {
                  const minPrice = getMinPrice(city.flights);
                  
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedCity(city)}
                      className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]"
                    >
                      {/* City Header with Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                        {city.images && city.images[0] && (
                          <img 
                            src={city.images[0]} 
                            alt={city.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                              <div className="flex items-center gap-2 text-white/90">
                                <MapPin className="w-4 h-4" />
                                <span>{selectedCountry.name}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white">{minPrice}€</div>
                              <div className="text-white/80 text-sm">starting price</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* City Details */}
                      <div className="p-6">
                        <p className="text-gray-600 mb-6 line-clamp-2">{city.description}</p>
                        
                        {/* Quick Info Icons */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-3 bg-blue-50 rounded-xl">
                            <Waves className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-gray-800">{city.beaches.length} Beaches</div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-xl">
                            <Car className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-gray-800">
                              {city.carRental.recommended ? 'Car Recommended' : 'No Car Needed'}
                            </div>
                          </div>
                          <div className="text-center p-3 bg-pink-50 rounded-xl">
                            <Moon className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-gray-800">{city.nightlife.rating}</div>
                          </div>
                        </div>

                        {/* Beach Highlights */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Sun className="w-5 h-5 text-yellow-500" />
                            Top Beaches
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {city.beaches.slice(0, 3).map((beach, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                              >
                                {beach.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Flight Info */}
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Plane className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-700 font-semibold">
                                {city.flights.filter(f => f.price !== null).length} flights available
                              </span>
                            </div>
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                              View Flights →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Flights View - Premium Booking Interface */}
        {selectedCity && (
          <div className="space-y-8">
            {/* Back Button and City Header */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedCity(null)}
                className="group flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold text-gray-700">Back to Cities</span>
              </button>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">From {getMinPrice(selectedCity.flights)}€</div>
                  <div className="text-gray-600 text-sm">Best price for {dateRange}</div>
                </div>
              </div>
            </div>

            {/* City Hero */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {selectedCity.images && selectedCity.images[0] && (
                <img 
                  src={selectedCity.images[0]} 
                  alt={selectedCity.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center p-8">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{selectedCity.name}</h2>
                  <div className="flex items-center gap-4 text-white/90">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {selectedCountry.name}
                    </span>
                    <span>•</span>
                    <span>{selectedCity.flights.filter(f => f.price !== null).length} available flights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{getMinPrice(selectedCity.flights)}€</div>
                <div className="text-gray-600">Lowest Price</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {selectedCity.flights.filter(f => f.price !== null).length}
                </div>
                <div className="text-gray-600">Available Flights</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {selectedCity.carRental.recommended ? 'Yes' : 'No'}
                </div>
                <div className="text-gray-600">Car Rental Recommended</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">{selectedCity.nightlife.rating}</div>
                <div className="text-gray-600">Nightlife Rating</div>
              </div>
            </div>

            {/* City Information Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About {selectedCity.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedCity.description}</p>
                </div>

                {/* Beaches */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Waves className="w-6 h-6 text-blue-600" />
                    Top Beaches
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedCity.beaches.map((beach, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                        <h4 className="font-bold text-xl text-blue-800 mb-2">{beach.name}</h4>
                        <p className="text-gray-700">{beach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Car Rental & Nightlife */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Car Rental */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="w-8 h-8 text-purple-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Car Rental</h3>
                    </div>
                    <div className="mb-4">
                      <span className={`px-4 py-2 rounded-full font-semibold ${selectedCity.carRental.recommended ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {selectedCity.carRental.recommended ? '✓ Recommended' : 'Not Necessary'}
                      </span>
                    </div>
                    <p className="text-gray-700">{selectedCity.carRental.reason}</p>
                  </div>

                  {/* Nightlife */}
                  <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 border border-pink-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Moon className="w-8 h-8 text-pink-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Nightlife</h3>
                    </div>
                    <div className="mb-4">
                      <span className={`px-4 py-2 rounded-full font-semibold ${
                        selectedCity.nightlife.rating === 'Molto vivace' || selectedCity.nightlife.rating === 'Leggendaria' 
                          ? 'bg-red-100 text-red-800'
                          : selectedCity.nightlife.rating === 'Vivace' 
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedCity.nightlife.rating}
                      </span>
                    </div>
                    <p className="text-gray-700">{selectedCity.nightlife.description}</p>
                  </div>
                </div>

                {/* Image Gallery */}
                {selectedCity.images && selectedCity.images.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Sun className="w-6 h-6 text-yellow-500" />
                      Photo Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedCity.images.map((image, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setSelectedImage(image)}
                          className="relative group cursor-pointer overflow-hidden rounded-xl"
                        >
                          <img 
                            src={image} 
                            alt={`${selectedCity.name} ${idx + 1}`}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Flight Listings */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Flights</h3>
              
              <div className="space-y-6">
                {selectedCity.flights
                  .filter(flight => flight.price !== null)
                  .sort((a, b) => a.price - b.price)
                  .map((flight, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                          {/* Departure Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-3 bg-blue-50 rounded-xl">
                                <Plane className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-500 font-medium">Departure</div>
                                <div className="text-xl font-bold text-gray-900">{flight.departureDate}</div>
                              </div>
                            </div>
                            <div className="pl-14">
                              <div className="text-2xl font-bold text-gray-900 mb-1">{flight.departureTime}</div>
                              <div className="text-gray-600">Direct flight</div>
                            </div>
                          </div>

                          {/* Return Info */}
                          <div className="flex-1 lg:border-l lg:border-r lg:px-8">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-3 bg-purple-50 rounded-xl">
                                <Plane className="w-6 h-6 text-purple-600 rotate-90" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-500 font-medium">Return</div>
                                <div className="text-xl font-bold text-gray-900">{flight.returnDate}</div>
                              </div>
                            </div>
                            <div className="pl-14">
                              <div className="text-2xl font-bold text-gray-900 mb-1">{flight.returnTime}</div>
                              <div className="text-gray-600">Direct flight</div>
                            </div>
                          </div>

                          {/* Price and Booking */}
                          <div className="flex-1 lg:text-right">
                            <div className="mb-4">
                              <div className="text-sm text-gray-500">Total price for 2 adults</div>
                              <div className="text-4xl font-bold text-gray-900">{flight.price}€</div>
                              <div className="text-green-600 font-semibold">Best price available</div>
                            </div>
                            <button className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                              Book Now
                            </button>
                          </div>
                        </div>

                        {/* Flight Details Footer */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center gap-4">
                              <span>👜 Carry-on included</span>
                              <span>🎫 E-ticket</span>
                              <span>🔄 Free cancellation within 24h</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              </span>
                              <span className="font-semibold">4.8/5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}