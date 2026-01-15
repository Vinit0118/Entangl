"use client";

import { useState } from "react";

export default function CreatePostPage() {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement post creation with DB
    console.log("Post content:", content);
    console.log("Image file:", imageFile);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              What's on your mind?
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Share your thoughts..."
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Add Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Publish Post
            </button>
            <button
              type="button"
              onClick={() => {
                setContent("");
                setImageFile(null);
              }}
              className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}