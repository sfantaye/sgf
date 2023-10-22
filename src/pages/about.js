/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/pp.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Gonzalo Volonterio | About me</title>
        <meta
          name='description'
          content='Gonzalo Volonterio Portifolio, full stack developero, web developer, mobile developer, front-end, back-end'
        />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Passion fuels purpose!'
            delay={700}
            className='mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='my-1 text-base space-x-2 font-medium md:text-sm sm:text-xs text-justify  whitespace-normal'>
                Hello, I'm Sintayehu G. Fantaye, a Back-end Developer, Data Scientist and Machine Learning Engineer with more
                than 3 years of experience in web development and Data Science.
            
              </p>
              <p className='my-1 text-base space-x-2 font-medium md:text-sm sm:text-xs text-justify whitespace-normal'>
                My professional journey is fueled by a deep fascination with the intricacies of 
                Back-end Web Architectures, the versatility of Python programming, and the potential of 
                machine learning + data science. I am wholeheartedly dedicated to utilizing these passions 
                to drive positive change, both for individuals and industries. I believe that technology is
                 the canvas upon which we can paint a brighter future, where innovation leads to progress.
                  I invite you to connect, so we can embark on this ever-evolving digital adventure together, 
                  exploring new horizons and discovering the endless possibilities of the digital realm. 
              </p>
              <p className='my-1 text-base space-x-2 font-medium md:text-sm sm:text-xs text-justify whitespace-normal '>
                My main priority is to keep up to date with the latest
                industrytrends updating myself to develop and grow
                professionally.I have ability to work in group, empathy and
                problem solving.
              </p>
            </div>
            <div
              className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            '
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='gonzalovolonterio-dev'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2
                  className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '
                >
                  Satisfied Customers
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2
                  className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '
                >
                  Complete Projects
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                '
                >
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
