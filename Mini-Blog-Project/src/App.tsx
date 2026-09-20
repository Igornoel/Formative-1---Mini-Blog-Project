import { Header } from './components/Header'
import PostList from './components/PostList'
import './App.css'

function App() {
  return (
    <div className="app-shell" id="top">
      <Header />
      <main className="main-content">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">THE DEV INSIGHTS JOURNAL</p>
          <h1 id="page-title">Small ideas.<br />Lasting impact.</h1>
          <p className="intro-copy">Field notes, practical tips, and thoughtful updates from the people building the web.</p>
        </section>
        <PostList />
      </main>
      <footer className="site-footer"><span>© 2026 Dev Insights</span><span>Made for curious builders</span></footer>
    </div>
  )
}

export default App
