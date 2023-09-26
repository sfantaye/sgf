import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/realtstate.png';
import project2 from '../../public/images/projects/traveladvisore.png';
import project3 from '../../public/images/projects/unichat.png';
import project4 from '../../public/images/projects/jobifymern.png';
import project5 from '../../public/images/projects/onlyfans.png';
import project6 from '../../public/images/projects/jobstrackingapp.png';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className='w-full flex items-center relative rounded-br-2xl justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      '
      />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            {' '}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base
            '
          >
            Visit the Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Gonzalo Volonterio | My Projects</title>
        <meta
          name='description'
          content='Gonzalo Volonterio Portifolio, Full Stack Developer, Web developer, Mobile developer, Front End, Back End'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination in every pixel!!'
            delay={700}
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 text-justify whitespace-normal '>
            <div className='col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Real Estate'
                img={project1}
                summary='Real Estate App with rental homes and for sale properties, advanced searching, filtering, property details page with an image carousel.'
                link='https://real-estate-nextjs-app.vercel.app/'
                github='https://github.com/GonzaloVolonterio/real-estate-nextjs-app'
                type='Featured Project'
              />
            </div>
            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Travel Advisor'
                img={project2}
                summary='Application using Google Maps with Geolocation with advanced searching, filtering, fetching places, restaurants, hotels, attractions.'
                link='https://real-estate-nextjs-app.vercel.app/'
                github='https://github.com/GonzaloVolonterio/real-estate-nextjs-app'
                type='Featured Project'
              />
            </div>
            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Unichat Application'
                img={project3}
                summary='Full Stack: Realtime Chat Application with social authentication including Google and Facebook using Firebase, online statuses, great design, and functionality, image support, sound notifications, the ability to create multiple rooms, and dedicated chat with APIs/sockets. '
                link='https://unichatreactchat.netlify.app/'
                github='https://github.com/GonzaloVolonterio/react-unichat'
                type='Proyect'
              />
            </div>

            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Jobify Mern'
                img={project4}
                summary='Full Stack application:User creation to be able to use the functionalities (create, modify and delete) job offers with statistical graph.'
                link='https://jobifymern.onrender.com'
                github='https://github.com/GonzaloVolonterio/jobify-mern'
                type='Featured Project'
              />
            </div>
            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='OnlyFans Clone'
                img={project5}
                summary='FullStack application: User creation with authentication method, creation functionalities, posts, editing, deletion of images, videos and monitoring of user accounts. Scan QR code with Expo.'
                link='https://expo.dev/@gonzalovolonterio/react-native-onlyfans-clone-app?serviceType=classic&distribution=expo-go'
                github='https://github.com/GonzaloVolonterio/react-native-onlyfans-clone-app'
                type='Proyect'
              />
            </div>
            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Jobs Tracking App for mobile'
                img={project6}
                summary='Jobs is tracking app for mobile where you can search,advanced filtering  and share the latest offers work based on the Api of RapidApi. Scan QR code with Expo'
                link='https://expo.dev/@gonzalovolonterio/react-native-jobs?serviceType=classic&distribution=expo-go'
                github='https://github.com/GonzaloVolonterio/react-native-jobs-app'
                type='Proyect'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

