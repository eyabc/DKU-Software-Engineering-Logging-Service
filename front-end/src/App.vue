<template>
  <div id="app">
    <site-header />
    <github-factory />
    <div class="siteContent">
      <router-view />
    </div>
    <site-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { GithubFactory, SiteHeader, SiteFooter } from '@/components'
import { SIGN_IN } from '@/middleware/store/types/MutationType'
import { AccessToken } from '@/middleware/store/types'
import { ActionMethod } from 'vuex'

const components = { GithubFactory, SiteHeader, SiteFooter }

@Component({ components })
export default class App extends Vue {
  @State(state => state.user.access_token)
  private token: AccessToken | undefined

  @Action(SIGN_IN) signIn: ActionMethod | undefined

  created () {
    const { token, signIn } = this
    token && signIn && signIn(token)
  }
}
</script>

<style lang="scss" src="@/assets/scss/common.scss"></style>
