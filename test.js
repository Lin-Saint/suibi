const p = new Promise((resolve, reject) => {
  resolve(1);
});

const p1 = p
  .then((res) => {
    console.log("lin");
    // return 222;
    // return Promise.resolve(111);
  })
  .then((res) => {
    console.log("gui");
    return Promise.reject(111);
  })
  .then(
    (r) => {
      console.log("zhelizouma");
    },
    (err) => {
      console.log("err", err);
    }
  )
  .then((res) => {
    console.log(res);
    console.log("zuihoune");
  });

// console.log(p1);
setTimeout(() => {
  console.log(p1);
});

//在then中reject之后，后面的then如果没有错误处理回调函数是不会走到的。
