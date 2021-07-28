// cookie 가져오기
const getCookie = (name) => {
  let value = '; ' + document.cookie;
  let parts = value.split(`; ${name}=`);

  if(parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

// cookie 추가하기
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp*24*60*60*1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}

// cookie 삭제하기
const deleteCookie = (name) => {
   let date = new Date('2021-01-01').toUTCString();
   console.log(date);
   document.cookie = name + '=; expires=' + date;
}

export { getCookie, setCookie, deleteCookie };