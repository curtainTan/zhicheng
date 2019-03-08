
const host = 'http://119.23.54.128:8000'



const wxapi = {
  //文章列表`${host}/articles/`, { params : { page: about.page, lable : about.label } 
  homeGetArtList: `${host}/articles/`,
  //搜索`${host}/articles/`, { params : { search: data.search, city : data.city , page : data.page } }
  search: `${host}/articles/`,
  //一片文章{get}`${host}/articles/${id}/`
  article: `${host}/articles/`,
  //登录
  login: `${host}/login/`,
  //自动登录
  autoLogin: `${host}/users/1/`,
  //获取评论
  getComment: `${host}/Comment/`,
  //发表评论
  postcomment: `${host}/upcom/`
}


module.exports = {
  allapi : wxapi
}