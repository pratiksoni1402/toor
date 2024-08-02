'use client'
import { useState } from 'react'; // Import useState hook
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  // Define state for input value
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for input change
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handler for search button click
  const handleSearch = () => {
    // Perform search action with searchQuery state
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="search-bar">
      <div className="content-wrapper text-primary flex items-center">
        {/* Input field with value and onChange handler */}
        <Button
          className="bg-white hover:bg-white rounded-none text-primary pl-0 justify-start border-b ml-0"
          onClick={handleSearch} // Handle search button click
        >
          <Search className=" h-10 w-7"/>
        </Button>
        <input
          type="text"
          name="text"
          value={searchQuery} // Bind value to searchQuery state
          onChange={handleChange} // Handle input change
          placeholder="Search"
          className="border border-r-0 border-t-0 border-l-0 h-10 w-60 font-roboto text-base text-accent focus:outline-0"
        />
        {/* Button with onClick handler */}
      </div>
    </div>
  );
}
