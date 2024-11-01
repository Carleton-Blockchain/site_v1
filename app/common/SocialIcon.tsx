interface SocialIconProps {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  size?: number;
}

export default function SocialIcon({ href, icon: Icon, label, size = 24 }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-[#4A4F8C] transition-colors"
      aria-label={label}
    >
      <Icon size={size} />
    </a>
  );
}