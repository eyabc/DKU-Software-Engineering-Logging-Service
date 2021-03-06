import $http from 'axios'
import { Comment, CommentVO } from '@Domain'
import { responseProcessor } from '@/helper'

const baseURI = '/api/comment'

export default Object.freeze({

  async findCommentByPost (postIdx: number): Promise<Comment[]> {
    return (await responseProcessor<Comment[]>($http.get(`${baseURI}s/${postIdx}`), 200))!
  },

  async create (params: CommentVO): Promise<Comment[]> {
    return (await responseProcessor<Comment[]>($http.post(baseURI, params), 201))!
  }
})