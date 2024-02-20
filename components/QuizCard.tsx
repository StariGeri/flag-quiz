import { Country } from "@/assets/data";

interface QuizCardProps {
    country: Country;
    isLoading: boolean;
}


const QuizCard = ({ country, isLoading }: QuizCardProps) => {

    const flagLink = `https://flagsapi.com/${country.code}/flat/64.png`;

    return (
        <div className="p-3 my-7 md:my-10">
            {isLoading ?
                <div className="w-64 h-40 bg-slate-950 animate-pulse"></div>
                :
                <img src={flagLink} alt="Which country's flag is this?" className="w-[80px] h-auto" />
            }
        </div>
    );
};

export default QuizCard;