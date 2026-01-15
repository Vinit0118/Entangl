interface UserAvatarProps {
  username: string;
  size?: "small" | "medium" | "large";
}

export default function UserAvatar({ username, size = "medium" }: UserAvatarProps) {
  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-base",
    large: "w-20 h-20 text-2xl"
  };

  // Get first letter of username for placeholder
  const initial = username.charAt(0).toUpperCase();

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initial}
    </div>
  );
}