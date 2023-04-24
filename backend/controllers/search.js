import deepSearch from "../utils/deep-search.js";

const searchController = async (req, res) => {
    try {
        const { query } = req.body;
        const response = await deepSearch(query);
        res.send(response);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
      }
}

export default searchController