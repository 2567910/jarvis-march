
let indexOfFirstPoint = 0;

let startData = generateData(10)
let result = generateConvexHull(startData);

console.log("Data:" + JSON. stringify(startData) );
console.log("Convex Hull" + JSON. stringify(result) );

function generateData(numberOfPoints) {
	var data = [];
	for (var i = 0; i < numberOfPoints; i++) {
		data.push({
			x: getRandomInt(100),
			y: getRandomInt(100)
		});
	}
	return data;
}

function generateConvexHull(data) {
	var convexHull = [];
	var loop = true;
	var index = 1;
	convexHull[0] = findFirstPointOnHull(data); //Just loops thrue all points and returns point with lowest x value.

	while (loop) {

			if (indexOfFirstPoint == 0) {
				nextBestPoint = data[1];
			} else {
				nextBestPoint = data[0];
			}

			for (var j = 1; j <= data.length - 1; j++) {
				if (pointIsOnLeft(convexHull[index - 1], nextBestPoint, data[j]) == 1 || nextBestPoint == data[j]) {
					nextBestPoint = data[j];
				}
			}
			convexHull[index] = nextBestPoint;
			indexOfFirstPoint = data.indexOf(nextBestPoint);

			if (nextBestPoint == convexHull[0]) {
				loop = false;
			}

			index++;

	}
	return convexHull;
}

function pointIsOnLeft(pointA, pointB, pointC) {
	var orientation = (pointA.x - pointB.x) * (pointA.y - pointC.y) - (pointA.x - pointC.x) * (pointA.y - pointB.y);
	if (orientation === 0) {
		return 0;
	}
	else if (orientation > 0 || -0) { // means data[j] is on left side
		return 1;
	}
	else {
		return 2;
	}
}

function findFirstPointOnHull(data) {
	var firstPoint = data[0];
	data.forEach((element, j) => {
		if (element.x < firstPoint.x) {
			firstPoint = element;

		}
	})
	indexOfFirstPoint = data.indexOf(firstPoint);
	return firstPoint
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
