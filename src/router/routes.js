const _import = file => resolve => require([`@views/${file}`], resolve)

export default [{
  path: '/',
  component: _import('layout/login'),
  alias: '/login'
}, {
  path: '/backstage',
  component: _import('layout/backstage'),
  children: [
    {
      name: 'certificate',
      path: '/certificate',
      component: _import('certificate')
    }, {
      name: 'collegeintro',
      path: '/collegeintro/:category',
      component: _import('collegeIntro')
    }, {
      name: 'educationnews',
      path: '/educationnews/:category',
      component: _import('educationNews')
    }, {
      name: 'studentnews',
      path: '/studentnews/:category',
      component: _import('studentNews')
    }, {
      name: 'partynews',
      path: '/partynews/:category',
      component: _import('partyNews')
    }, {
      name: 'cooperateinfo',
      path: '/cooperateinfo/:category',
      component: _import('cooperateInfo')
    }, {
      name: 'gallery',
      path: '/gallery/:category',
      component: _import('gallery')
    }, {
      name: 'modified',
      path: '/modified/:category',
      component: _import('modified')
    }, {
      name: 'teacherinfo',
      path: '/teacherInfo',
      component: _import('teacherInfo')
    }, {
      name: 'friendlylink',
      path: '/friendlyLink',
      component: _import('friendlyLink')
    }, {
      name: 'collegenews',
      path: '/collegeNews',
      component: _import('collegeNews')
    }, {
      name: 'reportblog',
      path: '/reportBlog',
      component: _import('reportBlog')
    }, {
      name: 'activity',
      path: '/activity',
      component: _import('activity')
    }, {
      name: 'banners',
      path: '/banners',
      component: _import('banners')
    }, {
      name: 'recruit',
      path: '/recruit/:category',
      component: _import('recruit')
    }, {
      name: 'category',
      path: '/category',
      component: _import('category')
    }
  ]
}]
