const PostRepository = require('../repository/post-repository.js');
const HashtagRepositroy = require('../repository/hashtag-repository.js');
class PostService {
    constructor() {
        this.postRepository = new PostRepository();
        this.hashtagRepository = new HashtagRepositroy();

    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g) //this regex extracts hashtags 
        // eliminate # from tags 
        tags = tags.map((tag) => {
            return tag.substring(1).toLowerCase();
        });
        const Post = await this.postRepository.create(data);

        // extract all already present Hashtags 
        const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        const titleOfAlreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);

        let newTags = tags.filter(tag => !titleOfAlreadyPresentTags.includes(tag));

        // Creates array of new tags object 
        newTags = newTags.map((tag) => {
            return {
                title: tag,
                Posts: [Post.id]
            }
        })

        // creation of newTags in bulk 
        const response = await this.hashtagRepository.bulkCreate(newTags);

        // update post id in alreadyPresentTags
        alreadyPresentTags.forEach(async tagObj=>{
            tagObj.Posts.push(Post.id);
            await tagObj.save();
        })
    }
}

module.exports = PostService;