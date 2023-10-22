import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    '
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
          Experience
        </h2>

        <div
          ref={ref}
          className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '
          />

          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 text-justify whitespace-normal'>
            <Details
              position='Web Developer'
              company='Ministry of Innovation and Technology'
              companyLink=''
              time='2020 - present'
              address='Argentina for the world'
              work="Responsible for supervising projects through each phase of the systems development lifecycle.
                    Responsible for designing the architecture of attractive and functional websites and mobile applications.
                    Responsible for the creation of servers and databases for websites and mobile applications.
                    Responsible for the maintenance of websites and mobile applications to ensure their proper functioning, optimization of mobile-friendly websites.
                    Responsible for the development of application programming interfaces (APIs).
                    Responsible for developing updates to improve the usability and capabilities of a website's back end.
                    Responsible for the design and implementation of comprehensive unit tests with Jest, React Test, Enzyme to ensure the reliability and robustness of the software."
            />

            <Details
              position='Developer'
              company='Minnovation'
              companyLink=''
              time='2021 - 2022'
              address='Argentina'
              work='Mainly responsible for the front end development and implementation of BFF (back end for front end), contributing significantly to technologies and user interfaces. 
                    Design and implement comprehensive unit tests with Jest to ensure software reliability and robustness.'
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
