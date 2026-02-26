function genBirdsInfo(name: string): string[]{
  //split(',') はカンマで文字列を分割して配列にする
  //"hato, kiji".split(',') → ["hato", " kiji"]
  return name.split(',')
}

// 関数の型を利用
// (x: string) => string[]
function singBirds(birdInfo: (x: string) => string[]): string{
  return birdInfo('hato, kiji')[0] + ' piyo piyo'
}

console.log(singBirds(genBirdsInfo)) // "hato piyo piyo"
//console.log(singBirds('dobato')) // 型が合わないためエラー