const getters = {
  copyright: state => state.app.copyright,
  recordNumber: state => state.user.recordNumber,
  gitHubUser: state => state.user.gitHubUser,
  showQQGroup: state => state.user.showQQGroup,
  thirdPartySite: state => state.user.thirdPartySite
}
export default getters
