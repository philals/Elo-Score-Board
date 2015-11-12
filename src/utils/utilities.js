module.exports = {
  percent(wins, losses){
   if(wins + losses > 9){
    return (Math.round(wins / (wins + losses) * 100) || 0)
   }
   else{
    return '-';
   }
  }
};
