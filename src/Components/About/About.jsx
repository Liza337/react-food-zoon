import React from 'react';

const About = () => {
    return (
        <div>
            <div className="relative bg-base-200 py-12 mb-8">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl text-center font-bold text-white">About Us</h1>
                </div>
            </div>

             <section className='border-4 p-4 bg-green-300 mb-5'>
                <h2 className='text-xl font-bold mb-2'>Welcome to Khabar Bari</h2>
                <p>At Khabar Bari, we are dedicated to bringing you the finest culinary experiences. From our humble beginnings to becoming a beloved name in the community, our journey is driven by a passion for delicious food and exceptional service.</p>
             </section>

                <section className='border-4 p-4 bg-orange-300 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>Our Story</h2>
                    <p>Khabar Bari was founded in 2022 by Azil, who envisioned a place where food lovers could enjoy authentic and innovative dishes. With a commitment to quality and a love for culinary arts, Khabar Bari has grown from a small eatery to a renowned destination for food enthusiasts.</p>
                </section>
      
                <section className='border-4 p-4 bg-purple-300 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>Our Mission</h2>
                    <p>Our mission is to delight our customers with mouth-watering dishes made from the freshest ingredients, while upholding the highest standards of quality and service.</p>
                </section>

                <section className='border-4 p-4 bg-blue-300 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>Our Food Philosophy</h2>
                    <p>At Khabar Bari, we believe that great food starts with great ingredients. We source the freshest produce, highest-quality meats, and finest spices to create dishes that are not only delicious but also nutritious. Our chefs use traditional and modern cooking techniques to bring out the best flavors in every bite.</p>
                </section>
                <section className='border-4 p-4 bg-yellow-200 mb-24'>
                    <h2 className='text-xl font-bold mb-2'>Visit Us</h2>
                    <p>We invite you to visit us and experience the flavors of Khabar Bari. Whether you're dining in or ordering online, we promise an unforgettable culinary journey.</p>
                </section>
        </div>

        
    );
};

export default About;