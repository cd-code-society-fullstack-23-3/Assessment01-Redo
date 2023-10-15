const gradeCategory = (grade) => {
    if (grade < 0 || grade > 100) {
      return "Invalid Grade";
    } else if (grade >= 0 && grade <= 49) {
      return "Fail";
    } else if (grade >= 50 && grade <= 59) {
      return "Pass";
    } else if (grade >= 60 && grade <= 74) {
      return "Credit";
    } else if (grade >= 75 && grade <= 89) {
      return "Distinction";
    } else {
      return "High Distinction";
    }
};
  
module.exports = gradeCategory;
  