import { Module } from '@nestjs/common';
import { MessageGateway } from './gateways/message.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [MessageGateway],
})
export class AppModule {}
