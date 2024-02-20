import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateProductDto } from './dto/update-products';
import { CreateProductDto } from './dto/create-products';

/**
 * Service class for managing products.
 */
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  /**
   * Retrieves all products.
   * @returns A promise that resolves to an array of products.
   */
  async findall(): Promise<Product[]> {
    const products = await this.productModel.find().lean();
    console.log(products);
    return this.productModel.find().lean();
  }

  /**
   * Retrieves a product by its ID.
   * @param id - The ID of the product.
   * @returns A promise that resolves to the found product.
   */
  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).lean();
  }

  /**
   * Creates a new product.
   * @param createProductDto - The data for creating the product.
   * @returns A promise that resolves to the created product.
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  /**
   * Updates a product by its ID.
   * @param id - The ID of the product to update.
   * @param updateProductDto - The data for updating the product.
   * @returns A promise that resolves to the updated product.
   */
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.updateOne({ _id: id }, updateProductDto).lean();
  }

  /**
   * Removes a product by its ID.
   * @param id - The ID of the product to remove.
   * @returns A promise that resolves to the removed product.
   */
  async remove(id: string): Promise<Product> {
    return this.productModel.deleteOne({ _id: id }).lean();
  }
}
