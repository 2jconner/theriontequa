import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Filter, 
  Search, 
  ThumbsUp, 
  MessageCircle,
  Calendar,
  Award,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

const ReviewsPage = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      authorInitials: 'SJ',
      rating: 5,
      date: '2024-12-15',
      verified: true,
      breeder: 'Golden Dreams Kennel',
      breederId: 1,
      pet: 'Golden Retriever - Luna',
      category: 'dogs',
      review: 'Amazing experience from start to finish! Sarah and Michael at Golden Dreams Kennel were incredibly professional and caring. Our puppy Luna is healthy, well-socialized, and exactly as described. The facility was clean and the other dogs looked happy and well-cared for. They provided all health records and were available for questions even after we brought Luna home. Highly recommend!',
      helpful: 24,
      images: [
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200',
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      tags: ['Health Records Provided', 'Clean Facility', 'Great Communication']
    },
    {
      id: 2,
      author: 'Mike Chen',
      authorInitials: 'MC',
      rating: 5,
      date: '2024-11-28',
      verified: true,
      breeder: 'Majestic Maine Coons',
      breederId: 2,
      pet: 'Maine Coon - Whiskers',
      category: 'cats',
      review: 'Excellent breeder! Very knowledgeable about the breed and passionate about their cats. Our Maine Coon Whiskers is now 8 months old and has the most amazing personality. The breeder provided detailed care instructions and has been available for questions. The kitten came with all vaccinations and health certificates.',
      helpful: 18,
      images: [
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      tags: ['Knowledgeable', 'Health Certificates', 'Ongoing Support']
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      authorInitials: 'ER',
      rating: 4,
      date: '2024-11-10',
      verified: true,
      breeder: 'Elite French Bulldogs',
      breederId: 3,
      pet: 'French Bulldog - Buster',
      category: 'dogs',
      review: 'Good experience overall. The puppy was healthy and the breeder provided all necessary documentation. Communication could have been a bit better during the process, but Buster is a wonderful addition to our family. The breeder was knowledgeable about the breed and provided good care instructions.',
      helpful: 12,
      images: [],
      tags: ['Healthy Puppy', 'Documentation Provided', 'Breed Knowledge']
    },
    {
      id: 4,
      author: 'David Wilson',
      authorInitials: 'DW',
      rating: 5,
      date: '2024-10-22',
      verified: true,
      breeder: 'Arctic Dreams',
      breederId: 4,
      pet: 'Siberian Husky - Storm',
      category: 'dogs',
      review: 'Outstanding breeder! The facility tour was impressive and you could see the love and care put into raising these dogs. Storm came home well-socialized and has been the perfect addition to our active family. The breeder provided excellent guidance on training and exercise needs specific to the breed.',
      helpful: 31,
      images: [
        'https://images.pexels.com/photos/605494/pexels-photo-605494.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      tags: ['Facility Tour', 'Well Socialized', 'Training Guidance']
    },
    {
      id: 5,
      author: 'Jennifer Martinez',
      authorInitials: 'JM',
      rating: 5,
      date: '2024-10-08',
      verified: true,
      breeder: 'Royal Persians',
      breederId: 5,
      pet: 'Persian Cat - Princess',
      category: 'cats',
      review: 'Absolutely wonderful experience! The breeder clearly loves their cats and it shows in the quality of the kittens. Princess has the most beautiful coat and gentle temperament. All health testing was done and documented. The breeder even provided a care package with food, toys, and detailed care instructions.',
      helpful: 19,
      images: [
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=200'
      ],
      tags: ['Care Package', 'Health Testing', 'Beautiful Coat']
    },
    {
      id: 6,
      author: 'Robert Taylor',
      authorInitials: 'RT',
      rating: 4,
      date: '2024-09-15',
      verified: true,
      breeder: 'Pacific Labs',
      breederId: 6,
      pet: 'Labrador Retriever - Buddy',
      category: 'dogs',
      review: 'Great experience with Pacific Labs. Buddy is a fantastic dog with an amazing temperament. The breeder was professional and provided all necessary health documentation. The only minor issue was the pickup process took longer than expected, but overall very satisfied with our new family member.',
      helpful: 15,
      images: [],
      tags: ['Great Temperament', 'Professional', 'Health Documentation']
    }
  ];

  const stats = {
    totalReviews: reviews.length,
    averageRating: 4.8,
    verifiedReviews: reviews.filter(r => r.verified).length,
    helpfulVotes: reviews.reduce((sum, r) => sum + r.helpful, 0)
  };

  const ratingDistribution = [
    { stars: 5, count: 4, percentage: 67 },
    { stars: 4, count: 2, percentage: 33 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedRating !== 'all' && review.rating !== parseInt(selectedRating)) return false;
    if (selectedCategory !== 'all' && review.category !== selectedCategory) return false;
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-orange-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">Community Reviews</h1>
          <p className="text-amber-700">Real experiences from verified pet owners</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Stats Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Review Statistics</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">{stats.averageRating}</div>
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(stats.averageRating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm text-amber-700">Based on {stats.totalReviews} reviews</div>
                </div>
                
                <div className="space-y-2">
                  {ratingDistribution.map(({ stars, count, percentage }) => (
                    <div key={stars} className="flex items-center space-x-2 text-sm">
                      <span className="w-8">{stars}★</span>
                      <div className="flex-1 bg-orange-200 rounded-full h-2">
                        <div 
                          className="bg-amber-400 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="w-8 text-amber-700">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">{stats.verifiedReviews}</div>
                  <div className="text-xs text-amber-700">Verified Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{stats.helpfulVotes}</div>
                  <div className="text-xs text-amber-700">Helpful Votes</div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Filters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Rating</label>
                  <select 
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Category</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="dogs">Dogs</option>
                    <option value="cats">Cats</option>
                    <option value="birds">Birds</option>
                    <option value="exotic">Exotic</option>
                  </select>
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedRating('all');
                    setSelectedCategory('all');
                  }}
                  className="w-full bg-orange-100 text-amber-800 py-2 rounded-lg hover:bg-orange-200 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="mb-4 sm:mb-0">
                <p className="text-amber-700">
                  Showing {sortedReviews.length} of {reviews.length} reviews
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {sortedReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {/* Load More */}
            {sortedReviews.length < reviews.length && (
              <div className="text-center mt-8">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Load More Reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  const reviewText = review.review;
  const shouldTruncate = reviewText.length > 300;
  const displayText = shouldTruncate && !showFullReview 
    ? reviewText.substring(0, 300) + '...' 
    : reviewText;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-semibold">{review.authorInitials}</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-amber-900">{review.author}</h4>
              {review.verified && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
            <div className="flex items-center space-x-2 text-sm text-amber-700">
              <Calendar className="w-3 h-3" />
              <span>{new Date(review.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>

      {/* Pet & Breeder Info */}
      <div className="flex items-center space-x-4 mb-4 text-sm">
        <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
          {review.pet}
        </span>
        <Link 
          to={`/breeder/${review.breederId}`}
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          {review.breeder}
        </Link>
      </div>

      {/* Review Text */}
      <div className="mb-4">
        <p className="text-amber-800 leading-relaxed">{displayText}</p>
        {shouldTruncate && (
          <button 
            onClick={() => setShowFullReview(!showFullReview)}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2"
          >
            {showFullReview ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Tags */}
      {review.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {review.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Images */}
      {review.images.length > 0 && (
        <div className="flex space-x-2 mb-4">
          {review.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt="Review" 
              className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-orange-100">
        <button 
          onClick={() => setIsHelpful(!isHelpful)}
          className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-colors ${
            isHelpful 
              ? 'bg-orange-50 text-orange-600' 
              : 'text-amber-700 hover:bg-orange-50'
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm">Helpful ({review.helpful + (isHelpful ? 1 : 0)})</span>
        </button>
        
        <button className="flex items-center space-x-2 text-amber-700 hover:text-orange-600 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Reply</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;