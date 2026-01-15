import UserAvatar from "./UserAvatar";

interface PostCardProps {
  username: string;
  content: string;
  createdAt: string;
  userAvatar: string | null;
}

export default function PostCard({ username, content, createdAt, userAvatar }: PostCardProps) {
  // Format date
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-3">
        <UserAvatar username={username} size="medium" />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-900">{username}</span>
            <span className="text-gray-500 text-sm">·</span>
            <span className="text-gray-500 text-sm">{formattedDate}</span>
          </div>
          
          <p className="text-gray-800 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}