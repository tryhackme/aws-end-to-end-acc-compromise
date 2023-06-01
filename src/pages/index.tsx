// pages/index.tsx
import { NextPage } from 'next'
import Link from 'next/link'

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Best Cloud Company Developer Portal!</h1>
      <p className="description">This is the developer portal of our Cloud Company, providing detailed documentation, examples, API reference, and more.</p>
      <Link href="/documentation" passHref legacyBehavior>
        <a className="link">Go to Documentation</a>
      </Link>
    </div>
  )
}

export default HomePage
