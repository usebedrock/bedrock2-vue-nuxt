<template>
  <div>

    <h2 class="c-h2" id="button">Component name</h2>

    <styleguideSample
      name="Icon button"
      :order='1'
      vueImp='
        <Button layout="icon" theme="primary">
          <span class="c-button__icon-wrap"><Icon icon="arrow-left" size="20" /></span>
          <span class="u-hide-accessibility">Terug</span>
        </Button>
      '
    >
        <Button layout="icon" theme="primary">
          <span class="c-button__icon-wrap"><Icon icon="arrow-left" size="20" /></span>
          <span class="u-hide-accessibility">Terug</span>
        </Button>
    </styleguideSample>

    <styleguideSample
      name="Text button"
      :order='2'
      vueImp='<Button theme="primary">Label</Button>'
    >
        <Button theme="primary">Label</Button>
    </styleguideSample>

  </div>
</template>
