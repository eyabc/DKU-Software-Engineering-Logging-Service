import { Module, VuexModule, Action, MutationAction } from 'vuex-module-decorators'

import { commentService } from '@/services'
import { FETCH_COMMENT, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../types'
import { Comment, CommentVO } from '@Domain'

@Module
export default class CommentStore extends VuexModule {

  commentList: Comment[] = []

  @MutationAction
  async [FETCH_COMMENT] (post: number) {
    return { commentList: await commentService.findCommentByPost(post) }
  }

  @Action
  async [ADD_COMMENT] (params: CommentVO) {
    await commentService.create(params)
    this[FETCH_COMMENT](params.post)
  }

  @Action
  [UPDATE_COMMENT] () { }

  @Action
  [DELETE_COMMENT] () { }

}