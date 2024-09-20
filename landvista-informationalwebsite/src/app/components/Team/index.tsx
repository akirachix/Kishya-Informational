'use client';

import React, { useState } from 'react';
import Image from 'next/image';


const teamMembers = [
  { name: 'Racheal Aber', quote: "It's God, Music and Code!", image: 'racheal-aber.jpg' },
  { name: 'Mary Vivian. M', quote: "Programmers love dark mode—bugs hate it!", image: 'mary-vivian.jpg' },
  { name: 'Maureen Njeri', quote: "Not antisocial, just coding bliss!", image: 'maureen-njeri.jpg' },
  { name: 'Yvonne Martin', quote: "I'm a software engineer; my only dates are updates!", image: 'yvonne-martin.jpg' },
];

interface TeamMemberProps {
  name: string;
  quote: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, quote, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    id='team'
     className="relative w-full pb-[100%] rounded-3xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`/images/${image}`}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {isHovered && (
        <div className="absolute inset-0 bg-custom-orange bg-opacity-100 flex flex-col items-center justify-center p-4 text-center">
          <p className="font-bold mb-2 text-white text-5xl sm:text-6xl md:text-[55px] lg:text-[35px] hover-name">{name}</p>
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-medium italic mt-2 hover-quote" style={{ lineHeight: '1.6' }}>{quote}</p>
        </div>
      )}
    </div>
  );
};

const TeamSection = () => {
  return (
    <div id="team" className="w-full min-h-screen flex flex-col items-center justify-start py-32 overflow-hidden px-4 lg:px-10">
      <h2 className="heading-main font-bold text-center mb-6 text-teal-600 text-[48px] sm:text-[53px] md:text-[58px] lg:text-[65px] xl:text-[65px]">
        Expertise Behind the Insight:
        <span className="heading-sub block font-light italic mt-2 text-[34px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[48px] text-teal-500">
          Meet the Minds Shaping LANDVISTA
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-[95%] mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="w-full">
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
