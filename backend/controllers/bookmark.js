import User from "../models/user.js"
import Paper from "../models/paper.js"

const saveBookmarkController = async (req, res) => {
    try {
        const { email, title, author } = req.body
        const user = User.findOne({ email })
        user.bookmarks.push(Paper.findOne({ title, author }))
        await user.save()
        res.status(200).json({ message: "Bookmark saved successfully" })
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

const unsaveBookmarkController = async (req, res) => {
    try {
        const { email, title, author } = req.body
        const user = User.findOne({ email })
        user.bookmarks = user.bookmarks.filter(bookmark => bookmark.title !== title && bookmark.author !== author)
        await user.save()
        res.status(200).json({ message: "Bookmark removed successfully" })
    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong" })
    }  
}

export {
    saveBookmarkController,
    unsaveBookmarkController
}