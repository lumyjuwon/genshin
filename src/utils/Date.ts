/**
 * @returns YYYY-mm-dd HH:MM:SS 형식으로 반환
 */
export function getFormatDate() {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  const day = nowDate.getDate();
  const hour = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const seconds = nowDate.getSeconds();

  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}
