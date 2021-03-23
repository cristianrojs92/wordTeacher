type word = {
  name : string,
  value: string
}

type activityWord = {
  indexSelectedWord: number;
  totalWords: number;
  words?: word[];
}
