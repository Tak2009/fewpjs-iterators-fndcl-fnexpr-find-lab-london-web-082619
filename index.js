const testVar = {}

function testFunc() {
  return "hi"
}

const records = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

const superbowlWin = function(records) {
  const winYear = records.find(record => record.result === "W" )
  if (winYear) {return winYear.year}
} 