import { countries } from '@/assets/data';
import { correctResponses, incorrectResponses } from '@/assets/data';
import { useEffect, useState } from 'react';

export const useGameLogic = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [guess, setGuess] = useState('');
  const [currentCountry, setCurrentCountry] = useState({ name: [''], code: '' });
  const [isCountryLoading, setIsCountryLoading] = useState(false);
  const [response, setResponse] = useState(''); // Response to the guess
  const [responseType, setResponseType] = useState(0);
  const [score, setScore] = useState(0); // The score of the user
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [error, setError] = useState(''); // if you want to go to the next without guessing

  // Function to handle the input change
  const handleInputChange = (e: any) => {
    setGuess(e.target.value);
  };

  // Function to choose a random country
  const chooseRandomCountry = () => {
    setIsCountryLoading(true);
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCurrentCountry(countries[randomIndex]);
    setIsCountryLoading(false);
    setResponse('');
  };

  useEffect(() => {
    chooseRandomCountry(); // Choose a random country when the component mounts
  }, []);

  // Function to handle checking the guess
  const handleCheck = () => {
    setIsChecked(true);
    // Convert the guess and country names to lowercase for case-insensitive comparison
    const lowerCaseGuess = guess.toLowerCase().trimEnd();
    const lowerCaseCountryNames = currentCountry.name.map((name) => name.toLowerCase());
    if (guess === '') {
      setError('Please enter a guess');
      return;
    }
    // Check if the guess is included in the lowercase country names
    if (lowerCaseCountryNames.includes(lowerCaseGuess)) {
      setResponse(correctResponses[Math.floor(Math.random() * correctResponses.length)]);
      setResponseType(1);
      setScore(score + 1);
      setError('');
    } else {
      setResponse(incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)]);
      setResponseType(0);
      setError('');
    }
    setTotalQuestions(totalQuestions + 1);
  };

  // Function to handle moving to the next country
  const handleNext = () => {
    chooseRandomCountry();
    setGuess('');
    setIsChecked(false);
    setResponseType(0);
  };

  const handleReset = () => {
    setScore(0);
    setTotalQuestions(0);
    chooseRandomCountry();
    setGuess('');
    setIsChecked(false);
    setResponseType(0);
  };

  return { isChecked, guess, currentCountry, isCountryLoading, response, score, totalQuestions, handleInputChange, handleCheck, handleNext, handleReset, responseType, error };
};
