// 이메일 체크
export const emailCheck = (email) => {
  let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  _reg.test(email)
}