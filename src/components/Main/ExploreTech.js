import React from 'react';

const ExploreTech = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore our digital care enablement technology</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="https://business.amwell.com/siteassets/images---new/content-cards/580-x-250_content-cards_the-amwell-converge-platform---option-1.png?format=webp"
              alt="Provider using a hybrid care platform, Converge"
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">INVEST IN YOUR FUTURE</h3>
            <p className="mb-2">Amwell Converge™ platform</p>
            <p className="mb-4">Through the Converge platform, you can integrate with your existing technology investment to centralize and simplify digital care delivery.</p>
            <a href="#" className="text-blue-700 hover:underline">Learn more</a>
          </div>

          {/* Second Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="https://business.amwell.com/siteassets/images---new/content-cards/580-x-250_content-cards_hybrid-care-solutions-for-providers---option-1.png?format=webp" 
              alt="Provider virtually talking to a patient"
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">SUPPORT PATIENTS ACROSS THE JOURNEY</h3>
            <p className="mb-2">Hybrid care solutions for providers</p>
            <p className="mb-4">Bring your hybrid care strategies to life through a modern platform that interweaves the benefits of digital care into the in-person, automated, and virtual care settings.</p>
            <a href="#" className="text-blue-700 hover:underline">Learn more</a>
          </div>

          {/* Third Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="https://business.amwell.com/siteassets/images---new/content-cards/580-x-250_content-cards_hybrid-care-solutions-for-payer---option-1.png?format=webp" 
              alt="Patient wearing device, on her laptop talking to a provider"
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">CONNECT YOUR DIGITAL CARE ECOSYSTEM</h3>
            <p className="mb-2">Hybrid care solutions for payers</p>
            <p className="mb-4">Create a member-centric healthcare journey by bringing your hybrid care solutions together to create one single, integrated experience.</p>
            <a href="#" className="text-blue-700 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreTech;
