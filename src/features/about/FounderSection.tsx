import React from 'react';
import TeamsHendri from '@/assets/images/teams/teams_hendri.jpg';
import TeamsDito from '@/assets/images/teams/teams_dito.jpeg';
import TeamsDhimas from '@/assets/images/teams/teams_dhimas.jpeg';
import { motion } from 'framer-motion';
import MemberCard from '@/components/common/MemberCard';

const member = [
  {
    image: TeamsHendri,
    name: 'Hendri Wahyu Perdana',
    occupation: 'Chief Executive Officer',
    description:
      'Teknologi membuka peluang dan solusi dalam menghadapi perkembangan dunia digital.',
  },
  {
    image: TeamsDito,
    name: 'Dito Ardi Pratama',
    occupation: 'Human Resource Development',
    description:
      'Sikap positif menciptakan lingkungan kerja yang produktif dan memungkinkan pertumbuhan yang berkelanjutan.',
  },
  {
    image: TeamsDhimas,
    name: 'Dhimas Afrisetiawan',
    occupation: 'Chief Operations Officer',
    description:
      "Kolaborasi yang baik tidak hanya meningkatkan produktivitas, tetapi juga mendorong inovasi dan keberhasilan bersama.",
  },
];

// Variants for stagger effect and individual item animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each card animation
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function FounderSection(): React.ReactElement {
  return (
    <div className="my-8 flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-start mb-4">Our Founders</h3>
      <motion.div
        className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {member.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: [null, 0.9, 1.1] }}
            transition={{ duration: 0.3 }}
            className='grow-1'>
            <MemberCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default FounderSection;
