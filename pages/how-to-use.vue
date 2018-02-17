<template>
  <article class="how-to-use-section">
    <h1 class="page-title">How to use? ～SIT-Timerの使い方～</h1>
    <p class="paragraph">{{ paragraph }}</p>
    <el-table
      :data="correspondenceTable"
      :cell-style="tableCellStyle"
    >
      <el-table-column
        prop="content"
        label="表示内容"
      ></el-table-column>
      <el-table-column
        prop="behavior"
        label="行動"
      ></el-table-column>
      <el-table-column
        prop="color"
        label="背景色"
      ></el-table-column>
    </el-table>
  </article>
</template>

<script>
const paragraph = `\
Start ボタンを押すと、カウントダウンが始まります。
カウントが0になるまで、表示された内容に対応した行動をしてください。

それぞれの状態に応じて、背景色が変わります。
`

const correspondenceTable = [
  { content: 'Warm-up', behavior: 'ウォーミングアップ', color: '#72e57d' },
  { content: 'Sprint', behavior: '運動', color: '#e57272' },
  { content: 'Interval', behavior: '休憩', color: '#727de5' },
  { content: 'Cool-Down', behavior: 'クールダウン', color: '#72e5e5' }
]

export default {
  data () {
    return {
      paragraph,
      correspondenceTable
    }
  },
  methods: {
    tableCellStyle ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 2) {
        return {
          color: row.color
        }
      } else {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.how-to-use-section {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.paragraph {
  white-space: pre-wrap;
  margin: 10px 0;
}
</style>

