import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostModule } from './post/post.module'
import { UtilModule } from './util/util.module'

@Module({
  imports: [PostModule, UtilModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
