import Image from 'next/image';
import SocialIcon from '../common/SocialIcon';
import { socialLinks } from '../common/Data';

export default function Header() {
    return(
        <div>
            <div className="flex items-center justify-between w-full px-12 py-14">
                <div className="flex items-center">
                    <Image
                        src="/cublockchain1.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="hover:opacity-80 transition-opacity"
                    />
                    <div className="ml-4 flex flex-col">
                        <span className="text-xl font-bold text-gray-800">Carleton Blockchain</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-4 mr-12 py-4">
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
            </div>
        </div>
    )
}