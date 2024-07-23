interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'HaYi',
    description: `为Lens中文用户构建`,
    imgSrc: '/static/images/hayi.png',
    href: 'https://coinipfs.com',
  },
  {
    title: 'QianCset',
    description: `去中心化房屋租赁平台`,
    imgSrc: '/static/images/qiancset.png',
    href: 'https://github.com/qiancset',
  },
]

export default projectsData
