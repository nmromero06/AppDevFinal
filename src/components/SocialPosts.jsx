export default function SocialPosts() {
  const posts = [
    { id: 1, image: "/RB1.png", platform: "Instagram" },
    { id: 2, image: "/RB2.png", platform: "Facebook" },
    { id: 3, image: "/RB3.png", platform: "X" },
    { id: 4, image: "/RB4.png", platform: "LinkedIn" }
  ]

  return (
    <section className="social-posts px-6 py-12">
      <h2 className="section-title text-left">Social Media Highlights</h2>
      <p className="section-subtitle text-left">Latest creative content from my social channels</p>
       <div className="grid grid-cols-2 gap-4 md:grid-cols-4 auto-rows-fr">
        {posts.map(post => (
          <div key={post.id} className="social-card">
            <img src={post.image} alt={`Social post ${post.id}`} />
            <div className="social-label">{post.platform}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
