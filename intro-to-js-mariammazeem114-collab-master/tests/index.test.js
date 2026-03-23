// These are the tests for the exercise. Do not modify this file.
const {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
} = require('../index');

describe('JavaScript Fundamentals', () => {

  // Test for sum function
  describe('sum', () => {
    test('should return the sum of two positive numbers', () => {
      expect(sum(2, 3)).toBe(5);
    });

    test('should return the sum of a positive and a negative number', () => {
      expect(sum(5, -2)).toBe(3);
    });

    test('should return the sum of two negative numbers', () => {
      expect(sum(-10, -5)).toBe(-15);
    });

    test('should return the sum when one number is zero', () => {
      expect(sum(0, 7)).toBe(7);
    });
  });

  // Test for reverseString function
  describe('reverseString', () => {
    test('should reverse a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should return an empty string if given an empty string', () => {
      expect(reverseString('')).toBe('');
    });
  });

  // Test for findLargest function
  describe('findLargest', () => {
    test('should find the largest number in an array of positive numbers', () => {
      expect(findLargest([1, 5, 2, 8, 3])).toBe(8);
    });

    test('should find the largest number in an array with negative numbers', () => {
      expect(findLargest([-1, -5, -2, -8, -3])).toBe(-1);
    });

    test('should find the largest number in an array with mixed numbers', () => {
      expect(findLargest([-10, 5, 0, 15, -2])).toBe(15);
    });

    test('should return null for an empty array', () => {
      expect(findLargest([])).toBeNull();
    });
  });

  // Test for isPalindrome function
  describe('isPalindrome', () => {
    test('should return true for a simple palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('should return false for a non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('should be case-insensitive', () => {
      expect(isPalindrome('Madam')).toBe(true);
    });

    test('should return true for a single character string', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    test('should return true for an empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });
  });

  // Test for filterEvenNumbers function
  describe('filterEvenNumbers', () => {
    test('should return an array of only even numbers', () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('should return an empty array if no even numbers are present', () => {
      expect(filterEvenNumbers([1, 3, 5, 7, 9])).toEqual([]);
    });

    test('should handle an array with negative even numbers', () => {
      expect(filterEvenNumbers([-1, -2, 3, -4, 5])).toEqual([-2, -4]);
    });

    test('should handle an array that includes zero', () => {
        expect(filterEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
    });

    test('should return an empty array if the input array is empty', () => {
      expect(filterEvenNumbers([])).toEqual([]);
    });
  });

});

