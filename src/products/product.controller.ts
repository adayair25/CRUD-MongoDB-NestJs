import {
  Get,
  Param,
  Controller,
  Post,
  Delete,
  Body,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-products';
import { UpdateProductDto } from './dto/update-products';

/**
 * Controller for managing products.
 */
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * Get all products.
   * @returns {Promise<Product[]>} The list of products.
   */
  @Get()
  async findAll() {
    return this.productService.findall();
  }

  /**
   * Get a product by its ID.
   * @param {string} id - The ID of the product.
   * @returns {Promise<Product>} The product with the specified ID.
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  /**
   * Create a new product.
   * @param {CreateProductDto} createProductDto - The data for creating the product.
   * @returns {Promise<CreateProductDto>} The created product.
   */
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  /**
   * Update a product by its ID.
   * @param {string} id - The ID of the product to update.
   * @param {UpdateProductDto} updateProductDto - The updated data for the product.
   * @returns {Promise<void>}
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  /**
   * Remove a product by its ID.
   * @param {string} id - The ID of the product to remove.
   * @returns {Promise<void>}
   */
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
