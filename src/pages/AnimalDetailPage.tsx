import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Shield, 
  Star,
  MessageCircle,
  Phone,
  Mail,
  Camera,
  Play,
  CheckCircle,
  AlertCircle,
  Award,
  Clock,
  Users,
  DollarSign
} from 'lucide-react';

const AnimalDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Mock data - in real app, fetch based on ID
  const animal = {
    id: 1,
    name: 'Golden Retriever Puppies',
    breed: 'Golden Retriever',
    age: '8 weeks',
    price: 1200,
    location: 'Dallas, TX',
    breeder: {
      name: 'Golden Dreams Kennel',
      rating: 4.9,
      reviews: 127,
      verified: true,
      yearsExperience: 15,
      totalSales: 450,
      responseTime: '< 2 hours',
      joinedDate: '2009'
    },
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/605494/pexels-photo-605494.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful, healthy Golden Retriever puppies from champion bloodlines. These puppies have been raised in our home with lots of love and socialization. They are perfect for families and will make wonderful companions. Each puppy comes with a comprehensive health guarantee and all necessary documentation.',
    details: {
      gender: 'Male & Female Available',
      weight: '12-15 lbs',
      color: 'Golden',
      parents: 'Both parents on site',
      registration: 'AKC Registered',
      microchipped: true,
      vaccinated: true,
      dewormed: true,
      healthTested: true,
      temperament: 'Friendly, Intelligent, Devoted'
    },
    healthInfo: {
      vaccinations: ['DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)', 'Rabies', 'Bordetella'],
      healthTests: ['Hip Dysplasia (OFA Excellent)', 'Elbow Dysplasia (OFA Normal)', 'Eye Clearance (CERF)', 'Heart Clearance (OFA Normal)'],
      veterinarian: 'Dr. Sarah Johnson, DVM - Bay Area Veterinary Clinic',
      healthGuarantee: '2 years genetic health guarantee',
      dewormingSchedule: 'Dewormed at 2, 4, 6, and 8 weeks',
      nextVaccination: 'Due at 12 weeks'
    },
    tags: ['Health Tested', 'Champion Bloodline', 'Vaccinated', 'Socialized', 'AKC Registered', 'Family Raised'],
    availableCount: 3,
    readyDate: '2025-02-15',
    deposit: 300,
    shipping: {
      available: true,
      cost: 350,
      methods: ['Ground Transport', 'Flight Nanny', 'Pickup Available']
    }
  };

  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2024-12-15',
      review: 'Amazing experience! Our puppy Luna is healthy, well-socialized, and exactly as described. The breeder was very professional and answered all our questions. The facility was clean and you could see the love and care put into raising these puppies. Luna has been the perfect addition to our family!',
      helpful: 12,
      verified: true,
      images: ['https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200']
    },
    {
      id: 2,
      author: 'Mike R.',
      rating: 5,
      date: '2024-11-28',
      review: 'Excellent breeder! Very knowledgeable and caring. Our Golden Retriever Max is now 6 months old and doing great. The health documentation was thorough and the breeder has been available for questions even after the purchase. Highly recommend!',
      helpful: 8,
      verified: true,
      images: []
    },
    {
      id: 3,
      author: 'Jennifer L.',
      rating: 4,
      date: '2024-11-10',
      review: 'Good experience overall. The puppy was healthy and the breeder provided all necessary documentation. Communication could have been a bit better during the initial inquiry phase, but once we connected, everything went smoothly. Our puppy is wonderful!',
      helpful: 5,
      verified: true,
      images: []
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-amber-700 mb-6">
          <Link to="/marketplace" className="hover:text-orange-600 transition-colors">Marketplace</Link>
          <span>/</span>
          <span className="text-amber-900">{animal.name}</span>
        </div>

        {/* Back Button */}
        <Link 
          to="/marketplace"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Marketplace
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src={animal.images[selectedImage]} 
                  alt={animal.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                {animal.availableCount <= 3 && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Only {animal.availableCount} left!
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {animal.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-orange-500' : 'border-orange-200'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-amber-900 mb-2">{animal.name}</h1>
                  <div className="flex items-center space-x-4 text-amber-700">
                    <span>{animal.breed}</span>
                    <span>•</span>
                    <span>{animal.age}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {animal.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-amber-900">${animal.price.toLocaleString()}</div>
                  <div className="text-sm text-amber-700">per puppy</div>
                  <div className="text-sm text-orange-600 mt-1">Deposit: ${animal.deposit}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {animal.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-amber-800 leading-relaxed mb-6">{animal.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Basic Information</h3>
                  <div className="space-y-2">
                    <DetailItem label="Gender" value={animal.details.gender} />
                    <DetailItem label="Current Weight" value={animal.details.weight} />
                    <DetailItem label="Color" value={animal.details.color} />
                    <DetailItem label="Temperament" value={animal.details.temperament} />
                    <DetailItem label="Registration" value={animal.details.registration} />
                    <DetailItem label="Ready Date" value={new Date(animal.readyDate).toLocaleDateString()} />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Health & Care</h3>
                  <div className="space-y-2">
                    <DetailItem 
                      label="Microchipped" 
                      value={animal.details.microchipped ? 'Yes' : 'No'}
                      icon={animal.details.microchipped ? <CheckCircle className="w-4 h-4 text-green-500" /> : null}
                    />
                    <DetailItem 
                      label="Vaccinated" 
                      value={animal.details.vaccinated ? 'Yes' : 'No'}
                      icon={animal.details.vaccinated ? <CheckCircle className="w-4 h-4 text-green-500" /> : null}
                    />
                    <DetailItem 
                      label="Dewormed" 
                      value={animal.details.dewormed ? 'Yes' : 'No'}
                      icon={animal.details.dewormed ? <CheckCircle className="w-4 h-4 text-green-500" /> : null}
                    />
                    <DetailItem 
                      label="Health Tested" 
                      value={animal.details.healthTested ? 'Yes' : 'No'}
                      icon={animal.details.healthTested ? <CheckCircle className="w-4 h-4 text-green-500" /> : null}
                    />
                    <DetailItem label="Parents" value={animal.details.parents} />
                  </div>
                </div>
              </div>
            </div>

            {/* Health Information */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                Health Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Vaccinations</h3>
                  <ul className="space-y-1">
                    {animal.healthInfo.vaccinations.map((vaccination, index) => (
                      <li key={index} className="flex items-start text-amber-800">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{vaccination}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {animal.healthInfo.nextVaccination}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Health Tests</h3>
                  <ul className="space-y-1">
                    {animal.healthInfo.healthTests.map((test, index) => (
                      <li key={index} className="flex items-start text-amber-800">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-900">Health Guarantee</span>
                </div>
                <p className="text-green-800">{animal.healthInfo.healthGuarantee}</p>
                <p className="text-sm text-green-700 mt-1">
                  Veterinarian: {animal.healthInfo.veterinarian}
                </p>
                <p className="text-sm text-green-700">
                  Deworming: {animal.healthInfo.dewormingSchedule}
                </p>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Shipping & Pickup</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Available Options</h3>
                  <ul className="space-y-2">
                    {animal.shipping.methods.map((method, index) => (
                      <li key={index} className="flex items-center text-amber-800">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Shipping Cost</h3>
                  <div className="flex items-center text-amber-800">
                    <DollarSign className="w-4 h-4 text-amber-600 mr-1" />
                    <span>${animal.shipping.cost} (varies by location)</span>
                  </div>
                  <p className="text-sm text-amber-700 mt-2">
                    Pickup available at our facility in {animal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
              <h2 className="text-xl font-bold text-amber-900 mb-6">Reviews</h2>
              
              <div className="space-y-6">
                {reviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              
              <div className="text-center mt-6">
                <Link to="/reviews" className="text-orange-600 hover:text-orange-700 font-medium">
                  View All Reviews
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">GD</span>
                </div>
                <h3 className="font-bold text-amber-900">{animal.breeder.name}</h3>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                  <span className="font-medium">{animal.breeder.rating}</span>
                  <span className="text-amber-700 ml-1">({animal.breeder.reviews} reviews)</span>
                </div>
                {animal.breeder.verified && (
                  <div className="flex items-center justify-center mt-2 text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Verified Breeder</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Experience</span>
                  <span className="font-medium">{animal.breeder.yearsExperience} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Total Sales</span>
                  <span className="font-medium">{animal.breeder.totalSales}+ pets</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Response Time</span>
                  <span className="font-medium text-green-600">{animal.breeder.responseTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Member Since</span>
                  <span className="font-medium">{animal.breeder.joinedDate}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Contact Breeder
                </button>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </button>
                <Link 
                  to={`/breeder/${animal.id}`}
                  className="w-full bg-orange-100 text-amber-800 py-3 rounded-lg hover:bg-orange-200 transition-colors font-semibold text-center block"
                >
                  View Breeder Profile
                </Link>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                <h3 className="font-semibold text-amber-900">Safety Tips</h3>
              </div>
              <ul className="text-sm text-amber-800 space-y-2">
                <li>• Always meet the breeder in person</li>
                <li>• Ask to see health certificates</li>
                <li>• Visit the breeding facility</li>
                <li>• Meet the puppy's parents if possible</li>
                <li>• Never send money without meeting the pet</li>
                <li>• Trust your instincts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactFormModal 
          animal={animal} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </div>
  );
};

const DetailItem = ({ label, value, icon }) => (
  <div className="flex justify-between items-center">
    <span className="text-amber-700">{label}</span>
    <div className="flex items-center">
      {icon && <span className="mr-1">{icon}</span>}
      <span className="font-medium text-amber-900">{value}</span>
    </div>
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="border-b border-orange-100 pb-6 last:border-b-0">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center mr-3">
          <span className="text-sm font-medium text-amber-800">
            {review.author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="flex items-center">
            <div className="font-medium text-amber-900">{review.author}</div>
            {review.verified && (
              <CheckCircle className="w-4 h-4 text-green-500 ml-1" />
            )}
          </div>
          <div className="text-sm text-amber-700">{new Date(review.date).toLocaleDateString()}</div>
        </div>
      </div>
      <div className="flex items-center">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
        ))}
      </div>
    </div>
    
    <p className="text-amber-800 mb-3">{review.review}</p>
    
    {review.images.length > 0 && (
      <div className="flex space-x-2 mb-3">
        {review.images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt="Review" 
            className="w-16 h-16 rounded-lg object-cover"
          />
        ))}
      </div>
    )}
    
    <button className="text-sm text-amber-700 hover:text-amber-900">
      Helpful ({review.helpful})
    </button>
  </div>
);

const ContactFormModal = ({ animal, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl max-w-md w-full p-6">
      <h3 className="text-xl font-bold text-amber-900 mb-4">Contact Breeder</h3>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">Your Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">Phone</label>
          <input 
            type="tel" 
            className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">Message</label>
          <textarea 
            rows={4}
            className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder={`I'm interested in ${animal.name}. Could you please provide more information about availability and next steps?`}
          />
        </div>
        
        <div className="flex space-x-3 pt-4">
          <button 
            type="button"
            onClick={onClose}
            className="flex-1 bg-orange-100 text-amber-800 py-2 rounded-lg hover:bg-orange-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default AnimalDetailPage;