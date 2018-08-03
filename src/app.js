window.app = {
  login: (email, password, cb) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then((result) =>{
          cb(null, result)
      })
      .catch((error)=>{
          cb(error)
      });
  },
  register: (name,email,password,cb)=>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result)=>{
       cb(null,result)
    })
    .catch((error)=>{
       cb(error)
    })
  }
}