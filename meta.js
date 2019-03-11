// 导出自定义的 Inquirer.js 的命令行交互配置
module.exports = [{
    name: 'name',
    type: 'input',
    required: true,
    message: 'Project name',
  },
  {
    name: 'cName',
    type: 'input',
    required: true,
    message: 'Project chinese name'
  },
  {
    name: 'description',
    type: 'input',
    required: false,
    message: 'Project description',
    default: 'A ECMAScript6 MPA project',
  },
  {
    name: 'author',
    type: 'input',
    message: 'Author',
  },
  {
    name: 'gitRemote',
    type: 'input',
    message: 'git remote',
  }
]