import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What your peers are saying...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <p className="text-lg italic mb-4">"Both synchronous and asynchronous digital care technologies allow us to scale up digital care models. It’s exciting to see this come to life."</p>
                        <p className="font-bold">Sameer Badlani MD, FACP</p>
                        <p className="text-gray-600">EXECUTIVE VICE PRESIDENT AND CHIEF DIGITAL OFFICER, M HEALTH FAIRVIEW</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <p className="text-lg italic mb-4">"Converge has provided our clinics with a virtual visit platform designed for healthcare which integrates with the electronic health record for an enhanced patient and clinician experience. We are pleased to partner with Amwell to deliver virtual visits to our patients at the moment this care is needed."</p>
                        <p className="font-bold">Deb Muro</p>
                        <p className="text-gray-600">CHIEF INFORMATION OFFICER, EL CAMINO HOSPITAL</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
