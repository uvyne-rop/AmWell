import React from 'react';

const WhatsHappening = () => {
    const articles = [
        {
            type: 'WEBINARS',
            title: 'Doing Well, Together Ep 1 - Virtual Nursing LMH',
            link: '#',
            imageUrl: 'https://fast.wistia.com/assets/images/zebra/elements/dashed-thumbnail.png' // Replace with actual image URL
        },
        {
            type: 'BLOG',
            title: 'A Q&A on Telehealth for Mental Health with Dr. Lindsay Henderson',
            description: 'We sat down with Lindsay Henderson, PsyD, Amwell’s Director of Psychological Services, to learn how telehealth is helping extend access to mental health treatment.',
            link: '#',
            imageUrl: 'https://content.cdntwrk.com/files/aHViPTEyNzc0MyZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82MmRlOWQyMmRhMWJlLnBuZyZ2ZXJzaW9uPTAwMDAmc2lnPTVmM2ZjZGUxYmY4OTU2MjNiOGUyMDc0MjAxZjc0ZmU3' // Replace with actual image URL
        },
        {
            type: 'RESOURCES',
            title: 'Engaging, Cost-effective, and Connected Care',
            description: 'Read this brochure to learn how Amwell’s Converge™ Virtual Primary Care reimagines the person member experience by creating a seamless health care experience for primary care and behavioral health.',
            link: '#',
            imageUrl: 'https://content.cdntwrk.com/files/aHViPTEyNzc0MyZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82NGRkNjA5YmE3YmUzLmpwZyZ2ZXJzaW9uPTAwMDAmc2lnPTljZWQ4ZGJiOTJmMjljOTAwNmQwZWE2ZWFiNzVmYTE4' // Replace with actual image URL
        },
        {
            type: 'NEWS',
            title: 'Amwell CEO Roy Schoenberg to Speak at Stanford Disability & Telehealth Conference',
            description: 'Amwell CEO to join tech and health leaders from Apple, Stanford Health and others in discussing virtual care solutions that bolster accessibility',
            link: '#',
            imageUrl: 'https://business.amwell.com/globalassets/images/wallpaper/1280x534_d_lower3rd_circletexture_midnightblue.png' // Replace with actual image URL
        }
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center">What's happening at Amwell</h2>
                </div>
                <nav className="flex justify-center mb-8">
                    <a href="#" className="mx-4 text-blue-600 hover:underline">See All</a>
                    <a href="#" className="mx-4 text-blue-600 hover:underline">News</a>
                    <a href="#" className="mx-4 text-blue-600 hover:underline">Webinars</a>
                    <a href="#" className="mx-4 text-blue-600 hover:underline">Blog</a>
                    <a href="#" className="mx-4 text-blue-600 hover:underline">Resources</a>
                </nav>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                            <div className="mb-4">
                                <img src={article.imageUrl} alt={article.type} className="w-full h-32 object-cover rounded" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{article.type}</h3>
                            <h4 className="text-lg font-bold mb-2">{article.title}</h4>
                            {article.description && <p className="text-gray-600 mb-4">{article.description}</p>}
                            <a href={article.link} className="text-blue-600 hover:underline">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatsHappening;
