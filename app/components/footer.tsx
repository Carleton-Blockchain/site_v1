import { socialLinks } from '@/app/common/Data';
import SocialIcon from '@/app/common/SocialIcon';
import Image from 'next/image';

export default function Footer() {
    return(
        <div>
            <footer className="w-full bg-[#F5F7FC] py-12 px-8">
                {/* Logo Section */}
                <div className="flex items-center justify-center mb-8">
                    <Image
                        src="/cublockchain1.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="hover:opacity-80 transition-opacity"
                    />
                    <span className="ml-3 text-xl font-bold text-gray-800">Carleton Blockchain</span>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="flex gap-4 py-4">
                        {socialLinks.map(({ href, icon, label }) => (
                            <SocialIcon
                                key={label}
                                href={href}
                                icon={icon}
                                label={label}
                                size={30}
                            />
                        ))}
                    </div>
                </div>


                {/* Trademark */}
                <div className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Carleton Blockchain. All rights reserved.
                </div>
            </footer>
        </div>
    )

}