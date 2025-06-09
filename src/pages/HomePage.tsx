import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Heart, 
  Star, 
  Users, 
  Search,
  Award,
  MessageCircle,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              Find Your Perfect
              <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent"> Companion</span>
            </h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
              The Future of Animal Ownership. Connect with trusted, verified breeders and discover your ideal pet. 
              Read authentic reviews, chat directly with breeders, and find the perfect addition to your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/marketplace"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Browse Pets
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="bg-white text-amber-800 px-8 py-4 rounded-xl font-semibold border border-orange-200 hover:border-orange-300 hover:text-orange-600 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Dogs', count: '2,450+', image: '🐕', color: 'from-orange-400 to-red-500' },
              { name: 'Cats', count: '1,820+', image: '🐱', color: 'from-amber-400 to-orange-500' },
              { name: 'Birds', count: '680+', image: '🦜', color: 'from-yellow-400 to-orange-500' },
              { name: 'Exotic', count: '340+', image: '🦎', color: 'from-orange-400 to-amber-500' }
            ].map((category) => (
              <Link
                key={category.name}
                to="/marketplace"
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all transform hover:scale-105 border border-orange-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {category.image}
                </div>
                <h3 className="font-semibold text-amber-900 mb-1">{category.name}</h3>
                <p className="text-amber-700 text-sm">{category.count} available</p>
              </Link>
            ))}
          </div>

          {/* Featured Pets */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">Featured Pets</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Golden Retriever Puppies',
                  breed: 'Golden Retriever',
                  price: 1200,
                  image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
                  breeder: 'Golden Dreams Kennel',
                  location: 'San Francisco, CA'
                },
                {
                  name: 'Maine Coon Kittens',
                  breed: 'Maine Coon',
                  price: 800,
                  image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
                  breeder: 'Majestic Maine Coons',
                  location: 'Austin, TX'
                },
                {
                  name: 'French Bulldog Puppies',
                  breed: 'French Bulldog',
                  price: 2500,
                  image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
                  breeder: 'Elite French Bulldogs',
                  location: 'Los Angeles, CA'
                }
              ].map((pet, index) => (
                <Link key={index} to={`/animal/${index + 1}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative">
                      <img 
                        src={pet.image} 
                        alt={pet.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-amber-900 mb-1">{pet.name}</h3>
                      <p className="text-amber-700 text-sm mb-2">{pet.breed}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-amber-900">${pet.price.toLocaleString()}</span>
                        <span className="text-sm text-amber-700">{pet.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Why Choose Therion Tequa?
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              We've built the most trusted platform for connecting pet lovers with responsible breeders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-orange-600" />}
              title="Verified Breeders"
              description="All breeders undergo thorough background checks and facility inspections to ensure the highest standards of animal care."
              features={['Background verification', 'Facility inspections', 'Health certifications', 'Ongoing monitoring']}
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-amber-500" />}
              title="Authentic Reviews"
              description="Read genuine reviews from verified pet owners who have purchased from our breeders. No fake reviews, ever."
              features={['Verified purchases only', 'Photo & video reviews', 'Detailed ratings', 'Response from breeders']}
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8 text-orange-600" />}
              title="Direct Communication"
              description="Chat directly with breeders, ask questions, schedule visits, and get to know your future pet before committing."
              features={['Secure messaging', 'Video calls available', 'Visit scheduling', '24/7 support']}
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <StatCard number="15,000+" label="Happy Families" />
            <StatCard number="850+" label="Verified Breeders" />
            <StatCard number="25,000+" label="Successful Matches" />
            <StatCard number="4.9/5" label="Average Rating" />
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-amber-700">
              Real stories from real pet owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'San Francisco, CA',
                rating: 5,
                review: 'Found the perfect Golden Retriever puppy through Therion Tequa. The breeder was amazing and the whole process was seamless. Luna is now 6 months old and brings us so much joy!',
                pet: 'Golden Retriever',
                image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Mike Chen',
                location: 'Austin, TX',
                rating: 5,
                review: 'The verification process gave me confidence in choosing a breeder. Our Maine Coon cat is healthy, well-socialized, and exactly what we were looking for.',
                pet: 'Maine Coon Cat',
                image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Emily Rodriguez',
                location: 'Denver, CO',
                rating: 5,
                review: 'The review system helped me find the best breeder in my area. The communication tools made it easy to ask questions and schedule a visit before deciding.',
                pet: 'French Bulldog',
                image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/reviews"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-amber-700">
              We've implemented comprehensive safety measures to protect both buyers and breeders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-orange-600" />,
                title: 'Identity Verification',
                description: 'All breeders must verify their identity and provide government-issued documentation.'
              },
              {
                icon: <Award className="w-8 h-8 text-amber-600" />,
                title: 'Health Guarantees',
                description: 'Every pet comes with comprehensive health documentation and genetic guarantees.'
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: 'Community Reviews',
                description: 'Read authentic reviews from verified buyers to make informed decisions.'
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-amber-600" />,
                title: '24/7 Support',
                description: 'Our dedicated support team is available around the clock to assist you.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-amber-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Pet?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of happy pet owners who found their companions through Therion Tequa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/marketplace"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              Start Browsing
              <Search className="w-5 h-5 ml-2" />
            </Link>
            <button className="bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-600 transition-all border-2 border-amber-400">
              Become a Breeder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-orange-100">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-amber-900 mb-4">{title}</h3>
    <p className="text-amber-700 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-amber-700">
          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const StatCard = ({ number, label }) => (
  <div>
    <div className="text-3xl md:text-4xl font-bold mb-2">{number}</div>
    <div className="text-orange-100">{label}</div>
  </div>
);

const ReviewCard = ({ name, location, rating, review, pet, image }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-orange-100">
    <div className="flex items-center mb-4">
      <img 
        src={image} 
        alt={pet}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold text-amber-900">{name}</h4>
        <p className="text-amber-700 text-sm">{location}</p>
      </div>
    </div>
    <div className="flex items-center mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
      ))}
      <span className="ml-2 text-sm text-amber-700">{pet}</span>
    </div>
    <p className="text-amber-800 text-sm leading-relaxed">{review}</p>
  </div>
);

export default HomePage;