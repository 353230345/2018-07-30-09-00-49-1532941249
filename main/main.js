module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`);
	console.log(`o) 最大值 = ${sequence.maximum()}`);
	console.log(`o) 元素数量 = ${sequence.num()}`);
	console.log(`o) 平均值 = ${sequence.averge()}`);
};

class Sequence {
  constructor(input) {
    
  }

  minimum() {
	var min=input[0]
    for(var i=1;i<6;i++){
		if(min>input[i]){
			min=input[1];
		}
	}
	return min
  }
	
  maximum() {
	var max=input[0]
    for(var i=1;i<6;i++){
		if(max<input[i]){
			max=input[1];
		}
	}
	return max
    
  }
  num(){
	return input.length;
  }
  averge(){
	var sum=0;
    for(var i=0;i<6;i++){
		sum=sum+input[i]
	}
	return sum/input.length
  }
}
