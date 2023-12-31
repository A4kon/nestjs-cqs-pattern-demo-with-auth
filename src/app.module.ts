import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { CustomerModule } from './customer/customer.module';
import { ConfigurationModule } from './lib/config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigurationModule,
    AuthModule,
    CustomerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      context: ({ request, reply }) => ({ request, reply }),
      playground: true,
      introspection: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
