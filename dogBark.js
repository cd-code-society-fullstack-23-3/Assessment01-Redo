const dogBark = (alone, hour)=>{
    if (alone && ((hour >= 20 && hour <= 23) || (hour >= 0 && hour <= 5))) {
        return true;
      } else {
        return false;
      }
}

module.exports = dogBark;