import { SocialLinkProps } from '../../types';

export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition-all duration-200 hover:scale-110 bg-white p-3 rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-gray-900"
    >
      {icon}
    </a>
  );
}