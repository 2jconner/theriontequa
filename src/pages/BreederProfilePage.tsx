import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Shield, 
  Award,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Users,
  Heart,
  CheckCircle,
  Camera,
  Globe
} from 'lucide-react';

const BreederProfilePage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');

  // Mock data - in real app, fetch based on ID
  const breeder = {
    id: 1,
    name: 'Golden Dreams Kennel',
    owner: 'Sarah & Michael Thompson',
    location: 'San Francisco, CA',
    established: 2009,
    rating: 4.9,
    reviews: 127,
    totalSales: 450,
    responseTime: '< 2 hours',
    verified: true,
    specialties: ['Golden Retrievers', 'Labrador Retrievers'],
    coverImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200',
    profileImage: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Welcome to Golden Dreams Kennel! We are a family-owned breeding operation specializing in Golden Retrievers and Labrador Retrievers. With over 15 years of experience, we are dedicated to producing healthy, well-socialized puppies with excellent temperaments.',
    facilities: {
      indoor: '2,000 sq ft',
      outdoor: '5 acres',
      whelping: '4 rooms',
      exercise: 'Large play areas'
    },
    certifications: [
      'AKC Breeder of Merit',
      'Good Dog Certified',
      'Health Testing Certified',
      'USDA Licensed'
    ],
    healthTesting: [
      'Hip Dysplasia (OFA)',
      'Elbow Dysplasia (OFA)',
      'Eye Clearance (CERF)',
      'Heart Clearance (OFA)',
      'EIC Clear',
      'CNM Clear'
    ],
    contact: {
      phone: '(555) 123-4567',
      email: 'info@goldendreamskennel.com',
      website: 'www.goldendreamskennel.com'
    }
  };

  const currentListings = [
    {
      id: 1,
      name: 'Golden Retriever Puppies',
      breed: 'Golden Retriever',
      age: '8 weeks',
      price: 1200,
      available: 3,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Labrador Retriever Puppies',
      breed: 'Labrador Retriever',
      age: '7 weeks',
      price: 950,
      available: 2,
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      date: '2024-12-15',
      review: 'Amazing experience! Our puppy Luna is healthy, well-socialized, and exactly as described. The breeder was very professional and answered all our questions.',
      pet: 'Golden Retriever'
    },
    {
      id: 2,
      author: 'Mike Chen',
      rating: 5,
      date: '2024-11-28',
      review: 'Excellent breeder! Very knowledgeable and caring. Our Golden Retriever Max is now 6 months old and doing great.',
      pet: 'Golden Retriever'
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      rating: 4,
      date: '2024-11-10',
      review: 'Good experience overall. The puppy was healthy and the breeder provided all necessary documentation.',
      pet: 'Labrador Retriever'
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/marketplace"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Marketplace
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden mb-8">
          <div className="relative h-64">
            <img 
              src={breeder.coverImage} 
              alt="Kennel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 relative z-10">
              <div className="flex items-end space-x-4">
                <img 
                  src={breeder.profileImage} 
                  alt={breeder.name}
                  className="w-24 h-24 rounded-xl border-4 border-white shadow-lg object-cover"
                />
                <div className="pb-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <h1 className="text-2xl font-bold text-white">{breeder.name}</h1>
                    {breeder.verified && (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    )}
                  </div>
                  <p className="text-white/90">{breeder.owner}</p>
                  <div className="flex items-center text-white/80 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {breeder.location}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                icon={<Star className="w-5 h-5 text-amber-500" />}
                value={breeder.rating}
                label="Rating"
                suffix="/5"
              />
              <StatCard 
                icon={<MessageCircle className="w-5 h-5 text-orange-500" />}
                value={breeder.reviews}
                label="Reviews"
              />
              <StatCard 
                icon={<Users className="w-5 h-5 text-green-500" />}
                value={breeder.totalSales}
                label="Pets Sold"
                suffix="+"
              />
              <StatCard 
                icon={<Calendar className="w-5 h-5 text-amber-600" />}
                value={new Date().getFullYear() - breeder.established}
                label="Years"
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 mb-8">
          <div className="flex space-x-8 px-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'listings', label: 'Current Listings' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'gallery', label: 'Gallery' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-amber-700 hover:text-amber-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'about' && <AboutTab breeder={breeder} />}
            {activeTab === 'listings' && <ListingsTab listings={currentListings} />}
            {activeTab === 'reviews' && <ReviewsTab reviews={recentReviews} />}
            {activeTab === 'gallery' && <GalleryTab />}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ContactCard breeder={breeder} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, suffix = '' }) => (
  <div className="text-center">
    <div className="flex items-center justify-center mb-1">{icon}</div>
    <div className="text-xl font-bold text-amber-900">{value}{suffix}</div>
    <div className="text-sm text-amber-700">{label}</div>
  </div>
);

const AboutTab = ({ breeder }) => (
  <div className="space-y-6">
    {/* Description */}
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-4">About Our Kennel</h2>
      <p className="text-amber-800 leading-relaxed">{breeder.description}</p>
    </div>

    {/* Specialties */}
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-4">Specialties</h2>
      <div className="flex flex-wrap gap-2">
        {breeder.specialties.map((specialty, index) => (
          <span key={index} className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm">
            {specialty}
          </span>
        ))}
      </div>
    </div>

    {/* Facilities */}
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-4">Facilities</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(breeder.facilities).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-amber-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            <span className="font-medium text-amber-900">{value}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Certifications */}
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
        <Award className="w-5 h-5 text-amber-500 mr-2" />
        Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-3">
        {breeder.certifications.map((cert, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-amber-800">{cert}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Health Testing */}
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
        <Shield className="w-5 h-5 text-green-600 mr-2" />
        Health Testing
      </h2>
      <div className="grid md:grid-cols-2 gap-3">
        {breeder.healthTesting.map((test, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-amber-800">{test}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ListingsTab = ({ listings }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-6">Current Listings</h2>
      <div className="grid gap-6">
        {listings.map(listing => (
          <div key={listing.id} className="flex items-center space-x-4 p-4 border border-orange-200 rounded-lg hover:border-orange-300 transition-colors">
            <img 
              src={listing.image} 
              alt={listing.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900">{listing.name}</h3>
              <p className="text-amber-700">{listing.breed} • {listing.age}</p>
              <p className="text-sm text-amber-600">{listing.available} available</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-amber-900">${listing.price.toLocaleString()}</div>
              <Link 
                to={`/animal/${listing.id}`}
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReviewsTab = ({ reviews }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
      <h2 className="text-xl font-bold text-amber-900 mb-6">Recent Reviews</h2>
      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="border-b border-orange-100 pb-6 last:border-b-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <span className="font-medium text-amber-800">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-amber-900">{review.author}</div>
                  <div className="text-sm text-amber-700">{new Date(review.date).toLocaleDateString()}</div>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-amber-800 mb-2">{review.review}</p>
            <span className="text-sm text-orange-600">{review.pet}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GalleryTab = () => (
  <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
    <h2 className="text-xl font-bold text-amber-900 mb-6">Photo Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/605494/pexels-photo-605494.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=400'
      ].map((image, index) => (
        <div key={index} className="aspect-square rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
          />
        </div>
      ))}
    </div>
  </div>
);

const ContactCard = ({ breeder }) => (
  <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 sticky top-24">
    <h3 className="text-lg font-bold text-amber-900 mb-4">Contact Information</h3>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center">
        <Phone className="w-4 h-4 text-amber-600 mr-3" />
        <span className="text-amber-800">{breeder.contact.phone}</span>
      </div>
      <div className="flex items-center">
        <Mail className="w-4 h-4 text-amber-600 mr-3" />
        <span className="text-amber-800">{breeder.contact.email}</span>
      </div>
      <div className="flex items-center">
        <Globe className="w-4 h-4 text-amber-600 mr-3" />
        <a href={`https://${breeder.contact.website}`} className="text-orange-600 hover:text-orange-700">
          {breeder.contact.website}
        </a>
      </div>
    </div>

    <div className="space-y-3 mb-6">
      <div className="flex justify-between text-sm">
        <span className="text-amber-700">Response Time</span>
        <span className="font-medium text-green-600">{breeder.responseTime}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-amber-700">Established</span>
        <span className="font-medium">{breeder.established}</span>
      </div>
    </div>

    <div className="space-y-3">
      <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
        Send Message
      </button>
      <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold flex items-center justify-center">
        <Phone className="w-4 h-4 mr-2" />
        Call Now
      </button>
    </div>
  </div>
);

export default BreederProfilePage;