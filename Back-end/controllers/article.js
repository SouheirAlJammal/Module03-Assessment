import db from '../models/index.js'

const { UserModel, ArticleModel } = db

const createArticle = async (req, res) => {
    const { image,
        title,
        category,
        body,
        author } = req.body

    try {

        // creation the article
        const article = await ArticleModel.create({
            image,
            title,
            category,
            body,
            author
        });
        res.status(201).json({ message: 'added article', data: article })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }

}

const findAllArticles = async (req, res) => {
    try {
        const articles = await ArticleModel.findAll()
        res.status(200).json({ data: articles })
    } catch (error) {
        console.log(error)
    }
}



const findOneArticle = async (req, res) => {
    const { id } = req.body
    try {
        const article = await ArticleModel.findByPk(id)
        res.status(200).json({ data: article })
    } catch (error) {
        console.log(error)
    }
}



const deleteOneArticle = async (req, res) => {
    const { id } = req.body
    try {
        const findedArticle = await ArticleModel.findByPk(id);

        await findedArticle.destroy()
        res.status(200).json({ message: 'article deleted successfuly' })
    } catch (error) {
        console.log(error)
    }
}


const updateArticle = async (req, res) => {
    const { id , image,
        title,
        category,
        body,
        author} = req.body
    try {
        const article = await ArticleModel.findByPk(id);

        if (!article) {
            return res.status(404).json({ error: 'article not found' });
        }
        //update article 
        const editArticle = await ArticleModel.update({
            image,
            title,
            category,
            body,
            author
        },
            {
                where: { id: id }
            })
        //condition check if i have updated 
        if (editArticle)
            return res.status(200).json({ message: 'article updated successfully' });
        else
            return res.status(400).send('Error occured!')
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}

export { createArticle, findAllArticles, findOneArticle, deleteOneArticle, updateArticle };