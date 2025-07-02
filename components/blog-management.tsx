"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, Save, Eye, Calendar, User, Tag, Search, Filter } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  status: "draft" | "published" | "scheduled"
  publishDate: string
  lastModified: string
}

export function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "The Future of AI in Legal Practice: 2024 Trends and Predictions",
      excerpt: "Explore the latest developments in artificial intelligence and how they're reshaping legal practice.",
      content: "Full article content here...",
      author: "Dr. Sarah Chen",
      category: "AI Trends",
      tags: ["AI", "Legal Technology", "Trends"],
      status: "published",
      publishDate: "2024-01-15",
      lastModified: "2024-01-15",
    },
    {
      id: "2",
      title: "How AI Document Analysis Reduces Legal Costs by 70%",
      excerpt: "A comprehensive analysis of cost savings achieved through AI-powered document review.",
      content: "Full article content here...",
      author: "Michael Rodriguez",
      category: "Cost Analysis",
      tags: ["Cost Reduction", "Document Analysis", "ROI"],
      status: "published",
      publishDate: "2024-01-12",
      lastModified: "2024-01-12",
    },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const handleCreatePost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: "",
      tags: [],
      status: "draft",
      publishDate: new Date().toISOString().split("T")[0],
      lastModified: new Date().toISOString().split("T")[0],
    }
    setEditingPost(newPost)
    setIsEditing(true)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost({ ...post })
    setIsEditing(true)
  }

  const handleSavePost = () => {
    if (!editingPost) return

    if (editingPost.id && posts.find((p) => p.id === editingPost.id)) {
      // Update existing post
      setPosts(posts.map((p) => (p.id === editingPost.id ? editingPost : p)))
    } else {
      // Create new post
      setPosts([...posts, { ...editingPost, id: Date.now().toString() }])
    }

    setIsEditing(false)
    setEditingPost(null)
  }

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  const handlePublishPost = (id: string) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, status: "published" as const, publishDate: new Date().toISOString().split("T")[0] } : p,
      ),
    )
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || post.status === filterStatus
    return matchesSearch && matchesFilter
  })

  if (isEditing && editingPost) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-black">{editingPost.id ? "Edit Post" : "Create New Post"}</h1>
          <div className="flex gap-2">
            <Button onClick={() => setIsEditing(false)} variant="outline" className="monochrome-button-outline">
              Cancel
            </Button>
            <Button onClick={handleSavePost} className="monochrome-button">
              <Save className="w-4 h-4 mr-2" />
              Save Post
            </Button>
          </div>
        </div>

        <Card className="monochrome-card">
          <CardContent className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Title</label>
              <Input
                value={editingPost.title}
                onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                placeholder="Enter post title..."
                className="border-black focus:border-black focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Excerpt</label>
              <Textarea
                value={editingPost.excerpt}
                onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                placeholder="Brief description of the post..."
                rows={3}
                className="border-black focus:border-black focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Content</label>
              <Textarea
                value={editingPost.content}
                onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                placeholder="Write your post content here..."
                rows={15}
                className="border-black focus:border-black focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Author</label>
                <Input
                  value={editingPost.author}
                  onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                  placeholder="Author name..."
                  className="border-black focus:border-black focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Category</label>
                <Input
                  value={editingPost.category}
                  onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                  placeholder="Post category..."
                  className="border-black focus:border-black focus:ring-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Tags (comma-separated)</label>
              <Input
                value={editingPost.tags.join(", ")}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    tags: e.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  })
                }
                placeholder="AI, Legal Technology, Trends..."
                className="border-black focus:border-black focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Status</label>
                <select
                  value={editingPost.status}
                  onChange={(e) =>
                    setEditingPost({
                      ...editingPost,
                      status: e.target.value as "draft" | "published" | "scheduled",
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Publish Date</label>
                <Input
                  type="date"
                  value={editingPost.publishDate}
                  onChange={(e) => setEditingPost({ ...editingPost, publishDate: e.target.value })}
                  className="border-black focus:border-black focus:ring-black"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-black">Blog Management</h1>
        <Button onClick={handleCreatePost} className="monochrome-button">
          <Plus className="w-4 h-4 mr-2" />
          Create New Post
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="monochrome-card mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-black focus:border-black focus:ring-black"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="monochrome-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.status === "published"
                          ? "bg-black text-white"
                          : post.status === "draft"
                            ? "bg-gray-200 text-black"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </span>
                    <span className="text-sm text-gray-600">{post.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{post.tags.join(", ")}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button
                    onClick={() => handleEditPost(post)}
                    variant="outline"
                    size="sm"
                    className="monochrome-button-outline"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>

                  {post.status === "draft" && (
                    <Button onClick={() => handlePublishPost(post.id)} size="sm" className="monochrome-button">
                      <Eye className="w-4 h-4 mr-1" />
                      Publish
                    </Button>
                  )}

                  <Button
                    onClick={() => handleDeletePost(post.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <Card className="monochrome-card">
          <CardContent className="p-12 text-center">
            <h3 className="text-xl font-semibold text-black mb-2">No posts found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || filterStatus !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Create your first blog post to get started."}
            </p>
            {!searchTerm && filterStatus === "all" && (
              <Button onClick={handleCreatePost} className="monochrome-button">
                <Plus className="w-4 h-4 mr-2" />
                Create First Post
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
