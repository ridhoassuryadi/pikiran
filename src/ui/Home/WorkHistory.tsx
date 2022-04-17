import { workHistories } from '~/modules/bio/data/workData'
import { WorkHistories, WorkHistory } from '~/modules/bio/models/workModel'
export type WorkHistoryListProps = {
  workHistories: WorkHistories
}

export function WorkHistory({ href, company, role, date }: WorkHistory) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-start space-x-6 group justify-between relative py-2 border-b border-gray-800 border-dashed first:pt-0 last:border-b-0"
    >
      <div>
        <p className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
          {company}
        </p>
        <p className="flex-none text-dark-gray-400">{role}</p>
      </div>
      <span className="flex-none font-mono text-quaternary">{date}</span>
    </a>
  )
}

export function WorkHistoryList() {
  return (
    <div className="flex flex-col space-y-3">
      {workHistories.map((job) => (
        <WorkHistory
          href={job.href}
          company={job.company}
          role={job.role}
          date={job.date}
          key={job.href}
        />
      ))}
    </div>
  )
}
