function sayHello(name: string): string {
  return `Hello ${name}`
  // これは "Hello" + name と同じ
}

let greet : string
greet = sayHello('Takuya')
console.log(greet)

function sayHello2(name: string, greeting: string = 'Hello'): string {
  return `${greeting} ${name}`
}

// 以下はどちらも問題なく動作します
sayHello2('Takuya') // Hello Takuya
sayHello2('Takuya', 'Hey')　// Hey Takuya

function sayHello3(name: string, greeting?: string): string {
  return `${greeting || ''} ${name}`
}

// 以下はどちらも問題なく動作します
sayHello3('Takuya') // Takuya
sayHello3('Takuya', 'Hello') // Hello Takuya