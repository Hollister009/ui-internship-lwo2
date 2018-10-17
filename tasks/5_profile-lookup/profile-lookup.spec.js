import {lookupProfile} from './profile-lookup';

describe('profile-lookup', () => {
  test('should return: "Vos" for arguments: "Kristian", "lastName" ', () => {
    expect(lookupProfile('Kristian', 'lastName')).toBe('Vos');
  });

  test('should return: ["Intriguing Cases", "Violin"] for arguments: "Sherlock", "likes" ', () => {
    expect(lookupProfile('Sherlock', 'likes')).toEqual([
      'Intriguing Cases',
      'Violin',
    ]);
  });

  test('should return: array for arguments: "Harry", "likes"', () => {
    expect(Array.isArray(lookupProfile('Harry', 'likes'))).toBe(true);
  });

  test('should return: "No such contact" for arguments: "Bob", "number" ', () => {
    expect(lookupProfile('Bob', 'number')).toBe('No such contact');
  });

  test('should return: "No such contact" for arguments: "Akira", "address" ', () => {
    expect(lookupProfile('Akira', 'address')).toBe('No such property');
  });
});
