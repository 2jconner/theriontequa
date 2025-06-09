import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  Star, 
  Heart, 
  MessageCircle,
  ChevronDown,
  Search,
  SlidersHorizontal,
  CheckCircle
} from 'lucide-react';

const MarketplacePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedLocation, setSelectedLocation] = useState('all');

  const animals = [
    {
      id: 1,
      name: 'Golden Retriever Puppies',
      breed: 'Golden Retriever',
      age: '8 weeks',
      price: 1200,
      location: 'Dallas, TX',
      breeder: 'Golden Dreams Kennel',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: true,
      description: 'Beautiful, healthy Golden Retriever puppies from champion bloodlines. These loving companions are perfect for families and have been raised with lots of socialization.',
      tags: ['Health Tested', 'Champion Bloodline', 'Vaccinated', 'AKC Registered'],
      available: 3
    },
    {
      id: 2,
      name: 'Maine Coon Kittens',
      breed: 'Maine Coon',
      age: '12 weeks',
      price: 800,
      location: 'Austin, TX',
      breeder: 'Majestic Maine Coons',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: false,
      description: 'Gentle giants with amazing personalities, perfect for families. These Maine Coon kittens are well-socialized and come from excellent bloodlines.',
      tags: ['Pedigreed', 'Health Guarantee', 'Socialized', 'TICA Registered'],
      available: 2
    },
    {
      id: 3,
      name: 'French Bulldog Puppies',
      breed: 'French Bulldog',
      age: '10 weeks',
      price: 2500,
      location: 'Los Angeles, CA',
      breeder: 'Elite French Bulldogs',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: true,
      description: 'Adorable French Bulldog puppies with excellent temperaments. These compact companions are perfect for city living and apartment life.',
      tags: ['Health Tested', 'Rare Colors', 'Show Quality', 'AKC Registered'],
      available: 1
    },
    {
      id: 4,
      name: 'Siberian Husky Puppies',
      breed: 'Siberian Husky',
      age: '9 weeks',
      price: 1000,
      location: 'Denver, CO',
      breeder: 'Arctic Dreams',
      rating: 4.7,
      reviews: 94,
      image: 'https://images.pexels.com/photos/605494/pexels-photo-605494.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: false,
      description: 'Energetic and beautiful Husky puppies ready for active families. These working dogs need plenty of exercise and mental stimulation.',
      tags: ['Working Line', 'Blue Eyes', 'Health Cleared', 'AKC Registered'],
      available: 4
    },
    {
      id: 5,
      name: 'Persian Cat Kittens',
      breed: 'Persian',
      age: '14 weeks',
      price: 900,
      location: 'Miami, FL',
      breeder: 'Royal Persians',
      rating: 4.8,
      reviews: 73,
      image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: false,
      description: 'Luxurious Persian kittens with stunning coats and sweet personalities. These gentle cats make wonderful indoor companions.',
      tags: ['CFA Registered', 'Doll Face', 'Health Tested', 'Show Quality'],
      available: 3
    },
    {
      id: 6,
      name: 'Labrador Retriever Puppies',
      breed: 'Labrador Retriever',
      age: '7 weeks',
      price: 950,
      location: 'Seattle, WA',
      breeder: 'Pacific Labs',
      rating: 4.9,
      reviews: 142,
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: true,
      description: 'Friendly Labrador puppies perfect for families with children. These loyal companions are known for their gentle nature and intelligence.',
      tags: ['Family Friendly', 'Health Guarantee', 'Trained', 'AKC Registered'],
      available: 5
    },
    {
      id: 7,
      name: 'Bengal Cat Kittens',
      breed: 'Bengal',
      age: '10 weeks',
      price: 1200,
      location: 'Phoenix, AZ',
      breeder: 'Wild Spirit Bengals',
      rating: 4.6,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: false,
      description: 'Stunning Bengal kittens with wild markings and playful personalities. These active cats love to climb and explore.',
      tags: ['TICA Registered', 'Wild Markings', 'Active', 'Health Tested'],
      available: 2
    },
    {
      id: 8,
      name: 'German Shepherd Puppies',
      breed: 'German Shepherd',
      age: '8 weeks',
      price: 1100,
      location: 'Dallas, TX',
      breeder: 'Noble Shepherds',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: false,
      description: 'Intelligent German Shepherd puppies from working lines. These loyal protectors make excellent family guardians and companions.',
      tags: ['Working Line', 'Intelligent', 'Loyal', 'Health Cleared'],
      available: 3
    },
    {
      id: 9,
      name: 'Ragdoll Cat Kittens',
      breed: 'Ragdoll',
      age: '12 weeks',
      price: 750,
      location: 'Portland, OR',
      breeder: 'Gentle Giants Cattery',
      rating: 4.7,
      reviews: 81,
      image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
      verified: true,
      featured: false,
      description: 'Docile Ragdoll kittens with beautiful blue eyes and silky coats. These gentle cats are known for going limp when picked up.',
      tags: ['Blue Eyes', 'Docile', 'Silky Coat', 'TICA Registered'],
      available: 4
    }
  ];

  const categories = [
    { id: 'all', name: 'All Pets', count: animals.length },
    { id: 'dogs', name: 'Dogs', count: animals.filter(a => ['Golden Retriever', 'French Bulldog', 'Siberian Husky', 'Labrador Retriever', 'German Shepherd'].includes(a.breed)).length },
    { id: 'cats', name: 'Cats', count: animals.filter(a => ['Maine Coon', 'Persian', 'Bengal', 'Ragdoll'].includes(a.breed)).length },
    { id: 'birds', name: 'Birds', count: 0 },
    { id: 'exotic', name: 'Exotic', count: 0 }
  ];

  const filteredAnimals = animals.filter(animal => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'dogs') return ['Golden Retriever', 'French Bulldog', 'Siberian Husky', 'Labrador Retriever', 'German Shepherd'].includes(animal.breed);
    if (selectedCategory === 'cats') return ['Maine Coon', 'Persian', 'Bengal', 'Ragdoll'].includes(animal.breed);
    return false;
  }).filter(animal => {
    return animal.price >= priceRange[0] && animal.price <= priceRange[1];
  });

  return (
    <div className="min-h-screen bg-orange-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-amber-900 mb-2">Pet Marketplace</h1>
            <p className="text-amber-700">Discover your perfect companion from verified breeders</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex items-center bg-white rounded-lg border border-orange-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-amber-900 mb-6">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-amber-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-orange-50 text-orange-600 border border-orange-200'
                          : 'hover:bg-orange-50 border border-transparent'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-amber-600">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-amber-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    />
                    <span className="text-amber-600">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="font-medium text-amber-900 mb-3">Location</h4>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="all">All Locations</option>
                  <option value="ca">California</option>
                  <option value="tx">Texas</option>
                  <option value="co">Colorado</option>
                  <option value="fl">Florida</option>
                  <option value="wa">Washington</option>
                  <option value="az">Arizona</option>
                  <option value="or">Oregon</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([0, 5000]);
                  setSelectedLocation('all');
                }}
                className="w-full bg-orange-100 text-amber-800 py-2 rounded-lg hover:bg-orange-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-amber-700">
                Showing {filteredAnimals.length} of {animals.length} pets
              </p>
              <select className="px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Highest Rated</option>
              </select>
            </div>

            {/* Animal Grid/List */}
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-6'
            }`}>
              {filteredAnimals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} viewMode={viewMode} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Load More Pets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimalCard = ({ animal, viewMode }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-lg transition-all">
        <div className="flex">
          <div className="relative w-48 h-48 flex-shrink-0">
            <img 
              src={animal.image} 
              alt={animal.name}
              className="w-full h-full object-cover"
            />
            {animal.featured && (
              <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Featured
              </div>
            )}
            {animal.available <= 2 && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Only {animal.available} left!
              </div>
            )}
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
            </button>
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-1">{animal.name}</h3>
                <p className="text-amber-700">{animal.breed} • {animal.age}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-900">${animal.price.toLocaleString()}</div>
                <div className="text-sm text-amber-700">{animal.available} available</div>
              </div>
            </div>
            
            <p className="text-amber-700 mb-4">{animal.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {animal.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
              {animal.tags.length > 3 && (
                <span className="px-2 py-1 bg-orange-100 text-amber-700 text-xs rounded-full">
                  +{animal.tags.length - 3} more
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-1">
                  <MapPin className="w-4 h-4 text-amber-600 mr-1" />
                  <span className="text-sm text-amber-700">{animal.location}</span>
                </div>
                <div className="flex items-center">
                  <Link to={`/breeder/${animal.id}`} className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                    {animal.breeder}
                  </Link>
                  {animal.verified && (
                    <CheckCircle className="w-4 h-4 text-green-500 ml-1" />
                  )}
                </div>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                  <span className="text-sm text-amber-700">{animal.rating} ({animal.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-amber-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
                <Link 
                  to={`/animal/${animal.id}`}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-lg transition-all group">
      <div className="relative">
        <img 
          src={animal.image} 
          alt={animal.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {animal.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        {animal.available <= 2 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Only {animal.available} left!
          </div>
        )}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-1">{animal.name}</h3>
            <p className="text-amber-700 text-sm">{animal.breed} • {animal.age}</p>
          </div>
          <div className="text-xl font-bold text-amber-900">${animal.price.toLocaleString()}</div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {animal.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center mb-2">
          <MapPin className="w-4 h-4 text-amber-600 mr-1" />
          <span className="text-sm text-amber-700">{animal.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Link to={`/breeder/${animal.id}`} className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              {animal.breeder}
            </Link>
            {animal.verified && (
              <CheckCircle className="w-4 h-4 text-green-500 ml-1" />
            )}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
            <span className="text-sm text-amber-700">{animal.rating}</span>
          </div>
        </div>
        
        <div className="text-sm text-amber-700 mb-4">{animal.available} available</div>
        
        <div className="flex items-center space-x-2">
          <Link 
            to={`/animal/${animal.id}`}
            className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-center"
          >
            View Details
          </Link>
          <button className="p-2 text-amber-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;