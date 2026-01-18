import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><b>When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) or how it (databases, user authentication, logic)? Explain why.</b></p>
        
        <p>I am personally more drawn to the user interface and layout because they create the first impression of a website. A clean and visually appealing design makes a site more engaging and easier to use. However, I believe a truly “perfect” website must balance both design and functionality. The backend should work reliably to fully support the frontend experience.</p>
        
        <p><b>Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?</b></p>

        <p>I am eager to learn modern web technologies that are widely used in today’s development industry such as frameworks like React and Next.js. I am also interested in Tailwind CSS for styling and Node.js for handling server-side logic.</p>

        <p><b>What is one specific feature you’ve seen on a modern website that you’ve always wondered how to build?</b></p>

        <p>I've always wanted to learn API integration which lets websites connect to real services like maps, payments, or social media. Learning this would help me build more functional and realistic websites.</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}