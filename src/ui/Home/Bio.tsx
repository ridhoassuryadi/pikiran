import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { MapPin } from 'react-feather'

import Button from '~ui/_base/Button'
import { Detail } from '~ui/_base/ListDetail/Detail'
import { TitleBar } from '~ui/_base/ListDetail/TitleBar'

import { WorkHistoryList } from './WorkHistory'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />
}

interface TableRowProps {
  href: string
  title: string
  date: string
  subtitle?: string
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className={
        'grid items-start grid-cols-1 gap-6 md:grid-cols-12 relative ' +
        props.customStyle
      }
      {...props}
    />
  )
}

const workHistory = [
  {
    href: 'https://github.com/mobile',
    title: 'Ruangguru',
    subtitle: 'Software Engineer (Frontend)',
    date: '2019—\u00a0\u00a0',
  },
  {
    href: 'https://kitabisa.com/',
    title: 'Kitabisa',
    subtitle: 'Frontend Engineer',
    date: '2018—19',
  },
  {
    href: 'https://buffer.com',
    title: 'STIKES Husada Borneo',
    subtitle: 'IT Support',
    date: '2017—18',
  },
  {
    href: 'https://buffer.com',
    title: 'KaosBagoes',
    subtitle: 'Graphic Designer',
    date: '\u00a0\u00a0\u00a02017',
  },
]

const speakingData = [
  {
    href: 'https://www.youtube.com/watch?v=AfDLlLtHX4U',
    title: 'Talk about technology',
    date: "June '19",
  },
  {
    href: 'https://museapp.com/podcast/51-personal-brand/',
    title: 'Belajar Koding Hari Gini',
    date: "July '18",
  },
]

export function Intro() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  return (
    <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        title="Home"
      />

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={titleRef} />

      <Detail.ContentContainer>
        <div className="pb-24 space-y-8 md:space-y-16">
          <SectionContainer>
            <SectionTitle />

            <SectionContent>
              <Image
                priority={false}
                src="/static/images/hello.png"
                width={54}
                height={62}
                quality={100}
                alt="Map of San Fran"
              />
              <div className="prose text-primary mt-4">
                <p>
                  Hey, I&apos;m Brian. I&apos;m a designer,{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://designdetails.fm"
                  >
                    podcaster
                  </a>
                  ,{' '}
                  <Link href="/writing" passHref>
                    <a>writer</a>
                  </Link>
                  , and{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/brianlovin"
                  >
                    software tinkerer
                  </a>
                  . I&apos;m currently building{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mobile"
                  >
                    native mobile apps at GitHub
                  </a>
                  .
                </p>
                <p>
                  Before GitHub, I co-founded{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://spectrum.chat"
                  >
                    Spectrum
                  </a>
                  , a platform for large-scale communities to have better public
                  conversations. Spectrum was acquired by GitHub in November,
                  2018.
                </p>
                <p>
                  Before Spectrum I designed payments experiences at Facebook,
                  working across Facebook, Messenger, WhatsApp, and Instagram. I
                  originally cut my teeth as the first product designer at{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://buffer.com"
                  >
                    Buffer
                  </a>
                  .
                </p>
                <p>
                  I also co-host the{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://designdetails.fm"
                  >
                    Design Details Podcast
                  </a>
                  , a weekly conversation about design process and culture.
                  Design Details is part of{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://spec.fm"
                  >
                    Spec.fm
                  </a>
                  , a podcast network for designers and developers, which I
                  co-founded in 2015.
                </p>
              </div>
              <div className="flex pt-6">
                <Button href="https://changelog.brianlovin.com">
                  View changelog
                </Button>
              </div>
            </SectionContent>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Interest</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'/twitter'}
                  title={'Twitter'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'/youtube'}
                  title={'YouTube'}
                  subtitle={'Subscribe'}
                  date={''}
                />
                <TableRow
                  href={'/github'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'/figma'}
                  title={'Figma'}
                  subtitle={'Follow'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'/twitter'}
                  title={'Twitter'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'/youtube'}
                  title={'YouTube'}
                  subtitle={'Subscribe'}
                  date={''}
                />
                <TableRow
                  href={'/github'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'/figma'}
                  title={'Figma'}
                  subtitle={'Follow'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src="/static/images/serpong.png"
                width={800}
                height={400}
                layout="responsive"
                className="rounded-2xl"
                quality={100}
                alt="Map of San Francisco with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>BSD, Indonesia</span>
              </p>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
              <WorkHistoryList />
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Speaking</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {speakingData.map((s) => (
                  <TableRow
                    href={s.href}
                    title={s.title}
                    date={s.date}
                    key={s.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
