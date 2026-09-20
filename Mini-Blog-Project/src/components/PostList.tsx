import Post from './Post'
import { withLogger } from './withLogger'
import type { PostData } from '../types/post'
const posts: PostData[] = [
  { id: 1, title: 'The five-minute habit that makes code reviews kinder', author: 'Maya Chen', preview: 'A small reframing before you leave feedback can turn a stressful review into a useful conversation.', date: '2026-09-20', isNew: true, isFeatured: true },
  { id: 2, title: 'Designing empty states people actually understand', author: 'Noah Williams', preview: 'Empty does not have to mean unclear. Here is a simple checklist for making first-time experiences feel intentional.', date: '2026-09-17', isNew: false },
  { id: 3, title: 'A practical guide to naming things in your UI', author: 'Ava Rodriguez', preview: 'Good names help users move with confidence. Start with the job they came here to do, not the feature you built.', date: '2026-09-12', isNew: false },
]
function PostList() { return <section aria-labelledby="latest-posts"><div className="post-list-heading"><h2 id="latest-posts">Latest from the team</h2><p>Thoughts from our desk to yours.</p></div><div className="posts">{posts.map((post, index) => <Post key={post.id} post={post} index={index} />)}</div></section> }
export default withLogger(PostList)
