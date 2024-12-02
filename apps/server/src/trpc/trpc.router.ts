import { INestApplication, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrpcService } from "./trpc.service";
import * as trpcExpress from "@trpc/server/adapters/express"

@Injectable()
export class TrpcRouter {
    constructor(private readonly trpcService: TrpcService, private readonly prismaService: PrismaService) { }
    appRouter = this.trpcService.router({
        getUsers: this.trpcService.procedure.query(async () => await this.prismaService.user.findMany({
            include: {
                profile: true
            }
        }))
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/trpc', trpcExpress.createExpressMiddleware({
            router: this.appRouter
        }))
    }
}

export type AppRouter = TrpcRouter["appRouter"]