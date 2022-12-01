export class UserInfo {
  constructor({ usernameSelector, userActivitySelector }) {
    this._username = document.querySelector(usernameSelector)
    this._userActivity = document.querySelector(userActivitySelector)
  }

  getUserInfo() {
    return {
      username: this._username.textContent,
      activity: this._userActivity.textContent
    }
  }
  setUserInfo({ username, activity }) {
    this._username.textContent = username
    this._userActivity.textContent = activity
  }
}