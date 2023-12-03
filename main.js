const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  var countHealthOfBatteries = {          //stores the count of each classification of battery
      healthy: 0,
      exchange: 0,
      failed: 0
  };

  for(var i=0;i<presentCapacities.length;i++){

      var stateOfHealth = (presentCapacities[i]/120)*100;  //calculate state-of-healt of battery

      if(stateOfHealth >= 81){      //check if battery is 'healthy'
            countHealthOfBatteries.healthy += 1;
      }
      else if(stateOfHealth <= 80 && stateOfHealth >= 62){  //check if battery is 'exchange'
            countHealthOfBatteries.exchange += 1;
      }
      else{       //battery is assigned 'failed'
            countHealthOfBatteries.failed += 1;
      }

  }
  return countHealthOfBatteries;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');

  //battery set 1

  console.log('Test case 1:');
  const batterySet1 = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(batterySet1);    //call function for batterySet1

  try{      //check each category
      assert(counts["healthy"] == 2);
      assert(counts["exchange"] == 3);
      assert(counts["failed"] == 1);
      console.log('Passed');  //print if all 3 are correct
  }
  catch(e){
      console.log('Failed');  //print if any one is wrong
  }

  //battery set 2 - boundary conditions

  console.log('Test case 2:');
  const batterySet2 = [113, 96, 74, 75, 73, 72];
  counts = countBatteriesByHealth(batterySet2);  //call function for batterySet1
  
  try{   //check each category
      assert(counts["healthy"] == 1);
      assert(counts["exchange"] == 2);
      assert(counts["failed"] == 3);
      console.log('Passed');  //print if all 3 are correct
  }
  catch(e){
      console.log('Failed');  //print if any one is wrong
  }

  console.log("Done counting :)"); //end of test cases
}

testBucketingByHealth();
