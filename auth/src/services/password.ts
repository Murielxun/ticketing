// scrypt is good, but downside: callback based, we want to use async & await
import { scrypt, randomBytes } from 'crypto';
// so we need promisify, can take this callback based function and turn it into promise based implementation
// compatiable with using async & await
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class Password {
  // static method -> methods so we can access without creating an isntance of the class
  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buffer = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buffer.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buffer = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
    return buffer.toString('hex') === hashedPassword
  }
}
