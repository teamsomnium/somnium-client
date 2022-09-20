export default function getFormatDate(date: any) {
  const year = date.getFullYear()
  const month = 1 + date.getMonth()
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일 ` //Template literals 이용
}
