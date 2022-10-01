function SubarrayWithMaxSum(nums) {
  // Initialize currMax and globalMax
  // with first value of nums
  var endIndex,
    currMax = nums[0];
  var globalMax = nums[0];

  // Iterate for all the elements
  // of the array
  for (var i = 1; i < nums.length; ++i) {
    // Update currMax
    currMax = Math.max(nums[i], nums[i] + currMax);

    // Check if currMax is greater
    // than globalMax
    if (currMax > globalMax) {
      globalMax = currMax;
      endIndex = i;
    }
  }

  var startIndex = endIndex;

  // Traverse in left direction to
  // find start Index of subarray
  while (startIndex >= 0) {
    globalMax -= nums[startIndex];

    if (globalMax == 0) break;

    // Decrement the start index
    startIndex--;
  }

  // Printing the elements of
  // subarray with max sum
  for (var i = startIndex; i <= endIndex; ++i) {
    document.write(nums[i] + " ");
  }
}

// Driver Code

// Given array arr[]
var arr = [-2, -5, 6, -2, -3, 1, 5, -6];

// Function call
SubarrayWithMaxSum(arr);
