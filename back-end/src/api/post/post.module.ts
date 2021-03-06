import { CacheModule, forwardRef, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostController } from './post.controller'
import { PostService } from './post.service'
import { PostEntity as entity } from '@/entity'
import { UserModule } from '@/api/user/user.module'

const PostEntity = TypeOrmModule.forFeature([ entity ])

@Module({
  imports: [ PostEntity, forwardRef(() => UserModule), CacheModule.register() ],
  controllers: [ PostController ],
  providers: [ PostService ],
  exports: [ PostService ]
})
export class PostModule {}