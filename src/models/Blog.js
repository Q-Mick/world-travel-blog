export class Blog {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tag = data.tags
    this.published = data.published 
    this.creatorId = data.creatorId
    this.profilePic = data.creator.picture
    this.creatorName = data.creator.name
    // this.creator = new Profile(data.creator)
  }
}
