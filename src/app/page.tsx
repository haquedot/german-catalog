'use client';

import Header from '@/components/Header';
import Filter from '@/components/Filter';
import Cards from '@/components/Cards';

export default function Home() {
  return (
    <div className="block px-4">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="md:flex gap-10">
        <Filter />
        {/* Cards Section */}
        <div className="md:w-9/12">
          <Cards />
        </div>
      </div>
    </div>
  );
}
