import { memo } from 'react'
import type { PostData } from '../types/post'
interface PostProps { post: PostData; index: number }
function Post({ post, index }: PostProps) { return <article className={`post-card${post.isFeatured ? ' featured' : ''}`}><span className="post-number">0{index + 1}</span><div><h3 className="post-title">{post.title}</h3><p className="post-preview">{post.preview}</p></div><div className="post-meta"><span className="post-author">{post.author}</span><time dateTime={post.date}>{new Date(`${post.date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>{post.isNew && <span className="new-badge">NEW</span>}</div></article> }
export default memo(Post)
