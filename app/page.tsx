import PostCard from "@/components/PostCard";

export default function Home() {
  // Mock data - will be replaced with DB queries later
  const mockPosts = [
    {
      id: 1,
      username: "john_doe",
      content: "Just set up our DBMS project! Excited to build this social platform.",
      createdAt: "2024-01-15T10:30:00",
      userAvatar: null
    },
    {
      id: 2,
      username: "jane_smith",
      content: "Learning about database relationships today. Many-to-many is interesting!",
      createdAt: "2024-01-15T09:15:00",
      userAvatar: null
    },
    {
      id: 3,
      username: "dev_user",
      content: "Next.js + Supabase is a powerful combo for this project.",
      createdAt: "2024-01-14T16:45:00",
      userAvatar: null
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Feed</h1>
        <p className="text-gray-600">Posts from users you follow</p>
      </div>

      <div className="space-y-4">
        {mockPosts.map((post) => (
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
  );
}
