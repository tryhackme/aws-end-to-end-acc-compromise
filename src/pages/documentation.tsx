// pages/documentation.tsx
import { NextPage } from 'next'
import Link from 'next/link'

const DocumentationPage: NextPage = () => {
  return (
    <div className="container">
      <h1 className="title">Best Cloud Company Dev Portal Documentation</h1>

      <h2 className="section-title">Introduction</h2>
      <p className="description">
        The Best Cloud Company Developer Portal serves as a self-service portal for developers. Instead of having developers request access through a traditional ticketing system, the portal streamlines the process, granting immediate access to necessary resources. This approach offers several advantages:
      </p>

      <ul className="no-bullets">
        <li>
          <b>Efficiency:</b><br />
          Developers no longer have to wait for tickets to be processed to get access to resources. This speeds up development time and allows for quicker deployment of services and features.
        </li><br />
        <li>
          <b>Autonomy:</b><br />
          Developers are empowered to access and manage resources based on their needs. This autonomy fosters a sense of ownership, boosting morale and productivity.
        </li><br />
        <li>
          <b>Reduced Administrative Overhead:</b><br />
          By reducing the reliance on a ticketing system, we free up administrative resources to focus on more strategic tasks.
        </li><br />
        <li>
          <b>Transparency:</b><br />
          With a self-service portal, developers have a clear view of available resources, aiding planning and decision making.
        </li><br />
      </ul>

      <h2 className="section-title">APIs and Services</h2>
      <p className="description">
        The Developer Portal provides APIs that allow developers to interact with various AWS services. Here are some of the key services and how they are used:
      </p>
      <ul className="no-bullets">
        <li>
          <b>AWS ECR (Elastic Container Registry):</b><br />
          This is where we store our golden images and customer-specific images. This allows us to maintain consistency and reliability across our deployments.
        </li><br />
        <li>
          <b>AWS ECS (Elastic Container Service):</b><br />
          With ECS on Fargate, we run the images stored in ECR. This means we have a scalable, serverless, and highly available solution for our deployments.
        </li><br />
        <li>
          <b>AWS Lambda:</b><br />
          We use Lambda for short-running automations for data pipelines and other similar activities. This allows us to react quickly and efficiently to changes in data and infrastructure state.
        </li><br />
        <li>
          <b>AWS API Gateway:</b><br />
          Our APIs are exposed through API Gateway, providing a secure, scalable, and managed entry point for our applications.
        </li><br />
      </ul>
      
      <Link href="/" passHref legacyBehavior>
        <a className="link">Go Back Home</a>
      </Link>

      <style jsx>{`
        .no-bullets {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .description {
            text-align: left;
          }
      `}</style>
    </div>
  )
}

export default DocumentationPage