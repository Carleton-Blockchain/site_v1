import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface TeamMemberProps {
  name: string;
  role: string;
  program: string;
  year: string;
  image: string;
  linkedin: string;
  email: string;
}

export default function TeamMember({ 
  name, 
  role, 
  program, 
  year, 
  image, 
  linkedin, 
  email 
}: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto w-full">
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-[#4A4F8C] font-medium">{role}</p>
      <p className="text-gray-600 text-center mt-2">
        {program} • {year}
      </p>
      <div className="flex gap-4 mt-3">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-[#4A4F8C]"
        >
          <FaLinkedin size={20} />
        </a>
        <a 
          href={`mailto:${email}`} 
          className="text-gray-600 hover:text-[#4A4F8C]"
        >
          <MdEmail size={20} />
        </a>
      </div>
    </div>
  );
}