'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { desc } from 'framer-motion/m';

const getImgSrc = (name: string) => encodeURI(`/${name}`);
interface TechnicalStep {
  title: string;
  desc: string;
  subPoints?: string[];
}
interface PhaseItem {
  name: string;
  tools: string;
  content?: React.ReactNode;
  desc?: string;
  detailedStepsTitle?: string;       // العنوان: "Detailed Technical Steps:"
  detailedSteps?: TechnicalStep[];   // قائمة الخطوات المرقمة
  howDataIsRead?: string;         // مثل مرحلة 4 ومرحلة 5
  sqlQuery?: string;              // لكود الـ SQL في مرحلة 4
  sqlQueryIntro?: string;         // تمهيد كود SQL
  thePowerOfVisualization?: string;// مثل مرحلة 5
  realValue?: string;             // مثل مرحلة 1 و3 و4
  realValueTitle?: string;        // عنوان القيمة (Why Serverless أو Cost & Speed)
  keyActions?: string[];          // مصفوفة تدعم أكثر من Key Action
  imagePath?: string;
  figureCaption?: string;
}

interface CloudProject {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  techStack: string[];
  summary: string;             // النص الخارجي (PROJECT OBJECTIVE)
  detailedOverview: string;    // النص الداخلي في التوثيق (PROJECT OVERVIEW)
  whyAws: string;
  phases: PhaseItem[];
  keyTakeaway: string;
  coverImage: string;
}

const cloudProjects: CloudProject[] = [
  {
    id: 'seo-analytics-pipeline',
    tag: 'SERVERLESS STREAMING & ETL',
    title: 'Real-Time SEO Analytics Data Pipeline',
    subtitle: '🚀 End-to-End Real-Time SEO Analytics Pipeline: A Serverless Approach',
    techStack: ['AWS Kinesis Firehose', 'Amazon S3', 'AWS Glue', 'Amazon Athena', 'Amazon QuickSight'],
    summary:
      "Designed and deployed a serverless data pipeline to ingest, store, and analyze real-time SEO website traffic. This solution automates the journey of raw streaming data into actionable insights through an interactive dashboard, significantly reducing operational overhead by leveraging AWS's serverless architecture.",
    detailedOverview:
      "This project demonstrates a fully serverless, event-driven data architecture designed to ingest and process high-volume SEO streaming data. By leveraging AWS managed services, I built a scalable system that transforms raw web traffic into actionable business insights. The solution eliminates server management overhead while ensuring high availability and cost-optimization through a pay-as-you-go model.",
    whyAws:
      'Standard Google Analytics and Search Console reports have processing delays. By leveraging AWS Kinesis Firehose and S3 Data Lakes, streaming traffic data is automatically partitioned, cataloged via AWS Glue, and queried via serverless SQL (Athena) without running permanent expensive servers.',
    phases: [
      {
        name: 'Phase 1: Real-Time Data Ingestion',
        tools: 'Amazon Kinesis Data Firehose',
        desc: 'To handle live data, I configured a Kinesis Firehose delivery stream. This acts as the "smart pump" and the primary entry point for all incoming SEO events. Firehose automatically receives, organizes, and compresses the streaming data before delivering it to its final destination.',
        realValue: 'The true advantage of using Firehose is that it is a fully managed, serverless solution. I didn\'t need to write custom code or manage complex server infrastructures to ingest data; Firehose handles the entire ingestion lifecycle automatically and scales seamlessly with traffic.',
        keyActions: ['Configured buffering hints to balance data latency and storage cost-effectiveness.'],
        imagePath: 'pipeline-phase1.png',
        figureCaption: 'Figure 1: Real-time monitoring dashboard for the SEO data stream, showing active ingestion metrics.'
      },
      {
        name: 'Phase 2: Building the Data Lake',
        tools: 'Amazon S3',
        desc: 'Amazon S3 serves as the central Data Lake for this pipeline. I configured the storage to be highly organized and optimized for performance. The incoming data is automatically partitioned by date (Year/Month/Day).',
        keyActions: ['Implemented a structured folder hierarchy for "Raw Data" to maintain data integrity.'],
        imagePath: 'pipeline-phase2.png',
        figureCaption: 'Figure 2: Automated date-based partitioning (Year/Month/Day) within the S3 Data Lake for optimized query performance and cost-efficiency.'
      },
      {
        name: 'Phase 3: Schema Discovery & Cataloging',
        tools: 'AWS Glue Crawler',
        desc: 'After storing the raw data in S3, I needed a way to translate these files into a structured format. I deployed an AWS Glue Crawler to automate this process. The crawler effectively "scanned" the S3 bucket, identified the data types (Schema), and automatically created a metadata table in the AWS Glue Data Catalog.',
        realValue: 'Instead of manually defining columns and data types, AWS Glue handles the discovery process. By clicking "Run crawler", the system detected our SEO fields (timestamp, country, clicks, etc.) and prepared them for instant analysis. This serverless approach ensures that even if our data structure changes slightly in the future, the Crawler can adapt and update the catalog without manual intervention.',
        keyActions: [
  'Executed a successful crawler run that mapped raw CSV objects into a relational table structure within the seo_data_pipeline_db.',
  'Created a centralized Data Catalog that maps raw files into a structured SQL table.'
],
        imagePath: 'pipeline-phase3.png',
        figureCaption: 'Figure 3: Successful execution of the AWS Glue Crawler, showing the "Completed" status after discovering data schema.'
      },
      {
        name: 'Phase 4: Serverless SQL Analytics',
        tools: 'Amazon Athena',
        desc: 'With the data cataloged by AWS Glue, I used Amazon Athena to perform this analysis using standard SQL. Athena is a serverless query service that allowed me to view and analyze the SEO traffic data directly from the S3 Data Lake without the need to manage any database servers.',
        howDataIsRead:
          'The magic happens through the AWS Glue Data Catalog. When I run a query in Athena, it looks at the table definition (created in Phase 3), understands where the files are located in S3 and what their format is (CSV), and then "projects" that data as a structured table. This allowed me to select the seo_final_db database and run queries against the raw_data table immediately.',
        sqlQueryIntro: 'To validate the pipeline, I executed the following query to retrieve all records:',
        sqlQuery: 'SELECT * FROM "seo_final_db"."raw_data" limit 10;',
        realValueTitle: 'The Real Value (Cost & Speed):',
        realValue:
          'The real advantage of Athena is its "Pay-per-query" model. It only charges for the amount of data scanned. Because I partitioned the data earlier, any future complex queries will be extremely fast and cost-effective, making it the perfect tool for big data analytics.',
        imagePath: 'pipeline-phase4.png',
        figureCaption: 'Figure 4: Using Amazon Athena to execute SQL queries on the SEO dataset. The results window shows the successfully retrieved records (Country, Clicks, Device, etc.) directly from the S3 Data Lake.'
      },

      // Phase 5
      {
        name: 'Phase 5: Business Intelligence & Visualization',
        tools: 'Amazon QuickSight',
        desc: 'The final stage of the pipeline is data visualization. I used Amazon QuickSight to connect directly to the Athena dataset. This step is where raw numbers are transformed into interactive, easy-to-understand visual insights.',
        howDataIsRead:
          'QuickSight connects to Amazon Athena as its data source. It reads the table schema from the Glue Data Catalog and executes SQL queries in the background to fetch the latest data from the S3 Data Lake. I configured the dataset using Direct Query mode to ensure that the dashboard reflects the most current information available in the storage.',
        thePowerOfVisualization:
          'The true strength of this setup is its flexibility. I can create any type of visual representation—from Pie Charts and Bar Charts to complex Heatmaps—to analyze the data from any angle. Whether it\'s tracking clicks by country, monitoring device distribution, or identifying peak traffic times, QuickSight allows for deep exploratory analysis with just a few clicks.',
        keyActions: [
          'Designed an interactive dashboard that provides stakeholders with a 360-degree view of SEO performance, enabling data-driven decision-making.'
        ],
        imagePath: 'pipeline-phase5.png',
        figureCaption: 'Figure 5: QuickSight interactive visual dashboard tracking geographic traffic concentration.'
      },
      {
        name: 'Phase 6: Preparing the Project for the Cloud',
        tools: 'GitHub & Python & Requirements file',
        content: (
    <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
      <div>
        <h4 className="text-white font-bold text-sm mb-1">Moving from Local to Global:</h4>
        <p>
          After finishing the code on my laptop, it was time to move it to the cloud so anyone could see it. I uploaded everything to <strong className="text-white">GitHub</strong>. This wasn&apos;t just about saving the files; it was about making the code &quot;Cloud-Ready.&quot; I made sure the code is clean and doesn&apos;t rely on any specific folders on my personal computer, so it can run smoothly on any server.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold text-sm mb-1">The &quot;Requirements&quot; List:</h4>
        <p>
          Every cloud server needs to know which tools to use. I created a simple file called{' '}
          <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
            requirements.txt
          </code>
          . Think of it as a &quot;Manual&quot; for the server; it lists everything the project needs to run, like{' '}
          <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
            streamlit
          </code>{' '}
          and{' '}
          <code className="text-emerald-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
            Pandas
          </code>
          . This way, the server installs everything automatically, and the project works perfectly from the first second.
        </p>
      </div>
    </div>
  ),
        imagePath: 'pipeline-phase6.png',
        figureCaption: 'Figure 6: Preparing the project for deployment in the cloud environment.'
      },
      {
        name: 'Phase 7: The Live Dashboard & Full Automation',
        tools: 'Streamlit Cloud, GitHub & Automation Script',
        content: (
    <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
      <div>
        <h4 className="text-white font-bold text-sm mb-1">Bringing the App to Life:</h4>
        <p>
          This is the final step where everything comes together. I linked my <strong className="text-white">GitHub</strong> repository to <strong className="text-white">Streamlit Cloud</strong>. Now, the dashboard is live on the internet and accessible via a public URL. In the setup (as shown in the screenshot), I pointed Streamlit to my main file{' '}
          <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
            my_seo_dashboard.py
          </code>
          , and it automatically built the entire interface.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-white font-bold text-sm mb-1">Magic Background Automation:</h4>
        <p>
          The best part of this project is that I don&apos;t need to touch any code anymore. I don&apos;t even need to open VS Code or Streamlit to update the data.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-white">How it works: </strong>
            I just open my local{' '}
            <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
              backlinks.csv
            </code>{' '}
            file, add a new link, and save it.
          </li>
          <li>
            <strong className="text-white">The Result: </strong>
            My automation script detects the change, checks if the link is &quot;Live (200)&quot; or &quot;Broken,&quot; and pushes it to the AWS cloud. Seconds later, the live dashboard updates itself automatically with the new data.
          </li>
        </ul>
      </div>
    </div>
  ),
  realValue:
          'This creates a seamless workflow. I can manage my entire SEO backlink portfolio just by editing a simple spreadsheet, while the complex AWS infrastructure and the Streamlit app handle all the heavy lifting in the background.',
        imagePath: 'pipeline-phase2.png',
        figureCaption: 'Figure 2: Automated date-based partitioning (Year/Month/Day) within the S3 Data Lake for optimized query performance and cost-efficiency.'
      },
    ],
    keyTakeaway: 'Scalable, 100% serverless data pipeline delivering sub-second business intelligence with pay-per-query FinOps cost governance.',
    coverImage: 'pipeline-hero.png'
  },
  {
    id: 'zero-touch-pipeline',
    tag: 'EVENT-DRIVEN ARCHITECTURE',
    title: 'AWS Serverless Architecture: The Zero-Touch Data Pipeline',
    subtitle: 'Real-Time Backlink & Local Environment Cloud Sync',
    techStack: ['AWS Aurora RDS', 'DynamoDB', 'AWS Lambda', 'Python (Boto3)', 'Watchdog', 'Streamlit', 'GitHub Webhooks', 'VS Code'],
    summary:
      "A professional demonstration of Serverless Cloud Architecture and Event-Driven Automation. This project features a high-speed data pipeline that synchronizes local environments with AWS Cloud databases in real-time. By leveraging AWS Lambda and DynamoDB, I built a 'zero-touch' system where local data updates trigger immediate cloud processing and live dashboard synchronization without any manual intervention.",
    detailedOverview:
      "This project focuses on building a fully automated Cloud Data Pipeline on AWS. It demonstrates how to handle streaming data with a (Zero-Maintenance) architecture, ensuring seamless synchronization between local environments and cloud databases without manual intervention.",
    whyAws:
      'Manual backlink monitoring across disparate platforms creates blind spots. By employing AWS Lambda, DynamoDB, and Aurora RDS connected through local Python event hooks, audit records synchronize immediately to a live web dashboard upon file modification.',
    phases: [
      {
        name: 'Phase 1: Cloud Database Integration & Connectivity',
        tools: 'AWS Aurora RDS (PostgreSQL/MariaDB) & Boto3 (Python SDK)',
        desc: 'The first and most critical step was establishing a secure "source of truth" for the data. I deployed an Amazon RDS instance to serve as the projects cloud database. To enable my Python application to communicate with AWS services, I integrated the Boto3 library, which is the official AWS SDK for Python.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Database Provisioning',
      desc: 'I launched a managed database instance on AWS RDS, ensuring high availability and secure storage for our datasets.'
    },
    {
      title: 'SDK Integration',
      desc: 'Installed and configured boto3 to bridge the gap between my local Python code and the AWS Cloud infrastructure.'
    },
    {
      title: 'Endpoint Configuration',
      desc: 'I retrieved the unique Database Endpoint from the RDS Connectivity dashboard.',
      subPoints: [
        'This endpoint acts as the digital address that allows my application to find and connect to the database in the cloud.'
      ]
    },
    {
      title: 'Security & IAM Roles',
      desc: 'I configured an IAM Role (Identity and Access Management) with the necessary permissions.',
      subPoints: [
        'This was a crucial security step to authorize my application to access RDS resources without exposing sensitive credentials.'
      ]
    }
  ],
  realValueTitle: 'The Real Value (Cloud-Native Development):',
  realValue: 'By connecting the Python backend directly to a cloud-managed database (RDS), I moved away from local storage limitations. This approach ensures the application is "Cloud-Native," meaning it is scalable, secure, and accessible from anywhere in the world while maintaining peak performance.',
        imagePath: 'zero-touch-phase1.png',
        figureCaption: 'Figure 1: Managed database instance provisioning and endpoint connection routing.'
      },
      {
        name: 'Phase 2: High-Performance NoSQL Storage Setup',
        tools: 'Amazon DynamoDB',
        desc: 'To support the real-time requirements of the dashboard, I implemented a NoSQL storage layer using Amazon DynamoDB. This was chosen specifically for its ability to handle high-frequency read/write operations with single-digit millisecond latency.',
        keyActions: [
  'Table Schema: I created a table named Backlinks designed to store SEO metric attributes.',
  'Performance Advantage: Unlike traditional RDS, DynamoDB’s serverless nature allows it to scale instantly with the applications traffic, making it the perfect backbone for a live SEO monitoring tool.'
],
        imagePath: 'zero-touch-phase2.png',
        figureCaption: 'Figure 2: DynamoDB table configuration and primary partition indexing.'
      },
      {
        name: 'Phase 3: Automated Data Ingestion (Python ETL Script)',
        tools: 'Python (Boto3, Watchdog, Pandas), CSV Dataset',
        desc: 'In this phase, I developed a custom Python ETL (Extract, Transform, Load) script to bridge the gap between local data and the AWS Cloud. Instead of manual entry, the script automatically parses the backlinks.csv file and prepares it for the cloud environment.',
        keyActions: [
  'Data Extraction: The script reads raw SEO metrics (DA, DR, Traffic, etc.) directly from the local file system.',
  'Schema Mapping: It dynamically maps CSV columns into a Python Dictionary format compatible with Amazon DynamoDB NoSQL structure.',
  'Batch Ingestion: Using the Boto3 SDK, the script performs automated PutItem operations, ensuring that every backlink is accurately stored with its unique LinkID.',    
  'Automation Logic: This script serves as the engine for (the Save-to-Update) workflow, allowing for seamless data synchronization without touching the AWS Console."'
],
        imagePath: 'zero-touch-phase3.png',
        figureCaption: 'Figure 3: Python ingestion script executing batch transforms and cloud synchronization.'
      },
      {
        name: 'Phase 4: Serverless Backend with AWS Lambda',
        tools: 'AWS Lambda (Python Runtime)',
        desc: 'Configured event-driven Lambda microservices to process inbound payloads, validate URL status codes, and atomically update destination records in DynamoDB.',
        content: (
    <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
      
      <div>
        <h4 className="text-white font-bold text-sm mb-1">How Lambda Connects the Whole Pipeline:</h4>
        <p className="italic text-zinc-400">
          &quot;The real power of this Lambda function is that it acts as the <strong className="text-white">bridge</strong> between the data storage and the final application. I configured a <strong className="text-[#ff2e7e]">DynamoDB Stream Trigger</strong> for this function.&quot;
        </p>
      </div>

      <div>
        <h5 className="text-amber-400 font-semibold mb-2">The Automated Workflow:</h5>
        <ol className="list-decimal list-inside space-y-1.5 pl-2 text-zinc-300">
          <li><strong className="text-white">The Trigger:</strong> The moment my Python script saves a new link into DynamoDB, an &apos;Insert Event&apos; is created.</li>
          <li><strong className="text-white">The Execution:</strong> AWS Lambda detects this event instantly and starts running my code to validate the link.</li>
          <li><strong className="text-white">The Result:</strong> It updates the &apos;Status&apos; column in the database, which then reflects immediately on the <strong className="text-white">Streamlit Dashboard</strong>.</li>
        </ol>
      </div>

      <div>
        <h5 className="text-white font-bold mb-1">What did I do here?</h5>
        <p>
          I developed a serverless backend function using <strong className="text-white">AWS Lambda</strong>. Instead of having the Streamlit dashboard talk directly to the database (which can be slow or insecure), Lambda acts as an intermediary layer. It fetches the required data from DynamoDB, processes it, and sends it back to the application.
        </p>
      </div>

      <div>
        <h5 className="text-emerald-400 font-semibold mb-2">The Benefits (Why Lambda?):</h5>
        <ol className="list-decimal list-inside space-y-1.5 pl-2 text-zinc-300">
          <li><strong className="text-white">Event-Driven Execution:</strong> The code runs only when the dashboard requests data, so we don&apos;t pay for idle server time.</li>
          <li><strong className="text-white">Zero Management:</strong> AWS handles all the infrastructure, scaling, and availability automatically.</li>
          <li><strong className="text-white">Security:</strong> By using Lambda, we keep our database credentials and complex logic hidden from the front-end.</li>
        </ol>
      </div>

      <p className="border-l-2 border-[#ff2e7e] pl-3 py-1 italic text-zinc-400">
        &quot;Without Lambda, the system would just be a static database. With it, the entire pipeline—from the local CSV file to the cloud dashboard—becomes a <strong className="text-white">fully automated, living ecosystem</strong>.&quot;
      </p>

      <div>
        <h5 className="text-white font-bold mb-2">Permissions &amp; IAM Roles:</h5>
        <ul className="list-disc list-inside space-y-1 pl-2 text-zinc-300">
          <li><strong className="text-white">What I did:</strong> I manually attached an IAM Role to this Lambda function.</li>
          <li><strong className="text-white">The Permission:</strong> I added a policy (like <code className="text-[#ff2e7e] bg-zinc-900 px-1.5 py-0.5 rounded">AmazonDynamoDBReadOnlyAccess</code>) that grants this specific Lambda function the &quot;right&quot; to read data from our <code className="text-amber-400 bg-zinc-900 px-1.5 py-0.5 rounded">Backlinks</code> table.</li>
        </ul>
      </div>

    </div>
  ),
        imagePath: 'zero-touch-phase4.png',
        figureCaption: 'Figure 4: Lambda function execution graph and IAM permission mapping.'
      },
      {
        name: 'Phase 5: Live Dashboard & Full Automation',
        tools: 'Python, Watchdog Library & Subprocess',
        desc: 'To ensure the dashboard is always up-to-date without manual intervention, I developed an automation script (auto_uploader.py). This script acts as a "File Watcher" that monitors the local dataset for any changes.',
        content: (
    <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
      <div>
        <h4 className="text-white font-bold text-sm mb-2">How it works:</h4>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-white">Real-time Monitoring: </strong>
            Using the <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">watchdog</code> library, the script tracks the <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">backlinks.csv</code> file.
          </li>
          <li>
            <strong className="text-white">Automatic Execution: </strong>
            The moment a change is saved in the CSV file, the script triggers the main upload logic (<code className="text-emerald-400 bg-zinc-900 border border-zinc-850 px-1.5 py-0.5 rounded font-mono text-xs">Cloud-based SEO Dashboard.py</code>) via the <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">subprocess</code> module.
          </li>
          <li>
            <strong className="text-white">The Real Value: </strong>
            This eliminates the need for manual uploads, ensuring that any new SEO data added locally is reflected in the AWS Cloud environment and the Streamlit dashboard instantly.
          </li>
        </ul>
      </div>
    </div>
  ),
        imagePath: 'zero-touch-phase5.png',
        figureCaption: 'Figure 5: Live Streamlit cloud interface reflecting real-time backlink audit metrics.'
      }
    ],
    keyTakeaway: 'Completely autonomous event-driven architecture turning static local audits into zero-touch cloud-synchronized intelligence.',
    coverImage: 'cloud-project-2.jpg'
  },
  {
    id: 'conversational-agent',
    tag: 'AI & NATURAL LANGUAGE (ARABIC)',
    title: 'AI Conversational Agent: Automated Booking Solution',
    subtitle: 'Arabic NLU-Powered WhatsApp Enterprise Booking System',
    techStack: ['Amazon Lex', 'AWS Lambda', 'Twilio WhatsApp API', 'AWS Budgets', 'Python'],
    summary:
      'A sophisticated, AI-driven conversational agent built to automate customer inquiries and service bookings. By integrating Amazon Lex with Twilio, I developed a seamless WhatsApp interface that processes natural language requests in Arabic (UAE). The system features an event-driven backend using AWS Lambda to handle logic, while maintaining a Zero-Spend Budget architecture to ensure high performance with zero operational cost.',
    detailedOverview:
      "This project demonstrates the deployment of a Serverless AI Chatbot designed to automate the reservation process for (Bait Al-Nokhada). By leveraging Natural Language Understanding (NLU), the system interacts with customers via WhatsApp to collect booking details (Tent type, size, and location) without human intervention. The core focus was to build a robust, scalable, and cost-efficient solution that bridges the gap between AI cloud services and popular messaging platforms.",
    whyAws:
      'Commercial event procurement in the GCC demands immediate conversational engagement. Amazon Lex delivers localized Arabic natural language understanding (NLU), while AWS Lambda executes slot validation and fulfillment under a zero-spend architecture.',
    phases: [
      {
        name: 'Phase 1: Financial Guardrails & Cloud Security',
        tools: 'AWS Budgets',
        desc: 'The first and most critical step was establishing a "Safety First" environment. Before deploying any AI services, I prioritized cost management and cloud governance to ensure the project remains sustainable and within the Free Tier limits.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Implementing "My Zero-Spend Budget"',
      desc: 'I designed a custom budget monitoring system to prevent any unintended cloud expenditures.'
    },
    {
      title: 'Threshold Configuration',
      desc: 'I set a strict budget limit of $1.00, allowing me to experiment with advanced AI services without financial risk.'
    },
    {
      title: 'Anomaly Detection & Alerts',
      desc: 'The system was configured to monitor usage in real-time, sending immediate notifications if the forecasted spending approached the defined threshold. This proactive approach ensures 100% financial visibility throughout the development lifecycle.'
    }
  ],
        imagePath: 'lex-phase1.png',
        figureCaption: 'Figure 1: AWS Budgets threshold parameters established for zero-cost sandbox execution.'
      },
      {
        name: 'Phase 2: Conversational AI Infrastructure Provisioning',
        tools: 'Amazon Lex (V2)',
        desc: 'Once the financial safeguards were in place, I moved to the core infrastructure phase. This involved provisioning the Amazon Lex V2 engine, which serves as the "brain" of the conversational agent, capable of understanding natural language and managing complex dialogue flows.',
        detailedStepsTitle: 'Key Technical Details:',
  detailedSteps: [
    {
      title: 'Bot Instance Deployment',
      desc: 'I initiated the deployment of the AI agent, specifically tailored for self-service automation. This involved choosing the V2 console for its advanced NLU (Natural Language Understanding) capabilities.'
    },
    {
      title: 'Localized Configuration',
      desc: 'I configured the bot instance, named "BaitAlNokhada_Helper", specifically to support the linguistic nuances of the target audience.'
    },
    {
      title: 'Availability Verification',
      desc: 'I successfully validated the bot\'s status as "Available", confirming that the cloud resources were correctly provisioned and the environment was ready for the logic and integration phases.'
    }
  ],
        imagePath: 'lex-phase2.png',
        figureCaption: 'Figure 2: Amazon Lex intent modeling and sample Arabic utterance training sets.'
      },
      {
        name: 'Phase 3: Intent Architecture & Language Localization',
        tools: 'Amazon Lex (V2) - Language Support: Arabic (UAE)',
        desc: 'In this stage, I architected the interaction model by defining specific Intents to categorize user goals. A crucial part of this phase was localizing the bot to support Arabic (UAE), ensuring the agent can effectively process regional dialects and cultural nuances within the conversational flow.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Intent Categorization',
      desc: 'I established a set of core intents, including GreetingIntent for initial engagement and the primary business intent: OrderTent.'
    },
    {
      title: 'Dynamic Language Processing',
      desc: 'By selecting the UAE-specific Arabic model, I enabled the bot to handle localized phrasing, which is essential for a high-quality user experience in the regional market.'
    },
    {
      title: 'Intent Build Verification',
      desc: 'I successfully executed the build process, as confirmed by the "Successfully built" status, ensuring the NLU model was ready for utterance training.'
    }
  ],
        imagePath: 'lex-phase3.png',
        figureCaption: 'Figure 3: Multi-turn slot definition and user input confirmation rules.'
      },
      {
        name: 'Phase 4: Utterance Engineering & NLU Confidence Tuning',
        tools: 'Natural Language Understanding (NLU) - Sample Utterances',
        desc: 'To ensure high accuracy in user request recognition, I implemented "Utterance Engineering." This involved training the bot on a diverse set of sample phrases while fine-tuning the NLU engines sensitivity to handle variations in human speech.',
        detailedStepsTitle: 'Key Technical Details:',
  detailedSteps: [
    {
      title: 'Sample Utterance Development',
      desc: 'I curated 13 high-impact sample utterances in Arabic, ranging from direct requests like "أريد خيمة" to complex inquiries involving specific variables like {TentType} and {TentSize}.'
    },
    {
      title: 'Confidence Threshold Optimization',
      desc: 'I configured the bot with a 40% Confidence Threshold. This allows the Lex engine to intelligently predict user intent even when the input isn\'t a 100% match, recognizing phrases that are conceptually close to the trained samples (e.g., identifying "أسعار" as a trigger for a pricing or ordering inquiry).'
    },
    {
      title: 'Contextual Slot Integration',
      desc: 'I integrated dynamic slots within the utterances to capture essential data points in real-time, allowing for a more natural and fluid interaction during the tent ordering process.'
    }
  ],
        imagePath: 'lex-phase4.png',
        figureCaption: 'Figure 4: Twilio WhatsApp sandbox integration verifying message roundtrips.'
      },
      {
        name: 'Phase 5: Advanced Slot Architecture & Multi-Turn Data Collection',
        tools: 'Amazon Lex (V2) - Custom & Built-in Slot Types',
        desc: 'In this phase, I engineered the "Slots" system, which acts as the data-gathering engine of the bot. I configured a multi-turn dialogue flow to ensure the agent captures all necessary variables required to fulfill a tent reservation inquiry accurately.',
        content: (
    <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
      <div>
        <h4 className="text-white font-bold text-sm mb-2 font-mono text-emerald-400">
          Detailed Technical Steps:
        </h4>
        <ul className="list-disc list-inside space-y-3 pl-2 text-zinc-300">
          <li>
            <strong className="text-white">Custom Slot Type Engineering ( </strong>
            <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
              TentType
            </code>
            <strong className="text-white"> ): </strong>
            I manually created a custom slot type named{' '}
            <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
              Tent_Kinds
            </code>{' '}
            to categorize specific inventory (e.g., Wedding, Events, Majesty). This ensures the bot only accepts valid categories predefined by the business.
          </li>

          <li className="space-y-2">
            <div>
              <strong className="text-white">Built-in Entity Extraction: </strong>
              I leveraged Amazon&apos;s built-in slot types for high-precision data extraction:
            </div>
            <ul className="pl-6 space-y-1.5 list-circle list-inside text-zinc-400">
              <li>
                <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  TentSize
                </code>
                {' '}: Using{' '}
                <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  AMAZON.AlphaNumeric
                </code>{' '}
                to capture dimensions.
              </li>
              <li>
                <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  Location
                </code>
                {' '}: Using{' '}
                <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  AMAZON.City
                </code>{' '}
                to identify the specific emirate or city.
              </li>
              <li>
                <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  PhoneNumber
                </code>
                {' '}: Using{' '}
                <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
                  AMAZON.PhoneNumber
                </code>{' '}
                to ensure the contact data is in the correct format for follow-ups.
              </li>
            </ul>
          </li>

          <li>
            <strong className="text-white">Contextual Prompting: </strong>
            For each slot, I designed localized Arabic prompts (e.g., &quot;في أي إمارة محتاج الخيمة؟&quot;) to guide the user naturally through the data collection process.
          </li>
        </ul>
      </div>
    </div>
  ),
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 6: Fulfillment Logic & Transactional Confirmation',
        tools: 'Confirmation Prompts, Fulfillment Logic, Closing Responses',
        desc: 'The final stage of the intent design focused on the "Handshake" between the user and the system. I implemented a robust verification and fulfillment flow to transition the conversation from data gathering to successful service execution.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Confirmation Management',
      desc: 'I activated a Confirmation Prompt to act as a final checkpoint. The bot summarizes the user\'s choices (e.g., "...تمام يا فندم، هل نود تأكيد طلب خيمة") before proceeding, reducing errors and improving user trust.'
    },
    {
      title: 'Fulfillment Strategy',
      desc: 'I configured the Fulfillment layer to trigger once the user confirms. This stage is designed to bridge the Lex bot with backend logic (like AWS Lambda) to record the order in a database.'
    },
    {
      title: 'Closing Response & Dynamic Variables',
      desc: 'I designed a professional Closing Response that dynamically references captured data, such as the user\'s phone number {PhoneNumber}, to provide a personalized exit message (e.g., "...تم استلام طلبك بنجاح... سنتواصل معك على الرقم").'
    },
    {
      title: 'Session Termination',
      desc: 'Configured the "Next step in conversation" to End Conversation, ensuring a clean session closure and resource optimization.'
    }
  ],
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 7: Conversational Experience & Dialogue Management',
        tools: 'Amazon Lex (V2) - Greeting Intent Configuration',
        desc: 'To enhance the User Experience (UX) and ensure a natural conversational flow, I implemented a dedicated GreetingIntent. This phase was crucial to prevent interaction failures when users initiate conversations with social cues (like "Hello" or "Good Morning") rather than direct service requests. By handling these introductory utterances, the bot creates a welcoming environment and maintains high engagement levels.',
        content: (
    <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed">
      <div>
        <h4 className="text-white font-bold text-sm mb-2 font-mono text-emerald-400">
          How it works:
        </h4>
        <ul className="list-disc list-inside space-y-3 pl-2 text-zinc-300">
          <li>
            <strong className="text-white">Intent Design ( </strong>
            <code className="text-[#ff2e7e] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
              GreetingIntent
            </code>
            <strong className="text-white"> ): </strong>
            I created a specific intent to capture all forms of introductory salutations. This acts as a &quot;Gatekeeper&quot; that recognizes the start of a conversation and prepares the bot for subsequent business requests.
          </li>

          <li className="space-y-2">
            <div>
              <strong className="text-white">Multilingual Utterance Training: </strong>
              I trained the intent on a diverse range of social triggers in both Arabic and English (as shown in the configuration), such as:
            </div>
            <ul className="pl-6 space-y-1.5 list-circle list-inside text-zinc-400">
              <li>
                <strong className="text-zinc-300">Arabic (UAE): </strong>
                &quot;السلام عليكم&quot;, &quot;صباح الخير&quot;, &quot;مرحبا&quot;, &quot;هلا&quot;.
              </li>
              <li>
                <strong className="text-zinc-300">English/Transliterated: </strong>
                &quot;Good Morning&quot;, &quot;Hello&quot;.
              </li>
            </ul>
          </li>

          <li>
            <strong className="text-white">Contextual Response Logic: </strong>
            I configured the bot to respond with appropriate counter-greetings (e.g., &quot;وعليكم السلام&quot;) while subtly prompting the user toward the main service intent (
            <code className="text-amber-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">
              OrderTent
            </code>
            ). This ensures the conversation doesn&apos;t hit a dead-end and guides the user smoothly to the goal.
          </li>

          <li>
            <strong className="text-white">NLU Accuracy Optimization: </strong>
            By separating social greetings from business logic, I reduced the &quot;Noise&quot; in the NLU model, ensuring that the primary ordering intent remains highly accurate and focused only on booking-related phrases.
          </li>
        </ul>
      </div>
    </div>
  ),
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 8: Error Handling & Fallback Strategy',
        tools: 'Amazon Lex (V2) - FallbackIntent',
        desc: 'To ensure the bot never leaves a user without a response, I configured the FallbackIntent. This is the (Safety Net) of the conversational flow. If the user input doesn\'t match any trained intents, this intent triggers a polite response, maintaining the professional image of the bot and preventing (dead-end)conversations. It’s a critical step for maintaining a robust User Experience (UX).',
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 9: API Gateway Provisioning & Security',
        tools: 'Twilio Console & REST API Credentials',
        desc: 'To enable external communication, I provisioned a Twilio Cloud Communications account. This served as the primary gateway for the WhatsApp integration. I secured the essential API credentials, including the Account SID and Auth Token, which are required to authenticate and authorize requests sent from the AWS environment. This step ensures that the communication channel is both private and secure.',
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 10: WhatsApp Sandbox Activation & Handshake',
        tools: 'Twilio WhatsApp Sandbox',
        desc: 'The final integration step involved the "Digital Handshake" between my device and the Twilio server. I utilized the Twilio Sandbox for WhatsApp, which allows for real-time testing in a developer environment. By scanning the unique QR code and sending the activation command, I successfully linked my phone number to the service. This activation allows the bot to send and receive automated messages, effectively turning a cloud-native AI into a mobile-accessible tool.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Sandbox Initiation',
      desc: 'Accessed the "Try it out" messaging suite to initiate the WhatsApp environment.'
    },
    {
      title: 'Device Handshake',
      desc: 'Scanned the QR code and sent the verification string to establish a secure link with the sandbox.'
    },
    {
      title: 'Outbound Validation',
      desc: 'Verified the integration by triggering a Business-Initiated message from the console to my device, confirming the API\'s ability to deliver content templates.'
    }
  ],
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 11: Serverless Logic & Real-Time Alert Automation',
        tools: 'AWS Lambda (Python 3.x), Twilio REST API, JSON, Base64 Encoding',
        desc: 'This phase represents the "Central Processing Unit" of the system. I developed a serverless Python function deployed via AWS Lambda to bridge the gap between AI understanding and real-world communication. The function is designed to handle "Exceptions" or "Fallback" scenarios. When the bot encounters an unknown query, the Lambda function triggers an automated WhatsApp API call to notify the administrator with the exact transcript of the user\'s message, ensuring no customer inquiry goes unnoticed.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Transcript Extraction',
      desc: "The function dynamically extracts the inputTranscript from the Lex event, capturing the user's raw input for analysis."
    },
    {
      title: 'API Authentication (Basic Auth)',
      desc: "I implemented a secure Base64 encoding mechanism to handle Twilio's HTTP Basic Authentication, ensuring that the account_sid and auth_token are transmitted securely via the request headers."
    },
    {
      title: 'Payload Engineering',
      desc: "Using urllib.parse, I engineered a URL-encoded payload containing the destination number, the Twilio source number, and a custom alert message that includes the user's query."
    },
    {
      title: 'Asynchronous Error Handling',
      desc: 'Integrated a try-except block to manage API request failures gracefully, ensuring that any communication errors with Twilio are logged without crashing the bot session.'
    },
    {
      title: 'Dynamic Response Management',
      desc: 'I configured the function to return a structured JSON response back to Amazon Lex, using the ElicitIntent or close dialog actions to provide the user with a personalized message while the administrator is being notified.'
    }
  ],
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 12: Omnichannel Deployment & Channel Integration',
        tools: 'Amazon Lex (V2) - Channel Integrations',
        desc: 'To make the AI agent accessible to end-users, I executed an Omnichannel deployment strategy. This involved creating a dedicated communication channel within the Amazon Lex console to bridge the bot with external messaging platforms. By choosing the Twilio SMS/WhatsApp platform, I enabled the bot to send and receive real-time data beyond the AWS management console.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Channel Provisioning',
      desc: 'I navigated to the Deployment section and initiated a new Channel Integration named WhatsApp_BaitAlNokhada.'
    },
    {
      title: 'IAM Role Configuration',
      desc: 'I associated the integration with the necessary IAM roles to grant Lex the permissions required to communicate with third-party APIs.'
    },
    {
      title: 'Endpoint Generation',
      desc: 'Successfully generated a unique Callback URL (Endpoint). This URL serves as the secure "Digital Address" where Lex listens for incoming messages from the Twilio gateway.'
    }
  ],
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Phase 13: Omnichannel Deployment & Channel Integration',
        tools: 'Amazon Lex (V2) - Channel Integrations',
        desc: 'The final step in the integration architecture was establishing a Two-Way Webhook. This "Handshake" ensures that every message a customer sends on WhatsApp is instantly routed to the Amazon Lex NLU engine for processing and that the AI\'s response is sent back to the user\'s phone.',
        detailedStepsTitle: 'Detailed Technical Steps:',
  detailedSteps: [
    {
      title: 'Webhook Configuration',
      desc: 'I integrated the Lex Callback URL into the Twilio Sandbox settings under the "When a message comes in" field.'
    },
    {
      title: 'Protocol Alignment',
      desc: 'Configured the communication method to HTTP POST, ensuring that the message payload (text, sender ID, and metadata) is transmitted securely and efficiently.'
    },
    {
      title: 'Verification & Synchronization',
      desc: 'Saved the configuration to synchronize the two platforms. This established a live, event-driven connection where Twilio acts as the delivery agent and Lex acts as the intelligent processor.'
    }
  ],
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
      {
        name: 'Final Phase: Live Demonstration & Real-World Validation',
        tools: 'WhatsApp Messenger & Amazon Lex Runtime',
        desc: 'The culmination of this project is a fully functional, localized AI agent operating within WhatsApp. As shown in the final demonstration, the bot seamlessly handles the end-to-end booking journey in Arabic (UAE). It initiates the conversation, collects specific requirements through structured slots, and provides a personalized confirmation—all within seconds and without any manual intervention.',
        imagePath: 'lex-phase5.png',
        figureCaption: 'Figure 5: Lambda fulfillment handler processing structured customer booking records.'
      },
    ],
    keyTakeaway: '24/7 automated Arabic conversational sales conduit processing customer requirements with zero infrastructure overhead.',
    coverImage: 'cloud-project-3.jpg'
  },
  {
    id: 'slack-performance-engine',
    tag: 'ENTERPRISE BUSINESS INTELLIGENCE',
    title: 'End-to-End Real-Time SEO Analytics Pipeline: A Serverless Approach',
    subtitle: 'Automated Serverless Data Lake & Instant Morning Slack Notifications',
    techStack: ['Amazon S3', 'AWS Glue', 'Amazon Athena', 'AWS Lambda', 'EventBridge(CloudWatch Events)', 'Slack API', 'Python (Boto3, Pandas)'],
    summary:
      'An advanced SEO infrastructure that automates the transition from raw search data to real-time business intelligence. By architecting a Serverless Data Lake, this system allows for (zero-touch) reporting; simply landing your Google Search Console data into the cloud triggers a full ETL pipeline. The engine automatically catalogs schemas, executes complex SQL analytics, and pushes critical performance alerts directly to a professional Slack dashboard, ensuring data-driven decisions are made every single morning without human intervention.',
    detailedOverview: `This project showcases an advanced, serverless data pipeline designed to automate the extraction and analysis of SEO performance metrics. By integrating AWS Cloud infrastructure with Google Search Console (GSC), I built a system that eliminates manual reporting and provides deep insights into organic search trends.

The core of this solution lies in its automated ETL architecture: simply uploading a raw GSC export to the cloud triggers a background process that catalogs the data, performs complex SQL analysis, and delivers real-time insights via an automated notification system. The final result is a scalable, low-cost analytics engine that empowers SEO specialists to make data-driven decisions without ever touching a spreadsheet.`,
    whyAws:
      'Manual monitoring of enterprise search data fails to deliver timely notifications on rankings. Uniting EventBridge automated schedules, S3 storage, and Athena SQL queries allows daily organic movements to be evaluated and delivered automatically before business hours.',
    phases: [
      {
        name: 'Phase 1: Automated GSC Landing Zone',
        tools: 'Amazon S3 & EventBridge',
        desc: 'Engineered daily automated cron triggers that fetch fresh Search Console keyword impressions and ranking logs into structured S3 landing zones.',
        imagePath: 'slack-phase1.png',
        figureCaption: 'Figure 1: S3 object landing zone structured by date for automated consumption.'
      },
      {
        name: 'Phase 2: Automated Schema Evolution & Cataloging',
        tools: 'AWS Glue',
        desc: 'Employed AWS Glue crawlers to catalog newly deposited GSC data daily, ensuring relational Athena queries accurately reflect newly indexed keyword queries.',
        imagePath: 'slack-phase2.png',
        figureCaption: 'Figure 2: Glue crawler schedule maintaining synchronicity with incoming search datasets.'
      },
      {
        name: 'Phase 3: Diagnostic SQL Execution',
        tools: 'Amazon Athena',
        desc: 'Ran automated analytical SQL queries comparing day-over-day impressions, identifying high-performing commercial terms, and surfacing critical ranking drops.',
        imagePath: 'slack-phase3.png',
        figureCaption: 'Figure 3: Athena analytical query isolating commercial query volatility.'
      },
      {
        name: 'Phase 4: Instant Morning Executive Digest',
        tools: 'Slack Webhooks API & AWS Lambda',
        desc: 'Formatted SQL analytical findings into visual digest cards and transmitted morning alerts directly to engineering and executive Slack channels.',
        imagePath: 'slack-phase4.png',
        figureCaption: 'Figure 4: Automated Slack notification card detailing live keyword clicks and commercial metrics.'
      }
    ],
    keyTakeaway: 'Turned passive search console logs into an proactive, automated enterprise decision-support pipeline.',
    coverImage: 'cloud-project-4.jpg'
  }
];

export default function CloudEngineeringPage() {
  const [selectedProject, setSelectedProject] = useState<CloudProject | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
      style={{ fontFamily: 'var(--font-body-en), Montserrat, sans-serif' }}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-28">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-10"
        >
          ← BACK TO HOME
        </Link>

        {/* 1. HERO: THE CAUSE & EFFECT */}
        <section className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-850 shadow-2xl mb-20 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] font-mono text-xs font-semibold">
                INFRASTRUCTURE & AUTOMATION
              </span>
              <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                AWS Certified • Cloud Solutions Architecture
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
            >
              Cloud Architecture & Search Intelligence Pipelines
            </h1>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-3xl">
              My transition into AWS was born out of real-world necessity. Managing high-volume search data, tracking hundreds of live backlinks, and converting search traffic into automated client bookings exposed the limits of static spreadsheets and manual reporting.
            </p>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal max-w-3xl">
              I turned to Amazon Web Services to build robust, serverless data pipelines, event-driven databases, and Arabic NLU conversational bots—bridging the gap between raw search algorithms and autonomous cloud infrastructure.
            </p>

            {/* Tech Badges Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-zinc-850">
              {['AWS Lambda', 'Amazon S3', 'DynamoDB', 'AWS Glue', 'Amazon Athena', 'Amazon Lex', 'Python Boto3', 'Aurora RDS', 'CloudWatch'].map(
                (skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* 2. FEATURED PROJECTS SHOWCASE (4 CARDS) */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-850">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] mb-1">
                Engineering Implementations
              </div>
              <h2
                className="text-2xl md:text-4xl font-bold text-white tracking-wide"
                style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
              >
                Featured Cloud Architecture Projects
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-500">
              Click any project card to inspect full technical documentation & stages ↗
            </p>
          </div>

          <div className="space-y-16">
            {cloudProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-zinc-850 shadow-2xl space-y-8 group hover:border-zinc-700 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-850">
                  <div>
                    <span className="text-[11px] font-mono text-[#ff2e7e] uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white tracking-wide mt-1"
                      style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-1">{project.subtitle}</p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-[#ff2e7e] text-zinc-300 hover:text-white border border-zinc-800 hover:border-[#ff2e7e] text-xs font-mono transition-all self-start md:self-auto shrink-0 flex items-center gap-1.5"
                  >
                    <span>Read Full Documentation</span>
                    <span>↗</span>
                  </button>
                </div>

                {/* Summary & Why AWS Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Project Objective
                    </div>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                      Why AWS & The SEO Connection
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      {project.whyAws}
                    </p>
                  </div>
                </div>

                {/* Cover Image / Diagram Preview */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-64 md:h-84 w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-pointer group/img flex items-center justify-center"
                >
                  <img
                    src={getImgSrc(project.coverImage)}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover/img:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/Website audit.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-black/90 border border-zinc-700 text-xs font-mono text-white">
                      Inspect Architectural Blueprint & Execution Stages
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-850">
                  <span className="text-xs font-mono text-zinc-500 mr-2">Built with:</span>
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* 3. FULL NOTION-STYLE DOCUMENTATION MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#0c0c0e] border border-zinc-800 rounded-3xl p-8 md:p-14 overflow-y-auto cursor-default space-y-12 shadow-2xl selection:bg-[#ff2e7e]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-0 float-right -mt-4 -mr-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#ff2e7e] text-zinc-400 hover:text-white flex items-center justify-center text-sm font-mono transition-colors z-20"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="space-y-4 pb-8 border-b border-zinc-850">
                <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] font-mono text-xs font-semibold">
                  {selectedProject.tag}
                </span>
                <h2
                  className="text-3xl md:text-5xl font-black text-white tracking-wide mt-2"
                  style={{ fontFamily: 'var(--font-heading-en), Cinzel, serif' }}
                >
                  {selectedProject.title}
                </h2>
                <p className="text-xs md:text-sm text-zinc-400 font-mono">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Project Deep Dive Context */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e]">
                  Architecture Overview 
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {selectedProject.detailedOverview}
                </p>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-850 text-xs md:text-sm text-zinc-400 leading-relaxed">
                  <span className="text-amber-400 font-bold block mb-1">Engineering Rationale:</span>
                  {selectedProject.whyAws}
                </div>
              </div>

              {/* Execution Phases with Images */}
              <div className="space-y-10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Execution Phases & Technical Details
                </h3>

                <div className="space-y-8">
                  {selectedProject.phases.map((phase, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-900">
                        <span className="text-base font-bold text-white">{phase.name}</span>
                        <span className="text-xs font-mono text-[#ff2e7e]">{phase.tools}</span>
                      </div>
                      
                      <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                        {phase.desc}
                      </p>
                      {/* إذا كانت المرحلة مكتوبة بنظام content الجديد ستظهر هنا */}
        {phase.content}
                      {/* How the Data is Read (إذا وجد) */}
      {phase.howDataIsRead && (
        <div className="space-y-1">
          <strong className="text-white text-xs md:text-sm block">How the Data is Read:</strong>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            {phase.howDataIsRead}
          </p>
        </div>
      )}

      {/* The SQL Query Block (إذا وجد) */}
      {phase.sqlQuery && (
        <div className="space-y-2">
          {phase.sqlQueryIntro && (
            <p className="text-xs md:text-sm text-zinc-300">
              <strong className="text-white">The SQL Query: </strong>
              {phase.sqlQueryIntro}
            </p>
          )}
          <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto">
            {phase.sqlQuery}
          </div>
        </div>
      )}

      {/* The Power of Visualization (إذا وجد) */}
      {phase.thePowerOfVisualization && (
        <div className="space-y-1">
          <strong className="text-white text-xs md:text-sm block">The Power of Visualization:</strong>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            {phase.thePowerOfVisualization}
          </p>
        </div>
      )}

      {/* Detailed Technical Steps (إن وُجدت) */}
{phase.detailedSteps && (
  <div className="space-y-3 pt-2">
    <strong className="text-white text-xs md:text-sm block font-mono text-emerald-400">
      {phase.detailedStepsTitle || 'Detailed Technical Steps:'}
    </strong>
    <ol className="space-y-3 text-xs md:text-sm text-zinc-300 list-decimal list-inside leading-relaxed">
      {phase.detailedSteps.map((step, sIdx) => (
        <li key={sIdx} className="space-y-1">
          <strong className="text-white font-semibold">{step.title}: </strong>
          <span>{step.desc}</span>
          {step.subPoints && (
            <ul className="pl-6 pt-1 space-y-1 list-disc list-inside text-zinc-400 text-xs">
              {step.subPoints.map((sub, subIdx) => (
                <li key={subIdx}>{sub}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  </div>
)}

      {/* Real Value Box (إذا وجد) */}
      {phase.realValue && (
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-850 text-xs md:text-sm text-zinc-300 leading-relaxed">
          <strong className="text-amber-400 block mb-1">
            {phase.realValueTitle || 'The Real Value:'}
          </strong>
          {phase.realValue}
        </div>
      )}

      {/* Key Actions List (إذا وجد) */}
      {phase.keyActions && phase.keyActions.map((action, aIdx) => (
        <div key={aIdx} className="text-xs font-mono text-emerald-400 flex items-start gap-1.5 pt-1">
          <span className="font-bold">Key Action:</span>
          <span>{action}</span>
        </div>
      ))}

                      {/* Phase Image Container */}
                      {phase.imagePath && (
                        <div className="space-y-2 pt-2">
                          <div
                            onClick={() => setLightboxImg(phase.imagePath ? getImgSrc(phase.imagePath) : null)}
                            className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-pointer group"
                          >
                            <img
                              src={getImgSrc(phase.imagePath)}
                              alt={phase.name}
                              className="w-full h-full object-contain group-hover:scale-101 transition-transform"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/Website audit.jpg';
                              }}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-xs font-mono text-white bg-black/80 px-3 py-1.5 rounded-lg border border-zinc-700">
                                Click to inspect screenshot ↗
                              </span>
                            </div>
                          </div>
                          {phase.figureCaption && (
                            <div className="text-[11px] font-mono text-zinc-500 italic">
                              {phase.figureCaption}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex items-start gap-4">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    Conclusion & Key Deliverables
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 mt-1 font-medium">
                    {selectedProject.keyTakeaway}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX FOR SINGLE IMAGE EXPANSION */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImg} alt="Enlarged Phase Evidence" className="max-w-full max-h-full object-contain" />
          </div>
          <span className="absolute top-6 right-8 text-zinc-400 font-mono text-sm">Click anywhere to close ✕</span>
        </div>
      )}

      <Footer />
    </div>
  );
}