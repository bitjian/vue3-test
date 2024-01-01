const errorLog = (msg: string): void => {
  console.error(msg)
}

enum RET_ENUM {
  SUCESS = 0,
  EXPIRE = 4
}
export { errorLog, RET_ENUM }