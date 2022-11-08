export default interface User {
  _id: string;
  email: string;
  name: string;
  profilePic: string;
  provider: string;
  userType: number;
  updatedAt: Date;
}
