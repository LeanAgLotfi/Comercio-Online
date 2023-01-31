const ProductModel = require("../../models/product.models") ;

class ProductMongoManager {
    async getAll() {
        try {
            const Products = await ProductModel.find();
            return Products;
        } catch (error) {
            throw new Error(`Couldn't read file ${error}`)
        }
    }

    async save(obj) {
        try {
            const ProductCreated = await ProductModel.create(obj);
            return ProductCreated;
        } catch (error) {
            throw new Error(`Error saving: ${error}`);
        }
    }

    async updateById(info, id) {
        try {
            const ProductUpdated = await ProductModel.findByIdAndUpdate(id, info,{new:true});
            return ProductUpdated;
        } catch (error) {
            throw new Error(`Error updating ${error}`);
        }
    }

    async updateById(info, id) {
        try {
            const ProductUpdated = await ProductModel.findByIdAndUpdate(id, info,{new:true});
            return ProductUpdated;
        } catch (error) {
            throw new Error(`Error updating ${error}`);
        }
    }

    async deleteById(id) {
        try {
            const response = await ProductModel.findByIdAndDelete(id);
            return `Element with code: ${response.code} deleted successfully`;
        } catch (error) {
            throw new Error(`Error deleting: ${error}`);
        }
    }

    async deleteAll() {
        try {
            await ProductModel.deleteMany({});
            return "delete all successfully";
        } catch (error) {
            throw new Error(`Error deleting: ${error}`);
        }
    }

}

module.exports = ProductMongoManager;
