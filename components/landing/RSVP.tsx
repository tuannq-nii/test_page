import React, { useState } from 'react';

const RSVP: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formState.name}! Your RSVP has been received.`);
    setFormState({ name: '', email: '', guests: 1, attending: 'yes', message: '' });
  };

  return (
    <section id="rsvp" className="py-24 bg-rose-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="text-rose-500 font-bold tracking-wider uppercase text-xs">Are You Coming?</span>
            <h2 className="font-serif text-4xl text-gray-900 mt-2">RSVP</h2>
            <p className="text-gray-500 mt-2">Please respond by September 26, 2024</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                <select 
                  name="guests"
                  value={formState.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Will you attend?</label>
                <select 
                  name="attending"
                  value={formState.attending}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                >
                  <option value="yes">Joyfully Accepts</option>
                  <option value="no">Regretfully Declines</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions / Message</label>
              <textarea 
                rows={3}
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Any allergies or special requests?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-rose-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-rose-600 transition-all transform hover:scale-[1.02]"
            >
              Send RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;