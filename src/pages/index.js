              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '
              />
              <p className='my-4 text-base space-x-2 font-medium md:text-sm sm:text-xs text-justify'>
                Welcome to my portfolio! I am a passionate Full Stack Developer
                with a background in UX/UI design, dedicated to creating
                engaging and user centered digital experiences. With a solid
                foundation in Front End and Back End development, I blend my
                technical expertise with a fresh perspective on UX/UI design to
                deliver intuitive and visually appealing interfaces. Explore my
                more recent projects, showing my experience in web and mobile
                development.
              </p>
              <div className='flex items-center space-x-4 self-start mt-2 lg:self-center'>
                <Link
                  href='/CV.Volonterio.Gonzalo.pdf'
                  target={'_blank'}
                  aria-label='My Cv'
                  className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                '
                  download={true}
                >
                  Summary <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href='mailto:volonteriogonzalo.dev@gmail.com'
                  target={'_blank'}
                  aria-label='To talk to me'
                  className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                '
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
