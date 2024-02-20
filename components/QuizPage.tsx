'use client';

import QuizCard from "./QuizCard";
import { useGameLogic } from "@/hooks/useGameLogic";


const QuizPage = () => {

    const {
        currentCountry,
        isCountryLoading,
        guess,
        handleInputChange,
        handleCheck,
        handleNext,
        handleReset,
        isChecked,
        response,
        responseType,
        score,
        totalQuestions
    } = useGameLogic();
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-2">
            <h1 className="font-bold text-white text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 lg:mb-10">Which countrys flag is this?</h1>
            <p className="text-white font-semibold">Score: {score} / {totalQuestions}</p>
            <QuizCard country={currentCountry} isLoading={isCountryLoading} />
            <div className="h-12">
                {isChecked && <p className="text-white"> {currentCountry.name[0]} </p>}
            </div>
            <input
                type="text"
                className="text-white border  bg-transparent border-white p-3 rounded-lg w-full max-w-[400px] mt-4 md:mt-8 lg:mt-10"
                placeholder="Take your guess.."
                value={guess}
                onChange={handleInputChange}
            />
            <div className="w-full flex items-center justify-center gap-4">
                <button className="text-white border border-[#ff0054] px-8 py-2 rounded-lg mt-4 text-lg" onClick={handleReset}>Reset</button>
                {!isChecked ?
                    <button className="bg-[#14B8A6] text-white px-8 py-2 rounded-lg mt-4 text-lg" onClick={handleCheck}>Check</button>
                    :
                    <button className="bg-[#2F71F0] text-white px-8 py-2 rounded-lg mt-4 text-lg" onClick={handleNext}>Next</button>
                }
            </div>
            <div className="w-fit h-12">
                {response !== '' && isChecked &&
                    <p className={`${responseType === 1 ? 'text-[#14B8A6]' : 'text-[#ff0054]'} font-semibold mt-4 md:mt-8 lg:mt-10`}>{response}</p>
                }
            </div>
        </div>
    );
}

export default QuizPage;
