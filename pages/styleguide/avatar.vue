<template>
  <div>

    <h2 class="c-h2" id="input">Avatar</h2>
    <p>A user profile picture.</p>

    <styleguideSample
      name="Initials"
      :order='1'
      vueImp='<Avatar initials="EJ" />'
    >
      <Avatar initials="EJ" />
    </styleguideSample>

    <styleguideSample
      name="Image"
      :order='2'
      vueImp='<Avatar imgSrc="/images/avatars/tb.jpg" />'
    >
      <Avatar imgSrc="/images/avatars/tb.jpg" />
    </styleguideSample>

    <styleguideSample
      name="Sizes"
      :order='3'
      vueImp="
        <Avatar imgSrc='/images/avatars/tb.jpg' size='xsmall'/>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='small'/>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='default'/>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='large'/>
      "
    >
      <Stack :space='2' horizontal>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='xsmall'/>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='small'/>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='default'/>
        <Avatar imgSrc='/images/avatars/tb.jpg' size='large'/>
      </Stack>
    </styleguideSample>

  </div>
</template>
