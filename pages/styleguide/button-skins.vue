<template>
  <div>

    <h2 class="c-h2" id="button">Button types</h2>

    <styleguideSample
      name="Primary button"
      :order='1'
      vueImp='<Button theme="primary">Label</Button>'
    >
        <Button theme="primary">Label</Button>
    </styleguideSample>

    <styleguideSample
      name="Secondary button"
      :order='2'
      vueImp='<Button theme="secondary">Label</Button>'
    >
        <Button theme="secondary">Label</Button>
    </styleguideSample>

    <styleguideSample
      name="Tertiary button"
      :order='3'
      vueImp='<Button theme="tertiary">Label</Button>'
    >
        <Button theme="tertiary">Label</Button>
    </styleguideSample>

    <styleguideSample
      name="Danger button"
      :order='4'
      vueImp='<Button theme="danger">Label</Button>'
    >
        <Button theme="danger">Label</Button>
    </styleguideSample>

  </div>
</template>
