import UserAvatar from "@/components/UserAvatar";
import PostCard from "@/components/PostCard";

export default function ProfilePage() {
  // Mock user data - will be replaced with DB queries
  const mockUser = {
    username: "john_doe",
    bio: "Full-stack developer | DBMS enthusiast | Building cool projects",
    followers: 142,
    following: 89,
    avatar: null
  };

  const mockUserPosts = [
    {
      id: 1,
      username: "john_doe",
      content: "Just deployed my first Next.js app!",
      createdAt: "2024-01-15T10:30:00",
      userAvatar: null
    },
    {
      id: 2,
      username: "john_doe",
      content: "Working on database normalization for our project.",
      createdAt: "2024-01-14T14:20:00",
      userAvatar: null
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start gap-4">
          <UserAvatar username={mockUser.username} size="large" />
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{mockUser.username}</h1>
            <p className="text-gray-600 mt-2">{mockUser.bio}</p>
            
            <div className="flex gap-6 mt-4">
              <div>
                <span className="font-bold text-gray-900">{mockUser.followers}</span>
                <span className="text-gray-600 ml-1">Followers</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">{mockUser.following}</span>
                <span className="text-gray-600 ml-1">Following</span>
              </div>
            </div>

            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* User Posts */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Posts</h2>
        <div className="space-y-4">
          {mockUserPosts.map((post) => (
            <PostCard
              key={post.id}
              username={post.username}
              content={post.content}
              createdAt={post.createdAt}
              userAvatar={post.userAvatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}