import $http from 'axios'
import { Base64 } from 'js-base64'
import { AccessToken } from "@/middleware/store/StateType";
import { GithubRepository, GithubProfile, GithubContent } from '@Domain/Github';

const baseURI = '/api/github'

interface ContentVO {
  user: string
  repo: string
  path: string
}

const Github = class {
  async getRepo (user: string): Promise<Array<GithubRepository>> {
    const { data } = await $http.get(`${baseURI}/repo/${user}`)
    console.log(data.result)
    return data.result
  }

   async getContent (params: ContentVO): Promise<GithubContent> {
    const { data } = await $http.get(`${baseURI}/content`, { params })
    return data.result
  }

  async getMD (params: ContentVO): Promise<string> {
    const result = await this.getContent(params)
    return Base64.decode(result.content!)
  }

  async getProfile (access_token: AccessToken): Promise<GithubProfile> {
    const params = { access_token }
    const { data } = await $http.get(`${baseURI}/profile`, { params })
    return data.result
  }
}

const githubService = new Github();

export default githubService
