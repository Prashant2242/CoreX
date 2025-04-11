import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCards from './ExerciseCards';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] =useState(5);

   // Pagination
   const indexOfLastExercise = currentPage * exercisesPerPage;
   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
   const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
 
   const paginate = (event, value) => {
     setCurrentPage(value);
 
     window.scrollTo({ top: 1800, behavior: 'smooth' });
   };
 
   useEffect(()=>{
      const FetchExerciseData=async ()=>{
        let exerciseData=[];

        if(bodyPart==='all'){
          exerciseData=await fetchData( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        }

        else{
          exerciseData=await fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions); 
        }

        setExercises(exerciseData);
      }
      FetchExerciseData();
   },[bodyPart])
  
 
  return (
    
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
         <ExerciseCards key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 5 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      </Box>

      
  )
}

export default Exercises
