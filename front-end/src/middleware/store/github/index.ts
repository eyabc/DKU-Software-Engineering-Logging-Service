import { Module, VuexModule,  MutationAction } from 'vuex-module-decorators'
import { FETCH_GITHUB_REPO } from '../types'
import { githubService } from '@/services'
import { GithubRepository, GithubProfile } from '@Domain'

@Module
export default class GithubModule extends VuexModule {

  repositories: GithubRepository[] = []
  rootState: any

  @MutationAction async [FETCH_GITHUB_REPO] (profile: GithubProfile) {
    return { repositories: await githubService.getRepo(profile) }
  }

}