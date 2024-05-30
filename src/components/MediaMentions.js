import React from 'react';

const MediaMentions = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Media mentions</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="https://business.amwell.com/siteassets/images---new/content-cards/580-x-250_government_content-card_happy-military-family-on-tablet.png?format=webp"
              alt="Provider using a hybrid care platform, Converge"
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">MEDIA ARTICLE</h3>
            <p className="mb-2">The Defense Health Agency is 
pioneering a transition to 
telehealth</p>
            <p className="mb-4">Collaborating with hybrid care 
enablement company Amwell, the 
initiative aims for a comprehensive rollout 
of virtual care services across military 
medical facilities starting in October..</p>
            <a href="#" className="text-blue-700 hover:underline">Learn more</a>
          </div>

          {/* Second Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="https://business.amwell.com/siteassets/images---new/content-cards/580-x-250_about-us_work-at-aw---option-1.png" 
              alt="Provider virtually talking to a patient"
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">MEDIA ARTICLE</h3>
            <p className="mb-2">Hybrid care solutions for providers</p>
            <p className="mb-4">An OSF HealthCare leader discusses how 
telehealth services can help extend 
mental assessments to patients 
seeking behavioral healthcare in EDs.</p>
            <a href="#" className="text-blue-700 hover:underline">Learn more</a>
          </div>

          {/* Third Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="https://business.amwell.com/siteassets/images---new/content-cards/580-x-250_provider-solutions_content-cards_automated-care-programs.png?format=webp" 
              alt="Patient wearing device, on her laptop talking to a provider"
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">MEDIA ARTICLE</h3>
            <p className="mb-2">Solving psychiatrist 
shortages amid growing 
mental health demands</p>
            <p className="mb-4">OSF HealthCare looked for innovative 
solutions to solve a need for psychiatric 
evaluations of patients coming to its 
hospital emergency departments.</p>
            <a href="#" className="text-blue-700 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaMentions;
