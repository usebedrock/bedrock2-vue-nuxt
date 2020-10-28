<template>
  <div>

    <h2 class="c-h2" id="input">Avatar</h2>
    <p>A user profile picture.</p>

    <styleguideSample
      name="Initials"
      :order='1'
      code='<Avatar initials="EJ" />'
    >
      <Avatar initials="EJ" />
    </styleguideSample>

    <styleguideSample
      name="Image"
      :order='2'
      code='<Avatar imgSrc="/images/avatars/tb.jpg" />'
    >
      <Avatar imgSrc="/images/avatars/tb.jpg" />
    </styleguideSample>

    <styleguideSample
      name="Sizes"
      :order='3'
      :code="sizeSampleCode"
    >
      <sizeSample/>
    </styleguideSample>

  </div>
</template>

<script>
import sizeSampleCode from '!!raw-loader!./sizeSample'
import sizeSample from './sizeSample'

export default {
  head() {
    return {
      title: "Avatar"
    };
  },
  components: {
    sizeSample
  },
  data() {
    return {
      sizeSampleCode
    }
  }
}
</script>
