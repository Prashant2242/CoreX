import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from './BodyPart';
import ExerciseCards from './ExerciseCards'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Custom Left Arrow Component
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext); // Get scrollPrev function from context
  return (
    <Typography
      onClick={() => scrollPrev()} // Scroll to the previous item when clicked
      sx={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '50%',
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" width="30" />
    </Typography>
  );
};

// Custom Right Arrow Component
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext); // Get scrollNext function from context
  return (
    <Typography
      onClick={() => scrollNext()} // Scroll to the next item when clicked
      sx={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '50%',
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" width="30" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <Box sx={{ position: 'relative' }}> {/* Make the container relative for positioning the arrows */}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
            sx={{
              minWidth: '200px', 
              cursor: 'pointer', 
            }}
          >
            {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCards exercise={item}/>}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
