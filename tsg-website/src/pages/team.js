import React from 'react';
import Layout from '@theme/Layout';
import styles from '../components/HomepageFeatures/team.module.css'; // Optional for custom styling

    // Data for the team members
const TeamMembers = {
    exec: [
        {
            name: 'Thomas Lyman',
            title: 'Co-President',
            img: '/img/headshot.jpg', 
        },
        {
            name: 'Pawlos Belay',
            title: 'Co-President',
            img: '/img/headshot.jpg',
        },
        {
            name: 'Alex Chung',
            title: 'VP of Technology',
            img: '/img/headshot.jpg',
        },
        {
            name: 'Rohan Misra',
            title: 'VP of Recruitment',
            img: '/img/headshot.jpg',
        },
        {
            name: 'Daniel Brock',
            title: 'VP of Consulting',
            img: '/img/headshot.jpg',
        },
        {
            name: 'Charlie Aghadami',
            title: 'VP of Finance',
            img: '/img/headshot.jpg',
        },
        {
            name: 'Grace Periera',
            title: 'VP of Marketing and Communications',
            img: '/img/headshot.jpg',
        },
    ],
    developers: [
        {
            name: 'Almas Telek',
            title: '',
            img: '/img/headshot.jpg',
        },
        {
          name: 'Seton Gerrity',
          title: '',
          img: '/img/headshot.jpg',
        },{
            name: 'Rohan Singh',
            title: '',
            img: '/img/headshot.jpg',
        },{
          name: 'Eshaan Jassal',
          title: '',
          img: '/img/headshot.jpg',
        },{
          name: 'Jay Sikka',
          title: '',
          img: '/img/headshot.jpg',
        },{
          name: 'Rahil Karkar',
          title: '',
          img: '/img/headshot.jpg',
        },
    ],
    consultants: [
        {
          name: 'Aaya Abugabal',
          title: '',
          img: '/img/headshot.jpg',
        },
        {
          name: 'Erik Polasek',
          title: '',
          img: '/img/headshot.jpg',
        },
        {
          name: 'Luca Marques',
          title: '',
          img: '/img/headshot.jpg',
        },
        {
            name: 'Oliver Andress',
            title: '',
            img: '/img/headshot.jpg',
        },
        {
          name: 'Sid Pradhan',
          title: '',
          img: '/img/headshot.jpg',
        },
        {
          name: 'Tejas Charaipotra',
          title: '',
          img: '/img/headshot.jpg',
        },
    ]
};

const TeamSection = ({ title, members, showTitle }) => {
  const isUneven = members.length % 2 !== 0;

  return (
    <div className={styles.teamSection}>
      {showTitle && <h2 className={styles.sectionHeader}>{title}</h2>}
      <div className={`${styles.teamGrid} ${isUneven ? styles.unevenGrid : ''}`}>
        {members.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <img src={member.img} alt={`${member.name}`} className={styles.teamImage} />
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MeetTheTeam() {
  return (
    <Layout title="Meet the Team">
      <div className={styles.container}>
        <h1 className={styles.header}>Meet the Team</h1>
        {/* Executives section */}
        <TeamSection title="Executive Board" members={TeamMembers.exec} showTitle={true} />
        {/* Developers section */}
        <TeamSection title="Developers" members={TeamMembers.developers} showTitle={true} />
        {/* Consultants section */}
        <TeamSection title="Consultants" members={TeamMembers.consultants} showTitle={true} />
      </div>
    </Layout>
  );
}
