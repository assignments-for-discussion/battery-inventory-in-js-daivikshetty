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

  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);

  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);

  console.log("Done counting :)");
}

testBucketingByHealth();
