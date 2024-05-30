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
        <input
          type="text"
          name="text"
          value={searchQuery} // Bind value to searchQuery state
          onChange={handleChange} // Handle input change
          placeholder="Search"
          className="border border-r-0 h-10 w-60 pl-2 font-roboto text-base text-accent ml-2 focus:outline-0"
        />
        {/* Button with onClick handler */}
        <Button
          className="bg-white hover:bg-white text-primary pl-0 justify-start"
          onClick={handleSearch} // Handle search button click
        >
          <Search className="border-b border-t border-r h-10 w-7" />
        </Button>
      </div>
    </div>
  );
}
