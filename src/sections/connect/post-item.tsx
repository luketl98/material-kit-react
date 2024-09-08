import { useState } from 'react';
import type { CardProps } from '@mui/material/Card';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

// PostItemProps: Defines the type for post properties used in the component
export type PostItemProps = {
  id: string;
  title: string; 
  coverUrl: string;  // The icon or image URL for the exchange/coin
  postedAt: string | number | null; 
};

// PostItem Component: Renders individual items such as coins or exchanges
export function PostItem({
  sx,
  post,
  selected,
  onClick,  // Pass the onClick handler from the parent component
  ...other
}: CardProps & {
  post: PostItemProps;
  selected: boolean; // Indicates if the box is selected
  onClick: () => void; // Handles box click
}) {

  // Renders the icon (background picture)
  const renderIcon = (
    <Box
      component="img"
      alt={post.title}
      src={post.coverUrl}
      sx={{
        width: 50,
        height: 50,
        margin: '0 auto',
        objectFit: 'contain',
      }}
    />
  );

  // Renders the title and truncates long titles with ellipsis
  const renderTitle = (
    <Typography
      variant="subtitle2"
      align="center"
      noWrap
      sx={{
        marginTop: 1,
        color: 'text.primary',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {post.title}
    </Typography>
  );

  return (
    <Card
      sx={{
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: selected ? 'green' : 'common.white',  // Turns green when selected
        cursor: 'pointer',  // Shows that the box is clickable
        ...sx,
      }}
      onClick={onClick}  // Handles the click event
      {...other}
    >
      {/* The container for icon and title */}
      <Box
        sx={{
          padding: 2,
          textAlign: 'center',
          borderRadius: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: 'none',
        }}
      >
        {renderIcon}   {/* Display the exchange/coin icon */}
        {renderTitle}  {/* Display the title underneath the icon */}
      </Box>
    </Card>
  );
}
