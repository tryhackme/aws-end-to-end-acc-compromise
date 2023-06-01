// pages/documentation.tsx
import { NextPage } from 'next'
import Link from 'next/link'

const DocumentationPage: NextPage = () => {
  return (
    <div className="container">
      <h1 className="title">Developer Portal Documentation</h1>

      <h2 className="section-title">Introduction</h2>
      <p className="description">
        The Best Cloud Company Developer Portal serves as a self-service portal for developers. Instead of having developers request access through a traditional ticketing system, the portal streamlines the process, granting immediate access to necessary resources. This approach offers several advantages:
      </p>

      <ul>
        <li>
          <b>Efficiency:</b> Developers no longer have to wait for tickets to be processed to get access to resources. This speeds up development time and allows for quicker deployment of services and features.
        </li>
        <li>
          <b>Autonomy:</b> Developers are empowered to access and manage resources based on their needs. This autonomy fosters a sense of ownership, boosting morale and productivity.
        </li>
        <li>
          <b>Reduced Administrative Overhead:</b> By reducing the reliance on a ticketing system, we free up administrative resources to focus on more strategic tasks. 
        </li>
        <li>
          <b>Transparency:</b> With a self-service portal, developers have a clear view of available resources, aiding planning and decision making.
        </li>
      </ul>

      <h2 className="section-title">APIs and Services</h2>
      <p className="description">
        The Developer Portal provides APIs that allow developers to interact with various AWS services. Here are some of the key services and how they are used:
      </p>
      <ul>
        <li>
          <b>AWS ECR (Elastic Container Registry):</b> This is where we store our golden images and customer-specific images. This allows us to maintain consistency and reliability across our deployments.
        </li>
        <li>
          <b>AWS ECS (Elastic Container Service):</b> With ECS on Fargate, we run the images stored in ECR. This means we have a scalable, serverless, and highly available solution for our deployments.
        </li>
        <li>
          <b>AWS Lambda:</b> We use Lambda for short-running automations for data pipelines and other similar activities. This allows us to react quickly and efficiently to changes in data and infrastructure state.
        </li>
        <li>
          <b>AWS API Gateway:</b> Our APIs are exposed through API Gateway, providing a secure, scalable, and managed entry point for our applications.
        </li>
      </ul>
      
      <Link href="/" passHref legacyBehavior>
        <a className="link">Go Back Home</a>
      </Link>
    </div>
  )
}

export default DocumentationPage
