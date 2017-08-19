import angular from 'angular';

export default function arrayJoinFilter(){
  return function(array, separator){
    if(angular.isArray(array)){
      return array.join(separator || ',');
    }
  }
}