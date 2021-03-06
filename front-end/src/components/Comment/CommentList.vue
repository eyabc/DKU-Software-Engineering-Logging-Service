<template>
  <section v-if="commentList.length !== 0">

    <header>
      <h2><i class="el-icon-chat-round" /> 댓글 {{ commentList.length }}</h2>
    </header>

    <article
      v-for="{ idx, depth, content, writer: { id, profile: { avatar_url } }, createdAt } in commentList"
      :key="idx"
      :style="{ marginLeft: `${depth * 20}px` }"
      :class="{ reply: depth > 0 }"
    >
      <span class="replyIcon" />
      <ul>
        <li class="commentWriter">
          <figure>
            <img :src="`${avatar_url}&s=30`" :alt="id">
          </figure>
          <span class="commentWriterID" v-html="id" />
        </li>
        <li class="commentCreatedAt">{{ createdAt*1 | fromNow }}</li>
        <li class="commentEdit" v-if="userProfile !== null && userProfile.login === id">
          <el-button type="default" size="mini" icon="el-icon-edit-outline" plain circle />
          <el-button type="danger" size="mini" icon="el-icon-delete" plain circle />
        </li>
      </ul>
      <div class="commentContent" v-html="content" />
    </article>

  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ActionMethod } from 'vuex'
import { Action, State } from 'vuex-class'
import { FETCH_COMMENT } from '@/middleware/store/types'
import { Comment, GithubProfile } from '@Domain'
import CommentForm from './CommentForm.vue'

const components = { CommentForm }

@Component({ components })
export default class CommentList extends Vue {

  @Action(FETCH_COMMENT) fetchComment!: ActionMethod
  @State(state => state.comment.commentList) commentList!: Comment[]
  @State(state => state.user.profile) userProfile!: GithubProfile|null

  created () {
    this.fetchComment(this.$route.params.idx)
  }

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/lib";

ul, li, div, section, header, article, p, figure {
  margin: 0;
  padding: 0;
}

img {
  vertical-align: middle;
}

ul, li {
  list-style: none;
  display: flex;
  align-items: center;
}

ul {
  font-family: enFont();
}

section {
  margin-bottom: 30px;
}

header {
  margin-bottom: 10px;
}

h2 {
  font-weight: 400;
  margin: 0;
  font-size: 21px;
}

.el-icon-chat-round {
  display: inline-block;
  transform: translateY(1px);
}

article {
  padding: 15px;
  border-top: 1px dotted #ddd;

  header + & {
    border-top: 1px solid #eee;
    margin-top: 20px;
  }

  &:last-child {
    border-bottom: 1px solid #eee;
  }

  &.reply {
    border-top: none;
    background: #f7f7f7;
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 0 5px 5px 5px;
    position: relative;
  }

  .replyIcon {
    display: block;
    position: absolute;
    left: 0;
    top: -20px;
    width: 20px;
    height: 20px;
    background: #f7f7f7;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-top: -20px;
      background: #fff;
    }

  }
}

figure {
  @include img-wrap();
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;
}

.comment {

  &WriterID {
    font-size: 15px;
    margin-left: 5px;
  }

  &CreatedAt {
    font-size: 13px;
    color: #aaa;
    margin-left: 10px;
  }

  &Edit {
    margin-left: auto
  }

  &Content {
    margin-top: 10px;
    line-height: 1.5;
    min-height: calc(15px * (1.5 * 2));
    letter-spacing: -0.5px;
  }

}

.noComment {
  text-align: center;
  background: #fafafa;
  padding: 30px;
  color: #aaa;
  border-radius: 5px;
  border: 1px solid #eee;
}


</style>