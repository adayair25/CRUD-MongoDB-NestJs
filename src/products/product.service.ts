import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateProductDto } from './dto/update-products';
import { CreateProductDto } from './dto/create-products';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findall(): Promise<Product[]> {
    const products = await this.productModel.find().lean();
    console.log(products);
    return this.productModel.find().lean();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).lean();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.updateOne({ _id: id }, updateProductDto).lean();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.deleteOne({ _id: id }).lean();
  }
}
