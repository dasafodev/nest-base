import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsEmpty()
  @ApiProperty()
  readonly id: number;
}
