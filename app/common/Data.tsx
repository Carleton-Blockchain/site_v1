"use client";
import { FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

export const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/carleton-blockchain/',
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://x.com/carletonbchain',
      icon: () => (
          <svg width="24" height="24" viewBox="0 0 20 22" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
      ),
      label: 'X'
    },
    {
      href: 'https://www.instagram.com/carletonblockchain/',
      icon: FaInstagram,
      label: 'Instagram',
    },
    {
      href: 'https://discord.gg/9FgYbBfhK2',
      icon: FaDiscord,
      label: 'Discord',
    },
  ];

 export const teamData = [
    {
      name: 'Rodney Shen',
      role: 'Founder',
      program: 'Computer Science',
      year: '3rd Year',
      image: '/pfp/rodney.jpg',
      linkedin: 'https://www.linkedin.com/in/rodneyshenn/',
      x: 'https://x.com/992rodney',
      website: 'https://rodneyshen.netlify.app'
    },
    {
      name: 'Ansh Kakkar',
      role: 'Developer',
      program: 'Computer Science',
      year: '2nd Year',
      image: '/pfp/ansh.jpeg',
      linkedin: 'https://www.linkedin.com/in/ansh-kakkar/',
      website: 'https://www.anshkakkar.dev/'
    },
    {
      name: 'Ryan Zhu',
      role: 'Developer',
      program: 'Computer Science',
      year: '2nd Year',
      image: '/pfp/ryan.jpg',
      linkedin: 'https://www.linkedin.com/in/ryanzhu917/',
      website: 'https://ryanzhu.dev/'
    },
    {
      name: 'Shivam Karavadra',
      role: 'Developer',
      program: 'Computer Science',
      year: '3rd year',
      image: '/pfp/shivam.webp',
      linkedin: 'https://www.linkedin.com/in/shivam-karavadra-64986621a/',
    },
    {
      name: 'Karim Saadeh',
      role: 'Advisor',
      year: 'Alumni',
      program: 'Unblocked Consulting',
      image: '/pfp/karim.webp',
      linkedin: 'https://www.linkedin.com/in/karimsaadeh/',
      x: 'https://x.com/CrabMan_eth',
      website: 'https://dot.cards/karimsaadeh'
    },
  ];

 export const faqs = [
      {
          question: "What is Carleton Blockchain?",
          answer: "Carleton Blockchain is a student-led organization dedicated to educating and connecting students interested in blockchain technology and cryptocurrency. We host workshops, events, and provide networking opportunities with industry professionals."
      },
      {
          question: "Do I need prior blockchain knowledge to join?",
          answer: "Not at all! We welcome members of all experience levels, from complete beginners to blockchain experts. Our community is focused on learning and growing together."
      },
      {
          question: "How can I get involved?",
          answer: "You can join our Discord community, attend our events, and participate in our workshops. We also offer opportunities to join our executive team during recruitment periods."
      },
      {
          question: "What kind of events do you organize?",
          answer: "We plan on starting with technical workshops, down the line we will be looking to host industry speaker sessions, networking events, hackathons, and social gatherings. Our events cover various aspects of blockchain technology, cryptocurrency, and Web3."
      },
      {
          question: "Is membership free?",
          answer: "Yes! Membership is completely free for all Carleton University students. Just join our Discord and start participating in our community."
      },
      {
        question: "Will you teach me how to find x1000 memecoins ?",
        answer: "No."
    },
  ];

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    program?: string;
    year?: string;
    linkedin?: string;
    x?: string;
    website?: string;
  }