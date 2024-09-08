import { useState, useCallback } from 'react'; 

// Material UI Components
import Box from '@mui/material/Box';              // Wrapper component to create flexbox or layout boxes
import Button from '@mui/material/Button';        // Button component
import Grid from '@mui/material/Unstable_Grid2';  // Grid component for layout (Unstable is newer version)
import Typography from '@mui/material/Typography'; // Typography for text and headers
import Pagination from '@mui/material/Pagination'; // Pagination component

// Mock data and Layout
import { _posts } from 'src/_mock';              // _posts is mock data representing blog posts
import { DashboardContent } from 'src/layouts/dashboard';  // Custom dashboard layout component

// Icons and Other Components
import { Iconify } from 'src/components/iconify';        // Icon component for handling various icon packs
import { PostItem, PostItemProps } from '../post-item';  // Custom component for rendering a post item (blog post)
import { PostSort } from '../post-sort';                 // Dropdown to sort posts (e.g. latest, popular, etc.)
import { PostSearch } from '../post-search';             // Search bar to filter posts

// ----------------------------------------------------------------------

// Mock data or data fetched from an API
const mockPosts: PostItemProps[] = [
  { id: '1', title: 'Binance', coverUrl: '/exchange-icons/binance.svg', postedAt: null },
  { id: '2', title: 'Coinbase', coverUrl: '/exchange-icons/coinbase.svg', postedAt: null },
  { id: '3', title: 'Kraken', coverUrl: '/exchange-icons/kraken.svg', postedAt: null },
  // Add more exchanges
];

// The main functional component of the page
export function ConnectView() {
  
  const [selectedIds, setSelectedIds] = useState<string[]>([]);  // Track selected posts by ID

  // Toggle selection for a post (adds/removes its ID to/from the selectedIds array)
  const handleSelect = (id: string) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)  // Deselect if already selected
        : [...prevSelected, id]  // Add to selection if not already selected
    );
  };  // <---- Closing brace was missing here

  // React state to keep track of the sorting method selected (default is 'latest')
  const [sortBy, setSortBy] = useState('latest');

  // Function to handle sorting changes using useCallback hook (memoized for performance optimization)
  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  return (
    // The dashboard content wraps everything inside a styled container
    <DashboardContent>

      {/* Top Section: Title and 'Add Data' Button */}
      <Box display="flex" alignItems="center" mb={5}>
        {/* Title */}
        <Typography variant="h4" flexGrow={1}>
          My Data
        </Typography>

        {/* Add Data Button */}
        <Button
          variant="contained"          // Filled button style
          color="inherit"              // Inherited color (neutral color)
          startIcon={<Iconify icon="mingcute:add-line" />} // Adds an 'add' icon on the left side of the button
        >
          Add Data                     {/* Button Label */}
        </Button>
      </Box>

      {/* Search and Sorting Section */}
      <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        
        {/* Search Bar */}
        <PostSearch posts={mockPosts} />  {/* Search bar for filtering posts */}

        {/* Sort Dropdown */}
        <PostSort
          sortBy={sortBy}              // The currently selected sorting method
          onSort={handleSort}          // Callback function to update sorting method
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}                           // Sorting options: Latest, Popular, Oldest
        />
      </Box>

      {/* Post Grid Section */}
      <Grid container spacing={2}>
        {/* Mapping over the mockPosts data and rendering each post in a grid */}
        {mockPosts.map((post, index) => {
          const isSelected = selectedIds.includes(post.id);

          return (
            // Grid for each post, responsive behavior controlled by xs (mobile), sm (tablet), and md (desktop)
            <Grid key={post.id} xs={12} sm={4} md={2}> {/* Now 6 boxes per row on medium screens */}

              <PostItem 
                post={post}                           // Pass post data to PostItem component
                selected={isSelected}                 // Indicate if the post is selected
                onClick={() => handleSelect(post.id)} // Toggle selection on click
              />
            </Grid>
          );
        })}
      </Grid>

      {/* Pagination Section */}
      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
      {/* Pagination to navigate between pages, with 10 total pages, primary color styling, margin on top */}
    </DashboardContent>
  );
}
