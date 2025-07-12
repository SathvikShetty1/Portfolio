export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'My First Steps into AWS: Setting Up an EC2 Instance',
    slug: 'first-steps-into-aws',
    publishedAt: '2024-05-10',
    excerpt: 'Join me as I take my first steps into the AWS ecosystem by launching and configuring a simple EC2 instance.',
    content: `
## It All Starts with a Virtual Server

My journey into cloud computing officially began today. The first logical step? Launching a virtual server. In the world of AWS, this means getting to know the Elastic Compute Cloud, or EC2.

The AWS Management Console was a bit intimidating at first, but after some clicking around, I found the "Launch Instance" button. Here are the key steps I followed:

1.  **Choosing an AMI**: I went with the Amazon Linux 2 AMI. It's free-tier eligible and comes with many tools pre-installed.
2.  **Instance Type**: The \`t2.micro\` was the obvious choice for a beginner, and it's also part of the free tier.
3.  **Key Pair**: This was crucial for security. I created a new key pair and downloaded the \`.pem\` file. You have to be careful to keep this file safe!

Here's the command I used to connect via SSH after setting the right permissions for my key file:

\`\`\`bash
chmod 400 my-aws-key.pem
ssh -i "my-aws-key.pem" ec2-user@your-instance-public-dns.com
\`\`\`

It was a magical moment seeing the welcome message from my very own cloud server! The feeling of having this piece of infrastructure at my command, ready to serve applications to the world, is incredible. Next up, I plan to install a simple web server.
    `,
  },
  {
    title: 'Understanding AWS VPCs and Subnets',
    slug: 'understanding-vpcs-and-subnets',
    publishedAt: '2024-05-22',
    excerpt: 'Diving deeper into networking on AWS. A breakdown of Virtual Private Clouds (VPCs), public subnets, and private subnets.',
    content: `
## Building My Own Private Corner of the Cloud

If EC2 instances are the houses, then the Virtual Private Cloud (VPC) is the land and city planning. It's your own logically isolated section of the AWS Cloud where you can launch AWS resources.

I learned that you can't just throw servers out there; you need a network. A VPC provides that. Here's what I've grasped so far:

- **VPC**: A virtual network dedicated to your AWS account.
- **Subnet**: A range of IP addresses in your VPC. Resources like EC2 instances are launched into subnets.
- **Internet Gateway**: A gateway that you attach to your VPC to enable communication between resources in your VPC and the internet.
- **Route Tables**: A set of rules, called routes, that are used to determine where network traffic is directed.

I created a custom VPC with two types of subnets:

**Public Subnet**: This subnet's traffic is routed to an Internet Gateway. Instances here, like a web server, can be accessed from the internet.

**Private Subnet**: This subnet does not have a direct route to the Internet Gateway. Instances here, like a database server, are not directly accessible from the outside world, which is great for security.

Here is a simplified representation of a route table for a public subnet:

\`\`\`json
{
  "Routes": [
    {
      "DestinationCidrBlock": "10.0.0.0/16",
      "GatewayId": "local",
      "State": "active"
    },
    {
      "DestinationCidrBlock": "0.0.0.0/0",
      "GatewayId": "igw-xxxxxxxx",
      "State": "active"
    }
  ]
}
\`\`\`

The \`0.0.0.0/0\` destination represents all internet traffic, and it's being pointed to the Internet Gateway (\`igw-...\`). This is what makes the subnet "public".

Understanding this fundamental networking layer feels like unlocking a new level in my cloud journey. It's the foundation upon which secure and scalable applications are built.
    `,
  },
];
