const testVar = {}

function testFunc() {
  return "hi"
}

const records = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
  {year: "2018", result: "W"},
]

const records2 = [
  {year: "2018", result: "L"},
  {year: "2017", result: "L"},
  {year: "2016", result: "N/A"},
  {year: "2018", result: "L"},
]

const superbowlWin = function(records) {
  const winYear = records.find(record => record.result === "W" )
  if (winYear) {return winYear.year}
} 

const superbowlWin2 = function(records) {
  const winYear = records.filter(record => record.result === "W" )
  return winYear
} 

