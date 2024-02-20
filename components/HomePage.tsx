"use client";

import Link from "next/link";
import { WavyBackground } from "./ui/wave";

const HomePage = () => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-2 md:px-4">
            <WavyBackground className="max-w-4xl mx-auto">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">
                        Literally the best  <span className="font-extrabold">FlagQuiz</span>  ever
                    </p>
                    <p className="text-white z-10 mt-4">Its not just me, try it for yourself</p>
                    <Link href="/quiz" className="bg-[#2F71F0] text-white px-5 py-2 rounded-lg mt-4">
                        Play
                    </Link>
                </div>
            </WavyBackground>
            <p className="w-full text-center text-white font-medium text-sm z-10 mb-2">
                Made by the one and only <span className="text-[#FDE047] opacity-70">StariGeri</span>
            </p>
        </div>
    );

}

export default HomePage;