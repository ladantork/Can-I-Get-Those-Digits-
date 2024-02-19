function extractNumbers(str) {
    const regex = /\d+/ ;
    const matches = str.match(regex)
    return Number(matches)
  }