import jsonp from 'jsonp'

class RedditApi {
  constructor() {
    this.redditURL = 'https://www.reddit.com/r/perfectloops.json?jsonp=callback'
  }
  load() {
    return new Promise((resolve, reject) => {
      jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
        err ? reject(err) : resolve(data.data.children)
      })
    })
  }
}

export default new RedditApi()
