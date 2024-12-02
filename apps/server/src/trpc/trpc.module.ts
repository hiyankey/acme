import { Global, Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { PrismaService } from '../prisma/prisma.service';
@Global()
@Module({

  providers: [TrpcService, TrpcRouter, PrismaService],
  exports: [TrpcRouter]
})
export class TrpcModule { }
