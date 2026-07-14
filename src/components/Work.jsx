import React from 'react'
import { motion as m } from 'framer-motion'
import { BsCalendar3, BsCheck2Circle } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'

const responsibilities = [
  'Developed and maintained web applications including a Learning Management System (LMS), Warehouse Management System (WMS), and Garment Automation System.',
  'Built responsive and user-friendly interfaces using modern frontend technologies.',
  'Collaborated with backend developers and designers to deliver scalable and efficient solutions.',
  'Worked on challenging real-world projects, improving problem-solving and development skills.'
]

const Work = () => {
  return (
    <m.section
      aria-labelledby="work-heading"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto w-full max-w-6xl pb-24 pt-2 md:pt-6"
    >
      <div className="flex flex-col items-center">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-pink-500 md:text-sm">Career journey</p>
        <h1 id="work-heading" className="gradient text-center text-title font-bold">WORK EXPERIENCE</h1>
        <div className="mt-2 h-[3px] w-[50px] bg-gradient"></div>
      </div>

      <div className="relative mx-auto mt-8 max-w-5xl md:mt-12">
        <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 hidden w-1 rounded-full bg-gradient md:block"></div>

        <m.article
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="relative md:ml-16"
        >
          <div aria-hidden="true" className="absolute -left-[58px] top-8 hidden h-8 w-8 rounded-full border-4 border-white bg-gradient shadow-lg dark:border-dark-bg md:block"></div>

          <div className="btn-shadow overflow-hidden rounded-3xl border border-pink-100 bg-white/80 dark:border-slate-600 dark:bg-slate-800/80">
            <div className="h-2 bg-gradient"></div>

            <div className="p-5 sm:p-7 lg:p-9">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="flex gap-4">
                  <div className="bg-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-lg sm:h-14 sm:w-14">
                    <MdWorkOutline aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">LOM Tech</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-800 dark:text-white sm:text-sub-title">Frontend Developer</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Building practical digital systems for real-world teams.</p>
                  </div>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-bold text-primary-dark dark:border-pink-300/30 dark:bg-slate-700 dark:text-pink-200">
                  <BsCalendar3 aria-hidden="true" />
                  <time dateTime="2025-05">05/2025</time>
                  <span aria-hidden="true">—</span>
                  <time dateTime="2026-07">07/2026</time>
                </div>
              </div>

              <div className="my-7 h-px w-full bg-gradient opacity-30"></div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">What I contributed</h3>
                <ul className="mt-4 space-y-4">
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-200 sm:text-base">
                      <BsCheck2Circle aria-hidden="true" className="mt-1 shrink-0 text-lg text-pink-500" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </m.article>
      </div>
    </m.section>
  )
}

export default Work