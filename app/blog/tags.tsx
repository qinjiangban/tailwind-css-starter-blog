import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Tags() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>


      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 ">

{/*         <div className="space-x-2 pb-8 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
            标签
          </h1>
        </div> */}

        <div className="flex  flex-wrap">
          <div className="mr-5">
            <Link
              href={`/blog`}
              className="text-lg font-semibold uppercase text-orange-500 "
              aria-label={`View posts tagged ${sortedTags}`}
            >
              所有博客
            </Link>
          </div>

          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2">
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </div>
            )
          })}
        </div>


      </div>


    </>
  )
}
