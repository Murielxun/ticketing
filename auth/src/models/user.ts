import mongoose from 'mongoose';
import { Password } from '../services/password';

// an interface that describes the property
// that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// an interface that describes  the properties
// that a user model has
// needed just bcuz using ts
// what the entire collection of users look like
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// an interface that describes the properties
// that a user document has
// what a single user has
// if has extra properties, this is where to add them
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;

    }
  }
});

// need to call done by ourselves
userSchema.pre('save', async function (done) {
  // this = the user we tried to save
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
