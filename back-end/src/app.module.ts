import { CacheModule, Module } from '@nestjs/common'
import ApiModules from './api'
import { MysqlModule, MongoModule } from '@/database'
import { appCacheInterceptor, appResponseInterceptor, appExceptionFilter } from '@/middle'
import { AppController } from '@/app.controller'

const moduleMetaData = {
  imports: [ ...ApiModules, MysqlModule, MongoModule, CacheModule.register() ],
  controllers: [ AppController ],
  providers: [ appResponseInterceptor, appCacheInterceptor, appExceptionFilter ],
}

@Module(moduleMetaData)
export class AppModule {}
