'use client';
import { useState } from 'react';
import { useRef } from 'react';

export default function Page() {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState({ min: 0, max: 5000 });
  const [days, setDays] = useState(1);

  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    if (destination.trim()) {
      section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (budget.min < budget.max) {
      section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDaysSubmit = (e) => {
    e.preventDefault();
    if (days > 0) {
      section4Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section with Destination Input */}
      <section className="h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-6xl font-bold mb-8 tracking-wider">VOYAGEHACK</h1>
        <form onSubmit={handleDestinationSubmit} className="w-full max-w-md px-4">
          <div className="flex flex-col gap-4">
            <input 
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </section>

      {/* Budget Section */}
      <section ref={section2Ref} className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-4xl font-semibold text-center mb-8">Set Your Budget</h2>
          <form onSubmit={handleBudgetSubmit} className="flex flex-col gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Minimum Budget ($)</label>
                <input
                  type="number"
                  value={budget.min}
                  onChange={(e) => setBudget({ ...budget, min: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Maximum Budget ($)</label>
                <input
                  type="number"
                  value={budget.max}
                  onChange={(e) => setBudget({ ...budget, max: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </form>
        </div>
      </section>

      {/* Days Section */}
      <section ref={section3Ref} className="h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-4xl font-semibold text-center mb-8">How Long Is Your Trip?</h2>
          <form onSubmit={handleDaysSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Number of Days</label>
              <input
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </form>
        </div>
      </section>

      {/* Summary Section */}
      <section ref={section4Ref} className="min-h-[400px] bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-4xl font-semibold text-center mb-8">Trip Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Destination</h3>
              <p className="text-lg">{destination}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Budget Range</h3>
              <p className="text-lg">${budget.min} - ${budget.max}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Duration</h3>
              <p className="text-lg">{days} days</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}