import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-10 bg-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Newsletter</h2>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Your email" className="w-full p-2 mb-4 border rounded" />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;